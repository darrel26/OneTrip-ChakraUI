import React, {useState} from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { LocationIcon } from '../../../../../assets/Icons/icons';
import { Autocomplete } from '@react-google-maps/api';

export default function InputLocation({ placeDetail, locationRef, _onChangeFunction, setAuto }) {
  
  return (
    <Autocomplete
      onLoad={(auto)=>setAuto(auto)}
      onPlaceChanged={() => placeDetail()}
      ref={locationRef}
      className="autocomplete home"
      styles={{
        width: '100%',
      }}
    >
      <InputGroup
        w="300px"
        h="55px"
        _after={{
          content: '""',
          borderRight: 'solid 2px',
          borderColor: 'gray.200',
          borderRadius: 'base',
        }}
      >
        <InputLeftElement
          h="100%"
          pointerEvents="none"
          children={<LocationIcon color="red" />}
        />
        <Input
          onChange={_onChangeFunction}
          placeholder="City, Destination"
          h="full"
          border="none"
          _focus={{ outline: 'none', boxShadow: 'none' }}
        />
      </InputGroup>
    </Autocomplete>
  );
}
