import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { LocationIcon } from '../../../../../assets/Icons/icons';
import { Autocomplete } from '@react-google-maps/api';

export default function PlaceInput({ center, addPlaces }) {
  const [autocomplete, setAutocomplete] = useState();
  const [placeDetail, setPlaceDetail] = useState();
  return (
    <HStack w="full" spacing={2}>
      <Stack w="70%">
        <Autocomplete
          styles={{
            width: '100%',
          }}
          className="auto-complete-add-place"
          bounds={{
            north: center.lat + 0.1,
            south: center.lat - 0.1,
            east: center.lng + 0.1,
            west: center.lng - 0.1,
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
  );
}
