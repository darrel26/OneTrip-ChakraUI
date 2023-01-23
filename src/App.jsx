import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTrip from './Components/AddTrip/AddTrip';
import HomePage from './Components/HomePage/HomePage';
import TripPage from './Components/TripPage/TripPage';
import { SkeletonCircle } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import MyProfilePage from './Components/MyProfilePage/MyProfilePage';
import ViewTripPage from './Components/ViewTripPage/ViewTripPage';

export default function App() {
  const lib = useSelector((state) => state.trip.mapsLibraries);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyALSzAz6giG2oFLX6vbTenuijWzk23i8DU',
    libraries: lib,
  });

  if (!isLoaded) {
    return <SkeletonCircle />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip" element={<TripPage />} />
        <Route path="/trip/:id" element={<ViewTripPage />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
      </Routes>
    </Router>
  );
}
