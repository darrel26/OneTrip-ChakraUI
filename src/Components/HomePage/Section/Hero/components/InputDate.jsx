import React from 'react';
import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css'
import { InputGroup, Input } from '@chakra-ui/react';

export default function InputDate({startPicker, endPicker , date, placeholder, setDate, minDate, maxDate}) {
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
      {/* <Input
        type="date"
        colorScheme="teal"
        placeholder="City, Destination"
        h="full"
        border="none"
        _focus={{ outline: 'none', boxShadow: 'none' }}
      /> */}
      <DatePicker
        selectsStart={startPicker}
        selectsEnd={endPicker}
        selected={date}
        placeholderText={placeholder}
        dateFormat="dd MMM yyyy"
        onSelect={(date) => setDate(date)}
        maxDate={maxDate}
        minDate={minDate}
        required
      />
    </InputGroup>
  );
}
