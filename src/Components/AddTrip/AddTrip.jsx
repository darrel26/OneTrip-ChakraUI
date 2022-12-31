import { Container, Flex, Heading, HStack, Input, InputGroup, VStack, Button } from '@chakra-ui/react'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import Navbar from '../HomePage/Section/Hero/components/Navbar'
import InputAddTrip from './components/InputAddTrip'
import RecommendButton from './components/RecommendButton'

const AddTrip = () => {
  return (
    <Container
      maxW="100vw"
      display="flex"
      justifyContent="center"
      className="Hero-Container"
    >
      <VStack w="100vw"  display="flex" >
        <Navbar/>
        <VStack h="80vh" justifyContent="center" gap="1rem">
          <Heading color="teal">Add New Trip</Heading>
          <InputAddTrip/>
          <Button w="200px" h="50px" fontSize="22px" fontWeight="bold" colorScheme="teal">CREATE</Button>
          <RecommendButton/>
        </VStack>
      </VStack>
    </Container>
  )
}

export default AddTrip