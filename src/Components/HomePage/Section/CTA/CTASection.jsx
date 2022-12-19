import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useInView, useSprings, animated } from '@react-spring/web';
import CarTripImage from './components/CarTripImage';

export default function CTASection() {
  const text = [
    <HStack>
      <Heading textColor="teal">Plan</Heading>
      <Text fontSize={32}>your trip, and</Text>
      <Heading textColor="teal">Start</Heading>
      <Text fontSize={32}>your</Text>
    </HStack>,
    <Heading textColor="teal" pb={4}>
      Journey!
    </Heading>,
    <Button fontWeight="bold" colorScheme="teal" size="lg" px={12}>
      Plan Now
    </Button>,
  ];

  const [ref, inView] = useInView();
  const textAnimation = useSprings(
    text.length,
    text.map((_, i) => {
      return {
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translate3d(0px, 0px, 0px)'
          : 'translate3d(-75px, 0px, 0px)',
        config: {
          friction: inView && 14,
          tension: inView && 120,
        },
        delay: i * 300,
      };
    })
  );

  return (
    <Container
      maxW="container.xl"
      h="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <HStack ref={ref} justify="center">
        <CarTripImage visible={inView} />
        <VStack
          alignItems="flex-start"
          w="70%"
          justifyContent="center"
          spacing={18}
          pl={24}
        >
          {textAnimation.map((props, index) => {
            return (
              <animated.div key={index} style={props}>
                {text[index]}
              </animated.div>
            );
          })}
        </VStack>
      </HStack>
    </Container>
  );
}
