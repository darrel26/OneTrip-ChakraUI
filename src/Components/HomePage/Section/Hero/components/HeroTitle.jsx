import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function HeroTitle() {
  return (
    <Heading as="h1" size="4xl" textColor="teal" px={12} lineHeight="normal">
      Planning for your trip, will make the trip even better!
    </Heading>
  );
}
