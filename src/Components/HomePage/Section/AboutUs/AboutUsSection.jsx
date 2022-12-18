import React from 'react';
import {
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Card,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import AbousUsImage from '../../../../assets/HomePage/about-us-image.jpg';

export default function AboutUsSection() {
  return (
    <Container
      maxW="container.xl"
      h="60vh"
      display="flex"
      justifyContent="center"
    >
      <HStack h="full" justifyContent="center" spacing={8}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          w="full"
          borderRadius="lg"
        >
          <HStack justifyContent="flex-start">
            <CardBody mx="12">
              <Heading size="xl" colorScheme="teal" pb="8" textColor="teal">
                About Us
              </Heading>
              <Text
                pb="12"
                fontSize="20px"
                textAlign="justify"
                textColor="gray.500"
              >
                One Trip is a trip planner app for users to determine the
                destination of the tourist attractions they will go to. This app
                should help users, to collect information about the places they
                want to go based on their location choices, and plan their trip.
              </Text>
              <Button variant="solid" colorScheme="teal" size="lg">
                Read More
              </Button>
            </CardBody>
          </HStack>

          <Image
            objectFit="cover"
            w="40%"
            src={AbousUsImage}
            alt="Caffe Latte"
          />
        </Card>
      </HStack>
    </Container>
  );
}
