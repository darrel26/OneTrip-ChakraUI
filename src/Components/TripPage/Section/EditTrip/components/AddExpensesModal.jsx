import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from '@chakra-ui/react';
import { storeExpenses } from '../../../../../Redux/ReduxSlices';
import { RupiahIcon } from '../../../../../assets/Icons/icons';
import { useDispatch, useSelector } from 'react-redux';

export default function AddExpensesModal({ isOpen, onClose }) {
  const amount = useRef(null);
  const category = useRef(null);

  const getExpenses = useSelector((state) => state.trip.expenses);
  const dispatch = useDispatch();

  const addExpenses = (category, amount) => {
    const newExpenses = {
      category,
      amount,
    };
    dispatch(storeExpenses([...getExpenses, newExpenses]));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      motionPreset="scale"
      isCentered
    >
      <ModalOverlay />
      <ModalContent px={10} py={12}>
        <VStack justifyContent="center">
          <Heading size="lg" fontWeight="semibold">
            Add Expenses
          </Heading>
        </VStack>
        <ModalBody>
          <Stack spacing={6} pt={6}>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <InputGroup>
                <InputLeftElement children={<RupiahIcon color="gray.300" />} />
                <Input type="number" ref={amount}></Input>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Add Category" ref={category}>
                <option value="Food">Food</option>
                <option value="Hotel">Hotel</option>
                <option value="Transportation">Transportation</option>
                <option value="Others">Others</option>
              </Select>
            </FormControl>
            <Button
              colorScheme="teal"
              onClick={() => {
                addExpenses(category.current.value, amount.current.value);
                onClose;
              }}
            >
              Save
            </Button>
          </Stack>
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}
