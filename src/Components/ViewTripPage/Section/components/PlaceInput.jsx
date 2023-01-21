import React, { useState } from 'react';
import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { Autocomplete } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { LocationIcon } from '../../../../assets/Icons/icons';

export default function PlaceInput({ addPlaces }) {
  const [autocomplete, setAutocomplete] = useState();
  const [placeDetail, setPlaceDetail] = useState();

  const getBasedLocation = useSelector((state) => state.trip.basedLocation);

  return (
    <>
      {getBasedLocation && (
        <HStack w="full" spacing={2}>
          <Stack w="70%">
            <Autocomplete
              styles={{ width: '100%' }}
              className="autocomplete-add-place"
              bounds={{
                north: getBasedLocation.geometry.location.lat + 0.04,
                south: getBasedLocation.geometry.location.lat - 0.04,
                east: getBasedLocation.geometry.location.lng + 0.04,
                west: getBasedLocation.geometry.location.lng - 0.04,
              }}
              options={{
                strictBounds: true,
                fields: [
                  'formatted_address',
                  'name',
                  'geometry',
                  'photos',
                  'place_id',
                  'rating',
                ],
              }}
              onLoad={(autocomplete) => setAutocomplete(autocomplete)}
              onPlaceChanged={() => setPlaceDetail(autocomplete.getPlace())}
            >
              <InputGroup bgColor="gray.100">
                <InputLeftElement
                  children={<LocationIcon color="gray.300" />}
                ></InputLeftElement>
                <Input w="full" placeholder="Enter Location"></Input>
              </InputGroup>
            </Autocomplete>
          </Stack>
          <Button
            w="30%"
            colorScheme="teal"
            borderRadius="sm"
            onClick={() => addPlaces(placeDetail)}
          >
            Add Place
          </Button>
        </HStack>
      )}
    </>
  );
}
