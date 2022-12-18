import React from 'react';
import { InputGroup, Input } from '@chakra-ui/react';

export default function InputDate() {
  return (
    <InputGroup
      w="80%"
      h="85%"
      ml={4}
      _after={{
        content: '""',
        borderRight: 'solid 2px',
        borderColor: 'gray.200',
        borderRadius: 'base',
      }}
    >
      <Input
        type="date"
        colorScheme="teal"
        placeholder="City, Destination"
        h="full"
        border="none"
        _focus={{ outline: 'none', boxShadow: 'none' }}
      />
    </InputGroup>
  );
}
