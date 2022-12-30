import { Avatar, IconButton, VStack, Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import React from 'react';
import { LocationIcon, DollarIcon } from '../../../../../assets/Icons/icons';

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
      <Link href="/">
        <IconButton icon={<ArrowBackIcon />}></IconButton>
      </Link>
      <VStack h="65vh" spacing={8}>
        <IconButton icon={<LocationIcon />} />
        <IconButton icon={<DollarIcon />} />
      </VStack>
      <Avatar
        size="md"
        name="Dionisius Darrel"
        src="https://bit.ly/darrel-dionisius"
      ></Avatar>
    </VStack>
  );
}
