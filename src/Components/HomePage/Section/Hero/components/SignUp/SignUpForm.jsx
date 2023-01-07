import React, { useRef, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
  InputRightElement,
  IconButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { UserIcon } from '../../../../../../assets/Icons/icons';

export default function SignUpForm({ onClose }) {
  const { isOpen, onToggle } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = useRef('');
  const username = useRef('');
  const password = useRef('');

  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    duration: 3000,
    containerStyle: {
      width: '250px',
      maxW: '100%',
    },
  });

  const signUp = async () => {
    const userData = {
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
    };

    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      userData
    );

    const { message } = data;

    return message;
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await signUp()
          .then((message) => {
            setIsSubmitting(false);
            onClose();
            toast({
              title: message,
              status: 'success',
            });
          })
          .catch(({ response }) => {
            setIsSubmitting(false);
            toast({
              title: response.data.error.message,
              status: 'error',
            });
          });
      }}
    >
      <Stack spacing={6} pt={12}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="email" ref={email} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<UserIcon color="gray.300" />}
            />
            <Input type="text" ref={username} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type={isOpen ? 'text' : 'password'}
              autoComplete="current-password"
              ref={password}
            />
            <InputRightElement>
              <IconButton
                variant="link"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
                onClick={onToggle}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
          <Button
            type="submit"
            width="full"
            colorScheme="teal"
            mt={12}
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Sign Up
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
}
