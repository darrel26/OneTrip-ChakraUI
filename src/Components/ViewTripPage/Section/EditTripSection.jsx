import React from 'react';
import {
  Flex,
  IconButton,
  VStack,
  Avatar,
  HStack,
  Heading,
  Button,
  Icon,
  Accordion,
  Text,
  Link,
} from '@chakra-ui/react';
import { ArrowBackIcon, CalendarIcon } from '@chakra-ui/icons';
import { LocationIcon, DollarIcon } from '../../../assets/Icons/icons';
import { getCookie, getUsernameUrl } from '../../../utils/cookies';

import { useSelector } from 'react-redux';
import axios from 'axios';
import PlaceToVisit from './components/PlaceToVisit';

export default function EditTripSection() {
  const getTripTitle = useSelector((state) => state.trip.tripTitle);
  const getBasedLocation = useSelector((state) => state.trip.basedLocation);
  const getStartDate = useSelector((state) => state.trip.originsDate);
  const getEndDate = useSelector((state) => state.trip.destinationDate);
  const getPlaceData = useSelector((state) => state.trip.placeData);
  const getBudget = useSelector((state) => state.trip.budget);
  const getExpenses = useSelector((state) => state.trip.expenses);

  const saveTrip = async () => {
    const config = {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
    };

    const tripData = {
      title: getTripTitle,
      basedLocation: getBasedLocation,
      tripDate: {
        startDate: getStartDate,
        endDate: getEndDate,
      },
      places: [...getPlaceData],
      budget: getBudget,
      expenses: getExpenses,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/trip/add-trip`,
      tripData,
      config
    );

    return response;
  };

  return (
    <Flex w="40vw">
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
      <VStack
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
        }}
        w="100%"
        maxH="100vh"
        overflowY="auto"
        overflowX="hidden"
        alignItems="flex-start"
        px={12}
        py="2%"
        spacing={6}
      >
        <HStack width="full" pt={8} justify="space-between">
          <Heading fontWeight="medium">Trip to {getBasedLocation.name}</Heading>
          <Button colorScheme="red" onClick={saveTrip}>
            Save Trip
          </Button>
        </HStack>
        <HStack>
          <Icon as={CalendarIcon}></Icon>
          <Text>
            {getStartDate} - {getEndDate}
          </Text>
        </HStack>
        <Accordion w="full" defaultIndex={[0]} allowMultiple py={10}>
          <PlaceToVisit />
        </Accordion>
      </VStack>
    </Flex>
  );
}
