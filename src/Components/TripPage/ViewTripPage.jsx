import React, { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import { useParams } from 'react-router-dom';

export default function ViewTripPage() {
  const { id } = useParams();

  const viewTrip = async (tripId) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/trip/${tripId}`,
      { headers: { Authorization: `Bearer ${getCookie('token')}` } }
    );
    console.log(data);
    return data;
  };

  useEffect(() => {
    viewTrip(id);
  }, []);

  return <div>ViewTripPage</div>;
}
