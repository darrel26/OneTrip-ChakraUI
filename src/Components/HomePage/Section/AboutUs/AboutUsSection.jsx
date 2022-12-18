import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';
import { useInView } from '@react-spring/web';

import VectorMap from './components/VectorMap';

export default function AboutUsSection() {
  const [ref, inView] = useInView();
  return (
    <Container
      maxW="container.xl"
      h="60vh"
      display="flex"
      justifyContent="center"
      mt={48}
      ref={ref}
    >
      <VStack>
        {console.log(inView)}
        <VectorMap visible={inView} />
        <Text>
          One Trip is a trip planner app for users to determine the destination
          of the tourist attractions they will go to. This app should help
          users, to collect information about the places they want to go based
          on their location choices, and plan their trip.
        </Text>
      </VStack>
    </Container>
  );
}
