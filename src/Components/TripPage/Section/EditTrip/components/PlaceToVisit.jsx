import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';
import PlaceCard from './PlaceCard';
import PlaceInput from './PlaceInput';
import PlaceRecommendation from './PlaceRecommendation';

export default function PlaceToVisit({ center, placeData, addPlaces }) {
  const [recommendation, setRecommendation] = useState([]);

  return (
    <Accordion w="full" defaultIndex={[0]} allowMultiple py={10}>
      <AccordionItem>
        <h1>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight="bold">Place To Visit</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <AccordionPanel pb={4}>
          <VStack alignItems="flex-start" spacing={4}>
            {placeData.map(
              (
                { place_id, photos, formatted_address, name, rating },
                index
              ) => {
                return (
                  <PlaceCard
                    key={place_id}
                    placeImg={
                      photos
                        ? photos[0].getUrl()
                        : 'https://via.placeholder.com/200'
                    }
                    index={index}
                    placeAddress={formatted_address}
                    placeName={name}
                    rating={rating}
                  />
                );
              }
            )}
            <PlaceInput center={center} addPlaces={addPlaces} />
            <PlaceRecommendation />
          </VStack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight="bold">Budgetting</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
