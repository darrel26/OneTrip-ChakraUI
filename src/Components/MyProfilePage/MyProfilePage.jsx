import React, { useEffect, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import EditProfile from './Section/EditProfile';
import TripCollection from './Section/TripCollection';
import { storeUserTrip } from '../../Redux/ReduxSlices';
import { useDispatch } from 'react-redux';

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

  return (
    <HStack w="100vw" h="100vh">
      <EditProfile
        toggleEditProfile={toggleEditProfile}
        setToggleEditProfile={setToggleEditProfile}
        isOnEditProfile={isOnEditProfile}
      />
      <TripCollection />
    </HStack>
  );
}
