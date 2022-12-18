import React from 'react';
import { Container } from '@chakra-ui/react';
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
      <VectorMap visible={inView} />
    </Container>
  );
}
