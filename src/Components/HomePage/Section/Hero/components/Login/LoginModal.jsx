import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Text,
  Button,
  VStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import LoginForm from './LoginForm';
import OneTripLogo from '../../../../../../assets/HomePage/Logo.svg';

export default function LoginModal({ isOpen, onClose, setLogin }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      motionPreset="scale"
      isCentered
    >
      <ModalOverlay />
      <ModalContent px={10} py={12}>
        <VStack justifyContent="center">
          <Image
            src={OneTripLogo}
            width="120px"
            objectFit="fill"
            height="65px"
          />
          <VStack spacing={4}>
            <Heading size="lg" fontWeight="semibold">
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <ModalCloseButton />
        <ModalBody>
          <LoginForm onClose={onClose} setLogin={setLogin}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
