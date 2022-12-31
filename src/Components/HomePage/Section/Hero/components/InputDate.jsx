import React from 'react';
import { InputGroup, Input } from '@chakra-ui/react';

export default function InputDate({dateRef,_onChangeFunction}) {
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
        
        onChange={_onChangeFunction}
        ref={dateRef}
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
