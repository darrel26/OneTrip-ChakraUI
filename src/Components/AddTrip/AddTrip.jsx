import { Container, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../HomePage/Section/Hero/components/Navbar';
import InputAddTrip from './components/InputAddTrip';
import RecommendButton from './components/RecommendButton';

const AddTrip = () => {
  return (
    <Container
      maxW="container.xl"
      display="flex"
      justifyContent="center"
      className="Hero-Container"
    >
      <VStack w="100vw" display="flex">
        <Navbar />
        <VStack h="80vh" justifyContent="center" gap="1rem">
          <Heading color="teal">Add New Trip</Heading>
          <InputAddTrip />
          <Link to="/trip">
            <Button
            w="200px"
            h="50px"
            fontSize="22px"
            fontWeight="bold"
            colorScheme="teal"
          >
            Create
          </Button>
          </Link>
          <RecommendButton />
        </VStack>
      </VStack>
    </Container>
  );
};

export default AddTrip;
