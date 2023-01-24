import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  IconButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { getCookie, getUsernameUrl } from '../../../utils/cookies';

export default function EditProfile({
  toggleEditProfile,
  setToggleEditProfile,
  isOnEditProfile,
}) {
  const newUsername = useRef();
  const newEmail = useRef();

  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    duration: 3000,
    containerStyle: {
      width: '250px',
      maxW: '100%',
    },
  });

  const editProfile = async (userId) => {
    const newData = {
      username: newUsername.current.value,
      email: newEmail.current.value,
    };

    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/users/${userId}`,
      newData,
      { headers: { Authorization: `Bearer ${getCookie('token')}` } }
    );

    document.cookie = `username=${newData.username}`;
    document.cookie = `email=${newData.email}`;

    location.reload();

    return response;
  };

  return (
    <VStack w="50vw" h="100vh" justify="center">
      <VStack w="50%">
        <form
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <HStack alignItems="center" pb={24}>
            <Link to="/">
              <IconButton icon={<ArrowBackIcon />} />
            </Link>
          </HStack>
          <HStack w="100%" justifyContent="space-between" marginBottom={14}>
            <Avatar
              size="2xl"
              name={getCookie('username')}
              src={getUsernameUrl()}
            />
            <VStack w="200px">
              <Button
                w="full"
                colorScheme="teal"
                size="lg"
                variant={toggleEditProfile ? 'solid' : 'outline'}
                isDisabled={toggleEditProfile ? true : false}
                onClick={() => setToggleEditProfile(!toggleEditProfile)}
              >
                Edit Profile
              </Button>
              <Button
                w="full"
                colorScheme="red"
                size="lg"
                variant="outline"
                onClick={async () => {
                  setToggleEditProfile(!toggleEditProfile);
                  await editProfile(getCookie('userId'))
                    .then(() => {
                      toast({
                        title: 'Update Success!',
                        status: 'success',
                      });
                    })
                    .catch((error) => {
                      const { status, message } = error.response.data.error;
                      toast({
                        title: status,
                        description: message,
                        status: 'error',
                      });
                    });
                }}
                display={isOnEditProfile}
              >
                Save Changes
              </Button>
            </VStack>
          </HStack>
          <VStack w="100%" spacing={6}>
            <FormControl>
              <FormLabel color="teal">Username</FormLabel>
              <Input
                type="text"
                placeholder={getCookie('username')}
                isDisabled={toggleEditProfile ? false : true}
                ref={newUsername}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="teal">Email</FormLabel>
              <Input
                type="email"
                placeholder={getCookie('email')}
                isDisabled={toggleEditProfile ? false : true}
                ref={newEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="teal">Created At</FormLabel>
              <Input
                type="text"
                placeholder={new Date(getCookie('createdAt'))
                  .toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                  .replace(/ /g, ' ')}
                isDisabled
              />
            </FormControl>
          </VStack>
        </form>
      </VStack>
    </VStack>
  );
}
