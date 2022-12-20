import React, {useEffect, useState} from 'react';
import { useJsApiLoader, GoogleMap, MarkerF} from '@react-google-maps/api';
import { Container, HStack, Flex } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';

let libraries = ['places'];
let placeServices;

const center = {
  lat: -6.914864,
	lng: 107.608238
};

export default function TripPage() {
  const [recommendation, setRecommendation] = useState([])
  const [placeData, setPlaceData] = useState([]);

  const addPlaces = (placeDetail) => {
    if (placeData.length !== 0) {
      setPlaceData([...placeData, placeDetail]);
    } else {
      setPlaceData([placeDetail]);
    }
  };
  
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBuDXGh0iay6VVMlb3X7Odap7W3mS8ZZiE',
    libraries,
  });

  const getRecommendation = (geometry) => {
    const request = {
      location: geometry,
      radius: '500',
      type: ['restaurant']
    }
    placeServices.nearbySearch(request, (response) => {
      setRecommendation(response.slice(0,5))
      console.log(response.slice(0,5));
    })
  };

  const onLoad = (map) => {
    placeServices = new google.maps.places.PlacesService(map);
  };

  useEffect(() =>{
    if (placeData.length > 0) {
      getRecommendation({lat:placeData[placeData.length-1].geometry.location.lat(), lng:placeData[placeData.length-1].geometry.location.lng()})
    }
  },[placeData])

  return (
    <Container maxW="100vw" p={0}>
      {isLoaded ? (
        <HStack p={0} spacing={0}>
          <EditTripSection center={center} recommendation={recommendation} setRecommendation={onLoad} placeData={placeData} addPlaces={addPlaces} />
          <GoogleMap
            mapContainerStyle={{
              height: '100vh',
              width: '60vw',
            }}
            zoom={14}
            center={center}
            onLoad={(map) => onLoad(map)}
          >
            {
              placeData.map((item,index) => (
                <MarkerF
                    key={index}
                    position={{lat:item.geometry.location.lat(), lng:item.geometry.location.lng()}}
                />
              ))
            }
          </GoogleMap>
        </HStack>
      ) : (
        console.log(`ERROR TO LOAD GOOGLE MAP API ${loadError}`)
      )}
    </Container>
  );
}
