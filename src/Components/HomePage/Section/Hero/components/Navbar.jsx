import React from 'react';
import { Image, HStack, ButtonGroup, Button } from '@chakra-ui/react';
import logo from '../../../../../assets/HomePage/logo.svg';

export default function Navbar() {
  return (
    <HStack w="full" justify="space-between" py={5}>
      <Image src={logo} />
      <HStack>
        <ButtonGroup variant="link" spacing="24">
          {['Home', 'Features', 'About Us'].map((item) => (
            <Button key={item}>{item}</Button>
          ))}
        </ButtonGroup>
      </HStack>
      <HStack>
        <Button colorScheme="teal" variant="ghost">
          Login
        </Button>
        <Button colorScheme="teal" variant="solid">
          Sign up
        </Button>
      </HStack>
    </HStack>
  );
}
