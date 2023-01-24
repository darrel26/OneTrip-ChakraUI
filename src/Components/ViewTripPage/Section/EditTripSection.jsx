import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { ArrowBackIcon, CalendarIcon } from '@chakra-ui/icons';
import { LocationIcon, DollarIcon } from '../../../assets/Icons/icons';
import { getCookie, getUsernameUrl } from '../../../utils/cookies';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PlaceToVisit from './components/PlaceToVisit';

export default function EditTripSection() {
  const { id } = useParams();
  const getTripTitle = useSelector((state) => state.trip.tripTitle);
  const getBasedLocation = useSelector((state) => state.trip.basedLocation);
  const getStartDate = useSelector((state) => state.trip.originsDate);
  const getEndDate = useSelector((state) => state.trip.destinationDate);
  const getPlaceData = useSelector((state) => state.trip.placeData);
  const getBudget = useSelector((state) => state.trip.budget);
  const getExpenses = useSelector((state) => state.trip.expenses);

  const [toggleEditTrip, setToggleEditTrip] = useState(false);
  const isOnEditTrip = toggleEditTrip ? '' : 'none';

  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    duration: 3000,
    containerStyle: {
      width: '250px',
      maxW: '100%',
    },
  });

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

    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/trip/edit-trip/${id}`,
        tripData,
        config
      );
      toast({
        title: 'Success Edit Trip',
        status: 'success',
      });
    } catch ({ response }) {
      toast({
        title: response.data.error.message,
        status: 'error',
      });
    }

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
        <Link href="/my-profile">
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
        <HStack
          width="full"
          pt={8}
          justify="space-between"
          alignItems="flex-start"
        >
          <VStack alignItems="flex-start" spacing={4}>
            <Heading fontWeight="medium">Trip to {getTripTitle}</Heading>
            <HStack>
              <Icon as={CalendarIcon}></Icon>
              <Text>
                {getStartDate} - {getEndDate}
              </Text>
            </HStack>
          </VStack>
          <VStack w="150px">
            <Button
              w="full"
              colorScheme="teal"
              variant="outline"
              display={!isOnEditTrip}
              isDisabled={!isOnEditTrip}
              onClick={() => setToggleEditTrip(true)}
            >
              Edit Trip
            </Button>
            <Button
              w="full"
              colorScheme="red"
              onClick={() => {
                saveTrip();
                setToggleEditTrip(false);
              }}
              display={isOnEditTrip}
            >
              Save Trip
            </Button>
          </VStack>
        </HStack>
        <Accordion w="full" defaultIndex={[0]} allowMultiple py={10}>
          <PlaceToVisit />
        </Accordion>
      </VStack>
    </Flex>
  );
}
