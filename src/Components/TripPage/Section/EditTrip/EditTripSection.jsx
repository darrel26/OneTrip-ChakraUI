import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import TripData from './components/TripData';

export default function EditTripSection({ center }) {
  return (
    <Flex w="40vw">
      <Sidebar />
      <TripData center={center} />
    </Flex>
  );
}
