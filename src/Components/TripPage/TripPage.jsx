import React, { useEffect, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  DistanceMatrixService,
} from '@react-google-maps/api';
import { Container, HStack } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';
import { useSelector, useDispatch } from 'react-redux';

import generateTrip from '../../utils/generate';
import { storeRecommendation, storeMapsLoad } from '../../Redux/ReduxSlices';

let libraries = ['places'];
let placeServices;

export default function TripPage() {
  const [recommendation, setRecommendation] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [nearby, setNearby] = useState([]);

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

  const onLoad = (map) => {
    placeServices = new google.maps.places.PlacesService(map);
    if (generateAuto === '') {
      return;
    } else {
      const request = {
        location: center,
        radius: '5000',
        type: generateAuto,
      };
      placeServices.nearbySearch(request, (response) => {
        const nearbyPlace = response.slice(0, 5);
        const geometry = nearbyPlace.map(({ geometry }) => ({
          lat: geometry.location.lat(),
          lng: geometry.location.lng(),
        }));
        console.log('NEARBY TO CHECK : ', nearbyPlace);
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
        {placeData.length === 0 && (
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
