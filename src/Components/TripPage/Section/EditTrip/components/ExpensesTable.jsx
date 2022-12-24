import React from 'react';
import { Tr, Tbody, Td } from '@chakra-ui/react';

export default function ExpensesTable({ index, category, amount }) {
  return (
    <Tbody>
      <Tr>
        <Td>{index + 1}</Td>
        <Td>{category}</Td>
        <Td isNumeric>{amount}</Td>
      </Tr>
    </Tbody>
  );
}
