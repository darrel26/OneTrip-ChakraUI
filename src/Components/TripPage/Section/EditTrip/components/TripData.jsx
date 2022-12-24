import React from 'react';
import {
  VStack,
  Heading,
  HStack,
  Icon,
  Text,
  Accordion,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import PlaceToVisit from './PlaceToVisit';
import Budgetting from './Budgetting';

export default function TripData({
  center,
  recommendation,
  setRecommendation,
  placeData,
  addPlaces,
}) {
  return (
    <VStack
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
      }}
      w="100%"
      maxH="100vh"
      overflowY="auto"
      overflowX="hidden"
      alignItems="flex-start"
      px={12}
      py="2%"
      spacing={6}
    >
      <Heading fontWeight="medium" pt={8}>
        Trip to Brazil
      </Heading>
      <HStack>
        <Icon as={CalendarIcon}></Icon>
        <Text>11/25 - 11/30</Text>
      </HStack>

      <Accordion w="full" defaultIndex={[0]} allowMultiple py={10}>
        <PlaceToVisit
          recommendation={recommendation}
          setRecommendation={setRecommendation}
          center={center}
          placeData={placeData}
          addPlaces={addPlaces}
        />
        <Budgetting />
      </Accordion>
    </VStack>
  );
}
