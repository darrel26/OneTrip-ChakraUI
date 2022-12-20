import React, { useEffect, useState } from 'react';
import { VStack, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import PlaceToVisit from './PlaceToVisit';

export default function TripData({ center }) {
  const [placeData, setPlaceData] = useState([]);

  const addPlaces = (placeDetail) => {
    if (placeData.length !== 0) {
      setPlaceData([...placeData, placeDetail]);
    } else {
      setPlaceData([placeDetail]);
    }
  };

  useEffect(() => {
    console.log(placeData);
  }, [placeData]);

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
      <PlaceToVisit
        center={center}
        placeData={placeData}
        addPlaces={addPlaces}
      />
    </VStack>
  );
}
