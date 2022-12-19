import React from 'react';
import {
  Image,
  HStack,
  ButtonGroup,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../../../../../assets/HomePage/logo.svg';
import LoginModal from './Login/LoginModal';

export default function Navbar() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();
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
        <Button colorScheme="teal" variant="ghost" onClick={onLoginOpen}>
          Login
        </Button>
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <Button colorScheme="teal" variant="solid" onClick={onSignUpOpen}>
          Sign up
        </Button>
      </HStack>
    </HStack>
  );
}
