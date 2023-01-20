import React from 'react';
import {
  Heading,
  VStack,
  SimpleGrid,
  CardHeader,
  Card,
  CardBody,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TripCollection() {
  const userTrip = useSelector((state) => state.trip.userTrip);
  const navigate = useNavigate();
  return (
    <VStack
      w="50vw"
      maxH="100vh"
      h="100vh"
      maxW="50vw"
      overflowX="auto"
      py="12"
      bg="teal"
    >
      <Heading pb={8} color="white">
        Trip Collection
      </Heading>
      <SimpleGrid spacing={6} templateColumns="repeat(2, minmax(350px, 1fr))">
        {userTrip.length > 0 &&
          userTrip.map((trip) => {
            return (
              <Card size="md" key={trip.id} bg="white" id={trip.id}>
                <CardHeader>
                  <Heading size="md">{trip.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    {typeof trip.basedLocation === 'object'
                      ? trip.basedLocation.name
                      : trip.basedLocation}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={async (e) => {
                      const tripId = e.target.parentElement.parentElement.id;
                      navigate(`/trip/${tripId}`);
                    }}
                  >
                    View Trip
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </VStack>
  );
}
