import React from 'react';
import { Container, VStack, Flex, Heading, Button } from '@chakra-ui/react';
import CTAImage from '../../../../assets/HomePage/CTA-image.jpg';

export default function CTASection() {
  return (
    <Container
      maxW="container.xl"
      h="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex h="60vh" w="container.xl" py={20}>
        <VStack
          w="full"
          h="full"
          p={10}
          bgImage={`url(${CTAImage})`}
          bgSize="cover"
          bgPos="center"
          justifyContent="center"
          spacing={12}
        >
          <Heading textColor="white">Ready to plan your trip ?</Heading>
          <Button size="lg" colorScheme="teal" fontWeight="bold">
            Start Planning
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
}
