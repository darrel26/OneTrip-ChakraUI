import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { LocationIcon } from '../../../../../assets/Icons/icons';
import { Autocomplete } from '@react-google-maps/api';

export default function InputLocation({locationRef,_onChangeFunction}) {
  return (
    <InputGroup
      w="full"
      h="85%"
      ml={4}
      _after={{
        content: '""',
        borderRight: 'solid 2px',
        borderColor: 'gray.200',
        borderRadius: 'base',
      }}
    >
      <InputLeftElement
        h="full"
        pointerEvents="none"
        children={<LocationIcon color="red"/>}
      />
      <Autocomplete
       

      >
        <Input
        ref={locationRef}
        onChange={_onChangeFunction}
        placeholder="City, Destination"
        h="full"
        border="none"
        _focus={{ outline: 'none', boxShadow: 'none' }}
      />
      </Autocomplete>
    </InputGroup>
  );
}
