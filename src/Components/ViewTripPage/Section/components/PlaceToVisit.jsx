import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { storePLaceData } from '../../../../Redux/ReduxSlices';
import PlaceCard from './PlaceCard';
import PlaceInput from './PlaceInput';
import PlaceRecommendation from './PlaceRecommendation';

export default function PlaceToVisit() {
  const getPlaceData = useSelector((state) => state.trip.placeData);
  const getMapsLoad = useSelector((state) => state.trip.maps);
  const getNearbyRecommendation = useSelector(
    (state) => state.trip.nearbyRecommendation
  );

  const dispatch = useDispatch();

  const addPlaces = (placeDetail) => {
    if (getPlaceData.length !== 0) {
      dispatch(storePLaceData([...getPlaceData, placeDetail]));
    } else {
      dispatch(storePLaceData([placeDetail]));
    }
  };

  return (
    <>
      {getPlaceData.length > 0 && (
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
              {getPlaceData.map(
                (
                  {
                    place_id,
                    photos,
                    formatted_address,
                    name,
                    rating,
                    geometry,
                    vicinity,
                  },
                  index
                ) => {
                  return (
                    <PlaceCard
                      functionPass={() => {
                        getMapsLoad.panTo({
                          lat: geometry.location.lat,
                          lng: geometry.location.lng,
                        });
                      }}
                      key={place_id}
                      placeImg={
                        photos
                          ? 'https://via.placeholder.com/200'
                          : 'https://via.placeholder.com/200'
                      }
                      index={index}
                      placeAddress={
                        formatted_address !== undefined
                          ? formatted_address
                          : vicinity
                      }
                      placeName={name}
                      rating={rating}
                    />
                  );
                }
              )}
              <PlaceInput addPlaces={addPlaces} />
              <Grid
                autoFlow="row"
                gridGap="4"
                overflowX="auto"
                overflowY="hidden"
                w="full"
              >
                {getNearbyRecommendation.length > 0 &&
                  getNearbyRecommendation.map((item, index) => (
                    <PlaceRecommendation
                      item={item}
                      key={index}
                      onClick={() => addPlaces(item)}
                    />
                  ))}
              </Grid>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      )}
    </>
  );
}
