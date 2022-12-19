import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';
import { useInView } from '@react-spring/web';

import VectorMap from './components/VectorMap';

export default function AboutUsSection() {
  const [ref, inView] = useInView();
  return (
    <Container
      maxW="container.xl"
      h="80vh"
      display="flex"
      justifyContent="center"
      mt={48}
      ref={ref}
    >
      <VStack>
        <VectorMap visible={inView} />
        <Text
          w="80%"
          pt={32}
          fontSize={26}
          textAlign="center"
          textColor="gray.400"
        >
          One Trip is a trip planner app for users to determine the destination
          of the tourist attractions they will go to. This app should help
          users, to collect information about the places they want to go based
          on their location choices, and plan their trip.
        </Text>
      </VStack>
    </Container>
  );
}
