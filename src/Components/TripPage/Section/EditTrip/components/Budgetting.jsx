import React, { useRef, useState } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Text,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { storeBudget } from '../../../../../Redux/ReduxSlices';
import { RupiahIcon } from '../../../../../assets/Icons/icons';
import AddExpensesModal from './AddExpensesModal';
import ExpensesTable from './ExpensesTable';
import { useDispatch, useSelector } from 'react-redux';

export default function Budgetting() {
  const [edit, setEdit] = useState(false);
  const budgetAmount = useRef(null);

  const dispatch = useDispatch();

  const {
    isOpen: isAddExpensesOpen,
    onOpen: onAddExpensesOpen,
    onClose: onAddExpensesClose,
  } = useDisclosure();

  const getExpenses = useSelector((state) => state.trip.expenses);
  const getBudget = useSelector((state) => state.trip.budget);

  const addBudget = (amount) => {
    dispatch(storeBudget(amount));
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontWeight="bold">Budgetting</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <HStack pb={10} w="100%">
          <VStack w="70%">
            <InputGroup h="60px">
              <InputLeftElement h="full" children={<RupiahIcon />} />
              <Input
                type="number"
                placeholder={getBudget}
                size="md"
                variant="unstyled"
                border="none"
                h="full"
                isDisabled={edit ? false : true}
                ref={budgetAmount}
              ></Input>
            </InputGroup>
            <Progress
              colorScheme={
                getExpenses.length
                  ? getBudget <=
                    getExpenses
                      .map(({ amount }) => parseInt(amount))
                      .reduce((a, b) => a + b)
                    ? 'red'
                    : 'teal'
                  : 'whiteAlpha'
              }
              max={100}
              size="lg"
              value={
                getExpenses.length
                  ? Math.floor(
                      (getExpenses
                        .map(({ amount }) => parseInt(amount))
                        .reduce((a, b) => a + b) /
                        getBudget) *
                        100
                    )
                  : 0
              }
              borderRadius={'base'}
              w="full"
              h="20px"
            />
          </VStack>
          <VStack w="30%" alignItems="flex-end">
            {edit ? (
              <Button
                w="full"
                borderRadius="sm"
                variant="outline"
                colorScheme="red"
                onClick={() => {
                  addBudget(budgetAmount.current.value);
                  setEdit(!edit);
                }}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                w="full"
                borderRadius="sm"
                colorScheme="teal"
                onClick={() => setEdit(!edit)}
              >
                Edit Budget
              </Button>
            )}
            <Button
              w="full"
              borderRadius="sm"
              colorScheme="teal"
              onClick={onAddExpensesOpen}
            >
              Add Expenses
            </Button>
            <AddExpensesModal
              isOpen={isAddExpensesOpen}
              onClose={onAddExpensesClose}
            />
          </VStack>
        </HStack>
        {getExpenses.length > 0 ? (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Categories</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              {getExpenses.map(({ category, amount }, index) => (
                <ExpensesTable
                  key={index}
                  index={index}
                  category={category}
                  amount={amount}
                />
              ))}
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Categories</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
}
