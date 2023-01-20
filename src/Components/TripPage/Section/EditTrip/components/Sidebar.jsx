import { Avatar, IconButton, VStack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { LocationIcon, DollarIcon } from '../../../../../assets/Icons/icons';
import { getCookie, getUsernameUrl } from '../../../../../utils/cookies';

export default function Sidebar() {
  return (
    <VStack
      bgColor="gray.100"
      pos="sticky"
      w="75px"
      h="100vh"
      py="2%"
      boxShadow="0px 4px 12px 0 rgba(0,0,0,0.05)"
      justifyContent="space-between"
    >
      <Link to="/">
        <IconButton icon={<ArrowBackIcon />}></IconButton>
      </Link>
      <VStack h="65vh" spacing={8}>
        <IconButton icon={<LocationIcon />} />
        <IconButton icon={<DollarIcon />} />
      </VStack>
      {getCookie('username') !== null ? (
        <Avatar
          size="md"
          name={getCookie('username')}
          src={getUsernameUrl()}
        ></Avatar>
      ) : (
        <Avatar src="https://bit.ly/broken-link" />
      )}
    </VStack>
  );
}
