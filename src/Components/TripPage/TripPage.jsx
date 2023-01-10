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
  const [route, setRoute] = useState(null)
  const [showRoute, setShowRoute] = useState(false)

  const generateAuto = useSelector(
    (state) => state.trip.recommendationRestriction
  );
  const getLocationDetail = useSelector((state) => state.trip.location);
  const dispatch = useDispatch();
  console.log(generateAuto);

  const center = {
    lat: getLocationDetail.geometry.location.lat(),
    lng: getLocationDetail.geometry.location.lng(),
  };

  const [latLng, setLatLng] = useState([center]);

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
      radius: '500',
      type: 'museum',
    };
    placeServices.nearbySearch(request, (response) => {
      setRecommendation(response.slice(0, 5));
      console.log(response.slice(0, 5));
    });
  };

  const getRoute = async (mapOrigin, mapDestination) => {
    let newWayPoint = [];
    let waypoint = placeData.slice(1, placeData.length - 1)
    waypoint.forEach(item => {
        newWayPoint.push(
            {
              location:{
                lat :item.geometry.location.lat(),
                lng :item.geometry.location.lng()
              },
              stopover:true
            }
          )
    })
    console.log("new way point", newWayPoint);
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
    origin: {
      lat : placeData[0].geometry.location.lat(),
      lng : placeData[0].geometry.location.lng()
    },
    destination: {
      lat : placeData[placeData.length-1].geometry.location.lat(),
      lng : placeData[placeData.length-1].geometry.location.lng()
    },
    waypoints: newWayPoint,
    travelMode: google.maps.TravelMode.DRIVING,
  });
  setRoute(result)
  }

  const onLoad = (map) => {
    directionService= new google.maps.DirectionsService();
    placeServices = new google.maps.places.PlacesService(map);
    if (generateAuto === '') {
      return;
    } else {
      const request = {
        location: center,
        radius: '10000',
        type: generateAuto,
      };
      placeServices.nearbySearch(request, (response) => {
        const nearbyPlace = response.slice(0, 9);
        const geometry = nearbyPlace.map(({ geometry }) => ({
          lat: geometry.location.lat(),
          lng: geometry.location.lng(),
        }));
        setNearby(nearbyPlace);
        setLatLng([...latLng, ...geometry]);
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
        {generateAuto !== null && (
          <DistanceMatrixService
            options={{
              destinations: latLng,
              origins: latLng,
              travelMode: 'DRIVING',
            }}
            callback={(response) => {
              const elements = response.rows
                .map((data) => data.elements)
                .map((e) => e.map((data) => data.duration.value));
              setPlaceData(generateTrip(elements, nearby));
              dispatch(storeRecommendation(null));
            }}
          />
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
              onClick={getRoute}
              zIndex="modal"
              borderRadius="lg"
              colorScheme="teal"
              shadow="base"
              width="200px"
            >
              Show Direction
            </Button>
          </Box>
          {
            route&&(
              <DirectionsRenderer directions={route}/>
            )
          }
          {placeData.map((item, index) => (
            <MarkerF
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
