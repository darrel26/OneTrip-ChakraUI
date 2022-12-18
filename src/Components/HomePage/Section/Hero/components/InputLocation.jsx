import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { LocationIcon } from '../../../../../assets/Icons/icons';

export default function InputLocation() {
  return (
    <InputGroup
      w="125%"
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
        children={<LocationIcon />}
      />
      <Input
        placeholder="City, Destination"
        h="full"
        border="none"
        _focus={{ outline: 'none', boxShadow: 'none' }}
      />
    </InputGroup>
  );
}
