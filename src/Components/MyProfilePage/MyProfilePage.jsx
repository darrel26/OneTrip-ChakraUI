import React, { useEffect, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import EditProfile from './Section/EditProfile';
import TripCollection from './Section/TripCollection';
import { storeUserTrip } from '../../Redux/ReduxSlices';
import { useDispatch } from 'react-redux';

import { LocationIcon } from '../../assets/Icons/icons';

export default function MyProfilePage() {
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const isOnEditProfile = toggleEditProfile ? '' : 'none';

  const dispatch = useDispatch();

  const getTripData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/${getCookie('userId')}`,
      { headers: { Authorization: `Bearer ${getCookie('token')}` } }
    );
    dispatch(storeUserTrip(data.trips));
  };

  useEffect(() => {
    getTripData();
  }, []);

  const viewTrip = async (tripId) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/trip/${tripId}`,
      { headers: { Authorization: `Bearer ${getCookie('token')}` } }
    );

    return data;
  };

  return (
    <HStack w="100vw" h="100vh">
      <EditProfile
        toggleEditProfile={toggleEditProfile}
        setToggleEditProfile={setToggleEditProfile}
        isOnEditProfile={isOnEditProfile}
      />
      <TripCollection viewTrip={viewTrip} />
    </HStack>
  );
}