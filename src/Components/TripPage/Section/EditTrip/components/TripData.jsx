import React from 'react';
import {
  VStack,
  Heading,
  HStack,
  Icon,
  Text,
  Accordion,
  Button,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import PlaceToVisit from './PlaceToVisit';
import Budgetting from './Budgetting';
import { useSelector } from 'react-redux';

export default function TripData({
  center,
  recommendation,
  setRecommendation,
  placeData,
  addPlaces,
  budgetting,
  addBudget,
  addExpenses,
  saveTrip,
}) {
  const getPlaceDataInit = useSelector((state) => state.trip.basedLocation);
  const getOriginDate = useSelector((state) => state.trip.originsDate);
  const getDestDate = useSelector((state) => state.trip.destinationDate);
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
      <HStack width="full" pt={8} justify="space-between">
        <Heading fontWeight="medium">Trip to {getPlaceDataInit.name}</Heading>
        <Button colorScheme="red" onClick={saveTrip}>
          Save Trip
        </Button>
      </HStack>
      <HStack>
        <Icon as={CalendarIcon}></Icon>
        <Text>
          {getOriginDate} | {getDestDate}
        </Text>
      </HStack>

      <Accordion w="full" defaultIndex={[0]} allowMultiple py={10}>
        <PlaceToVisit
          recommendation={recommendation}
          setRecommendation={setRecommendation}
          center={center}
          placeData={placeData}
          addPlaces={addPlaces}
        />
        <Budgetting
          budgetting={budgetting}
          addBudget={addBudget}
          addExpenses={addExpenses}
        />
      </Accordion>
    </VStack>
  );
}
