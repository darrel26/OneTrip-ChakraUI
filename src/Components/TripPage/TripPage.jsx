import React, { useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, MarkerF, DirectionsRenderer } from '@react-google-maps/api';
import { Container, HStack } from '@chakra-ui/react';
import EditTripSection from './Section/EditTrip/EditTripSection';
import { useSelector, useDispatch } from 'react-redux';

let libraries = ['places'];
let placeServices;
let directionsRenderer

const center = {
  lat: -6.914864,
  lng: 107.608238,
};

export default function TripPage() {
  const [recommendation, setRecommendation] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [directionResponse,setDirectionResponse] = useState([])

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
      type: ['restaurant'],
    };
    placeServices.nearbySearch(request, (response) => {
      setRecommendation(response.slice(0, 5));
      console.log(response.slice(0, 5));
    });
  };

  const onLoad = (map) => {
    placeServices = new google.maps.places.PlacesService(map);
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map)
  };

  const calculateRoute = async () =>{
      //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: {lat: -6.914864,lng: 107.608238 },
      destination:  {lat: -6.714864,lng: 106.608238 },
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(result)

  }

  const clearRouter = () => {
    setDirectionResponse(null);
  };

  useEffect(() => {
    if (placeData.length > 0) {
      getRecommendation({
        lat: placeData[placeData.length - 1].geometry.location.lat(),
        lng: placeData[placeData.length - 1].geometry.location.lng(),
      });
    }
  }, [placeData]);

  useEffect(() => {
    console.log(directionResponse)
  },[directionResponse])

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
      <button onClick={calculateRoute}>Show Route</button>
      <button onClick={clearRouter}>Clear Route</button>
      {isLoaded ? (
        <HStack p={0} spacing={0}>
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
            options={{
            streetViewControl: false,
            }}
            zoom={14}
            center={center}
            onLoad={(map) => onLoad(map)}
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
            {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
          </GoogleMap>
        </HStack>
      ) : (
        console.log(`ERROR TO LOAD GOOGLE MAP API ${loadError}`)
      )}
    </Container>
  );
}
