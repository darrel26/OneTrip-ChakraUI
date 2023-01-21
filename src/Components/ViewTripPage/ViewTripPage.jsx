/* global google */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, HStack } from '@chakra-ui/react';
import EditTripSection from './Section/EditTripSection';
import { GoogleMap } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  storeBasedLocation,
  storeDestinationDate,
  storeMapsLoad,
  storeNearbyRecommendation,
  storeOriginsDate,
  storePLaceData,
} from '../../Redux/ReduxSlices';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../utils/cookies';

let service;

export default function ViewTripPage() {
  const { id } = useParams();
  const getPlaceData = useSelector((state) => state.trip.placeData);
  const getBasedLocation = useSelector((state) => state.trip.basedLocation);

  const [center, setCenter] = useState();

  useEffect(() => {
    viewTrip(id);
  }, []);

  const viewTrip = async (tripId) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/trip/${tripId}`,
      { headers: { Authorization: `Bearer ${getCookie('token')}` } }
    );
    dispatch(storeBasedLocation(data.basedLocation));
    dispatch(storeOriginsDate(data.tripDate.startDate));
    dispatch(storeDestinationDate(data.tripDate.endDate));
    dispatch(storePLaceData(data.places));
    setCenter(data.basedLocation.geometry.location);
    return data;
  };

  const dispatch = useDispatch();

  const getRecommendation = (geometry) => {
    const request = {
      location: geometry,
      radius: '5000',
      type: ['tourist_attraction'],
    };
    service.nearbySearch(request, (response) => {
      const filteredPlace = response
        .filter((place) => place.rating !== undefined)
        .sort((a, b) => b.rating - a.rating);
      dispatch(storeNearbyRecommendation(filteredPlace.slice(0, 5)));
    });
  };

  const onLoad = (map) => {
    service = new window.google.maps.places.PlacesService(map);
  };

  useEffect(() => {
    if (getPlaceData.length > 0) {
      getRecommendation({
        lat: getPlaceData[getPlaceData.length - 1].geometry.location.lat,
        lng: getPlaceData[getPlaceData.length - 1].geometry.location.lng,
      });
    }
  }, [getPlaceData]);

  return (
    <>
      {getBasedLocation !== null && (
        <Container maxW="100vw" p={0}>
          <HStack p={0} spacing={0}>
            <EditTripSection />
            <GoogleMap
              mapContainerStyle={{ height: '100vh', width: '60vw' }}
              zoom={14}
              center={center}
              onLoad={(map) => {
                onLoad(map);
                dispatch(storeMapsLoad(map));
              }}
            ></GoogleMap>
          </HStack>
        </Container>
      )}
    </>
  );
}
