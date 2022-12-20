import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import { Container, HStack, Flex } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';

let libraries = ['places'];
let placeServices;

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function TripPage() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBuDXGh0iay6VVMlb3X7Odap7W3mS8ZZiE',
    libraries,
  });

  const recommendationPlaces = (location) => {
    return {
      location,
      radius: '1500',
      type: ['restaurant'],
    };
  };

  const onLoad = (map) => {
    placeServices = new google.maps.places.PlacesService(map);
    placeServices.nearbySearch(recommendationPlaces(center), (response) => {
      console.log(response);
    });
  };

  return (
    <Container maxW="100vw" p={0}>
      {isLoaded ? (
        <HStack p={0} spacing={0}>
          <EditTripSection center={center} />
          <GoogleMap
            mapContainerStyle={{
              height: '100vh',
              width: '60vw',
            }}
            zoom={7}
            center={center}
            onLoad={(map) => onLoad(map)}
          ></GoogleMap>
        </HStack>
      ) : (
        console.log(`ERROR TO LOAD GOOGLE MAP API ${loadError}`)
      )}
    </Container>
  );
}
