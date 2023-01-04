import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react';
import PlaceCard from './PlaceCard';
import PlaceInput from './PlaceInput';
import PlaceRecommendation from './PlaceRecommendation';
import { useSelector } from 'react-redux';

export default function PlaceToVisit({
  center,
  placeData,
  addPlaces,
  recommendation,
  setRecommendation,
}) {
  const getMapsLoad = useSelector((state) => state.trip.maps)
  return (
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
            ({ place_id, photos, formatted_address, name, rating, geometry, vicinity }, index) => {
              return (
                <PlaceCard
                  functionPass={() => getMapsLoad.panTo({
                    lat: geometry.location.lat(),
                    lng: geometry.location.lng()
                  })}
                  key={place_id}
                  placeImg={
                    photos
                      ? photos[0].getUrl()
                      : 'https://via.placeholder.com/200'
                  }
                  index={index}
                  placeAddress={formatted_address !== undefined ? formatted_address : vicinity}
                  placeName={name}
                  rating={rating}
                />
              );
            }
          )}
          <PlaceInput
            setRecommendation={setRecommendation}
            center={center}
            addPlaces={addPlaces}
          />
          <Grid
            autoFlow="column"
            autoColumns="45%"
            gridGap="4"
            overflowX="auto"
            overflowY="hidden"
          >
            {recommendation.map((item, index) => (
              <PlaceRecommendation item={item} key={index} />
            ))}
          </Grid>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
