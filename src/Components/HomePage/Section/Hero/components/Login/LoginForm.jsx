import React, { useRef, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
  Stack,
  InputRightElement,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { storeLoginStatus } from '../../../../../../Redux/ReduxSlices';
import { useDispatch } from 'react-redux/es/exports';

export default function LoginForm({ onClose }) {
  const { isOpen, onToggle } = useDisclosure();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = useRef('');
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

  const dispatch = useDispatch();

  const login = async () => {
    const userCredential = {
      email: email.current.value,
      password: password.current.value,
    };

    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userCredential
    );

    return data;
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await login()
          .then(
            ({ username, userId, email, createdAt, authToken, message }) => {
              document.cookie = `userId=${userId}`;
              document.cookie = `username=${username}`;
              document.cookie = `email=${email}`;
              document.cookie = `createdAt=${createdAt}`;
              document.cookie = `token=${authToken}`;
              setIsSubmitting(false);
              onClose();
              toast({
                title: message,
                description: `Welcome ${username}`,
                status: 'success',
              });
              dispatch(storeLoginStatus(true));
            }
          )
          .catch((error) => {
            const { status, message } = error.response.data.error;
            setIsSubmitting(false);
            toast({
              title: status,
              description: message,
              status: 'error',
            });
          });
      }}
    >
      <Stack spacing={6} pt={12}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="email" ref={email} />
          </InputGroup>
        </FormControl>
        <FormControl>
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
        </FormControl>
      </Stack>
      <Button
        type="submit"
        width="full"
        colorScheme="teal"
        mt={8}
        isLoading={isSubmitting}
        loadingText="Login"
      >
        Sign in
      </Button>
    </form>
  );
}
