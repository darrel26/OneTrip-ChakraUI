import React, { useEffect, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  DistanceMatrixService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { Box, Button, Container, HStack } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';
import { useSelector, useDispatch } from 'react-redux';

import generateTrip from '../../utils/generate';
import { storeRecommendation, storeMapsLoad } from '../../Redux/ReduxSlices';

let libraries = ['places'];
let placeServices;
let directionService;

export default function TripPage() {
  const [recommendation, setRecommendation] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [nearby, setNearby] = useState([]);
  const [route, setRoute] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(true);
  const tripTime = useSelector((state) => state.trip.journeyTime);
  const placeTime = useSelector((state) => state.trip.placeTime);

  const generateAuto = useSelector(
    (state) => state.trip.recommendationRestriction
  );
  const getLocationDetail = useSelector((state) => state.trip.location);
  const dispatch = useDispatch();

  const basedPlaceId = {
    placeId: getLocationDetail.place_id,
  };

  const center = {
    lat: getLocationDetail.geometry.location.lat(),
    lng: getLocationDetail.geometry.location.lng(),
  };

  const [placeId, setPlaceId] = useState([basedPlaceId]);

  const addPlaces = (placeDetail) => {
    if (placeData.length !== 0) {
      setPlaceData([...placeData, placeDetail]);
    } else {
      setPlaceData([placeDetail]);
    }
  };

  const getRecommendation = (geometry) => {
    const request = {
      location: geometry,
      radius: '1000',
      type: [
        'amusement_park',
        'bakery',
        'bar',
        'bowling_alley',
        'cafe',
        'shopping_mall',
        'stadium',
        'spa',
        'zoo',
        'movie_theater',
        'mosque',
        'church',
        'restaurant',
      ],
    };
    placeServices.nearbySearch(request, (response) => {
      const filteredPlace = response.filter(
        (place) => place.rating !== undefined
      );
      setRecommendation(filteredPlace.slice(0, 5));
    });
  };

  const getRoute = async (mapOrigin, mapDestination) => {
    let newWayPoint = [];
    let waypoint = placeData.slice(1, placeData.length - 1);
    waypoint.forEach((item) => {
      newWayPoint.push({
        location: {
          lat: item.geometry.location.lat(),
          lng: item.geometry.location.lng(),
        },
        stopover: true,
      });
    });
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: {
        lat: placeData[0].geometry.location.lat(),
        lng: placeData[0].geometry.location.lng(),
      },
      destination: {
        lat: placeData[placeData.length - 1].geometry.location.lat(),
        lng: placeData[placeData.length - 1].geometry.location.lng(),
      },
      waypoints: newWayPoint,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setRoute(result);
    setMarkerVisible(false);
  };

  const clearRoute = () => {
    setRoute(null);
    setMarkerVisible(true);
  };

  const onLoad = (map) => {
    directionService = new google.maps.DirectionsService();
    placeServices = new google.maps.places.PlacesService(map);
    if (generateAuto === '') {
      return;
    } else {
      const request = {
        location: center,
        radius: '50000',
        type: generateAuto,
      };
      placeServices.nearbySearch(request, (response) => {
        const nearbyPlace = response.slice(0, 8);
        const nearbyPlaceId = nearbyPlace.map(({ place_id }) => ({
          placeId: place_id,
        }));
        setNearby(nearbyPlace);
        setPlaceId([...placeId, ...nearbyPlaceId]);
      });
    }
  };

  useEffect(() => {
    if (placeData.length > 0) {
      getRecommendation({
        lat: placeData[placeData.length - 1].geometry.location.lat(),
        lng: placeData[placeData.length - 1].geometry.location.lng(),
      });
    }
  }, [placeData]);

  /* BUDGETTING */

  const [budgetting, setBudgetting] = useState({
    budget: 0,
    expenses: [],
  });

  const addExpenses = (category, amount) => {
    setBudgetting({
      ...budgetting,
      expenses: [
        ...budgetting.expenses,
        {
          category: category,
          amount: amount,
        },
      ],
    });
  };

  const addBudget = (amount) => {
    setBudgetting({
      ...budgetting,
      budget: amount,
    });
  };

  return (
    <Container maxW="100vw" p={0}>
      <HStack p={0} spacing={0}>
        {generateAuto !== null ? (
          nearby.length > 0 ? (
            <DistanceMatrixService
              options={{
                destinations: placeId,
                origins: placeId,
                travelMode: 'DRIVING',
              }}
              callback={(response) => {
                console.log(response);
                const elements = response.rows
                  .map((data) => data.elements)
                  .map((e) => e.map((data) => data.duration.value));
                setPlaceData(
                  generateTrip(elements, nearby, placeTime, tripTime)
                );
                dispatch(storeRecommendation(null));
              }}
            />
          ) : (
            ''
          )
        ) : (
          ''
        )}
        <EditTripSection
          center={center}
          recommendation={recommendation}
          setRecommendation={onLoad}
          placeData={placeData}
          addPlaces={addPlaces}
          budgetting={budgetting}
          addBudget={addBudget}
          addExpenses={addExpenses}
        />
        <GoogleMap
          mapContainerStyle={{
            height: '100vh',
            width: '60vw',
          }}
          zoom={14}
          center={center}
          onLoad={(map) => {
            onLoad(map);
            dispatch(storeMapsLoad(map));
          }}
        >
          <Box
            marginTop="10px"
            bgColor="white"
            shadow="base"
            width="100%"
            zIndex="modal"
            display="flex"
            justifyContent="center"
          >
            <Button
              onClick={markerVisible === false ? clearRoute : getRoute}
              zIndex="modal"
              borderRadius="lg"
              colorScheme="teal"
              shadow="base"
              width="200px"
            >
              {markerVisible === false ? 'Hide Route' : 'Show Route'}
            </Button>
          </Box>
          {route && <DirectionsRenderer directions={route} />}
          {placeData.map((item, index) => (
            <MarkerF
              visible={markerVisible}
              key={index}
              position={{
                lat: item.geometry.location.lat(),
                lng: item.geometry.location.lng(),
              }}
            />
          ))}
        </GoogleMap>
      </HStack>
    </Container>
  );
}
