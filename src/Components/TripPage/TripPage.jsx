import React, { useEffect, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  DistanceMatrixService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { Box, Button, Container, HStack, useToast } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';
import { useSelector, useDispatch } from 'react-redux';

import generateTrip from '../../utils/generate';
import {
  storeMapsLoad,
  storeUserPreference,
  storePLaceData,
} from '../../Redux/ReduxSlices';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';

let placeServices;
let directionService;

export default function TripPage() {
  const navigate = useNavigate();

  const [recommendation, setRecommendation] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [nearby, setNearby] = useState([]);
  const [route, setRoute] = useState(null);
  const tripTime = useSelector((state) => state.trip.journeyTime);
  const placeTime = useSelector((state) => state.trip.placeTime);

  const generateAuto = useSelector((state) => state.trip.userPreference);
  const getLocationDetail = useSelector((state) => state.trip.basedLocation);
  const getStartDate = useSelector((state) => state.trip.originsDate);
  const getEndDate = useSelector((state) => state.trip.destinationDate);
  const dispatch = useDispatch();

  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    duration: 3000,
    containerStyle: {
      width: '250px',
      maxW: '100%',
    },
  });

  const basedPlaceId = {
    placeId: getLocationDetail.place_id,
  };

  const center = {
    lat: getLocationDetail.geometry.location.lat(),
    lng: getLocationDetail.geometry.location.lng(),
  };

  const [placeId, setPlaceId] = useState([basedPlaceId]);
  const dataStore = useSelector((state) => state.trip.placeData);

  const addPlaces = (placeDetail) => {
    if (dataStore.length !== 0) {
      dispatch(storePLaceData([...dataStore, placeDetail]));
      // setPlaceData([...placeData, placeDetail]);
    } else {
      dispatch(storePLaceData([placeDetail]));
      // setPlaceData([placeDetail]);
    }
    console.log(dataStore);
  };

  const getRecommendation = (geometry) => {
    const request = {
      location: geometry,
      radius: '5000',
      type: ['tourist_attraction'],
    };
    placeServices.nearbySearch(request, (response) => {
      const filteredPlace = response.filter(
        (place) => place.rating !== undefined
      );
      setRecommendation(filteredPlace.slice(0, 5));
    });
  };

  const getRoute = async () => {
    let newWayPoint = [];
    let waypoint = dataStore.slice(1, dataStore.length - 1);
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
        lat: dataStore[0].geometry.location.lat(),
        lng: dataStore[0].geometry.location.lng(),
      },
      destination: {
        lat: dataStore[dataStore.length - 1].geometry.location.lat(),
        lng: dataStore[dataStore.length - 1].geometry.location.lng(),
      },
      waypoints: newWayPoint,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setRoute(result);
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
    if (dataStore.length > 0) {
      getRecommendation({
        lat: dataStore[dataStore.length - 1].geometry.location.lat(),
        lng: dataStore[dataStore.length - 1].geometry.location.lng(),
      });
    }
  }, [dataStore]);

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

  useEffect(() => {
    if (dataStore.length > 1) {
      getRoute();
    }
  }, [dataStore]);

  /* SAVE TRIP */

  const saveTrip = async () => {
    const config = {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
    };

    const tripData = {
      title: `Trip to ${getLocationDetail.name}`,
      basedLocation: getLocationDetail,
      tripDate: {
        startDate: getStartDate,
        endDate: getEndDate,
      },
      places: [...dataStore],
      budget: budgetting.budget,
      expenses: budgetting.expenses,
    };

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/trip/add-trip`, tripData, config)
      .then(({ status, data }) => {
        toast({
          title: status,
          description: data.message,
          status: 'success',
        });
        navigate('/my-profile');
      })
      .catch(({ response }) => {
        const { status, message } = response.data.error;
        toast({
          title: status,
          description: message,
          status: 'error',
        });
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
                const elements = response.rows
                  .map((data) => data.elements)
                  .map((e) => e.map((data) => data.duration.value));
                dispatch(
                  storePLaceData(
                    generateTrip(elements, nearby, placeTime, tripTime)
                  )
                );
                dispatch(storeUserPreference(null));
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
          placeData={dataStore}
          addPlaces={addPlaces}
          budgetting={budgetting}
          addBudget={addBudget}
          addExpenses={addExpenses}
          saveTrip={saveTrip}
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
          ></Box>
          {route && <DirectionsRenderer directions={route} />}
        </GoogleMap>
      </HStack>
    </Container>
  );
}
