import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import TripData from './components/TripData';

export default function EditTripSection({ center, recommendation, setRecommendation, placeData, addPlaces }) {
  return (
    <Flex w="40vw">
      <Sidebar />
      <TripData center={center} recommendation={recommendation} setRecommendation={setRecommendation} placeData={placeData} addPlaces={addPlaces}/>
    </Flex>
  );
}
