import React, { useEffect, useRef, useState } from 'react';
import { Container, Flex, HStack, VStack, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import HeroDescription from './components/HeroDescription';
import HeroTitle from './components/HeroTitle';
import InputDate from './components/InputDate';
import InputLocation from './components/InputLocation';
import Navbar from './components/Navbar';
import HeroBg from '../../../../assets/HomePage/hero-section-bg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  storeDestinationDate,
  storeBasedLocation,
  storeOriginsDate,
} from '../../../../Redux/ReduxSlices';

export default function HomePage() {
  const dispatch = useDispatch();
  const [isDisable, setDisable] = useState('#');
  const [autocomplete, setAutocomplete] = useState();
  const [placeDetail, setPlaceDetail] = useState();
  const originsDate = useRef();
  const destinationDate = useRef();
  const location = useRef();
  const getOriginsDate = useSelector((state) => state.trip.originsDate);
  const getDestinationDate = useSelector((state) => state.trip.destinationDate);
  const getLocation = useSelector((state) => state.trip.basedLocation);

  const allowAddTrip = () => {
    if (
      originsDate.current.value !== '' &&
      destinationDate.current.value !== '' &&
      location.current.value !== ''
    ) {
      setDisable('/addTrip');
    } else {
      setDisable('#');
    }
  };

  const storeToRedux = () => {
    dispatch(storeOriginsDate(originsDate.current.value));
    dispatch(storeDestinationDate(destinationDate.current.value));
    dispatch(storeBasedLocation(placeDetail));
  };

  const [login, setLogin] = useState(false);

   useEffect(() =>{
    if(sessionStorage.getItem("loginStatus")){
      setLogin(true)
    }
  },[login])

  return (
    <Container
      maxW="100vw"
      display="flex"
      justifyContent="center"
      className="Hero-Container"
      backgroundImage={`url(${HeroBg})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex h="100vh" w="container.xl">
        <VStack w="full" h="full">
          <Navbar setLogin={setLogin}/>
          <VStack
            w="full"
            h="80%"
            spacing={12}
            textAlign="center"
            px={20}
            justify="center"
          >
            <div>
              <HeroTitle />
            </div>
            <div>
              <HeroDescription />
            </div>
            <HStack
              padding={2}
              spacing={0}
              bgColor="white"
              w="85%"
              h="80px"
              borderRadius="xl"
            >
              <InputLocation
                locationRef={location}
                _onChangeFunction={allowAddTrip}
                setAuto={setAutocomplete}
                placeDetail={() => setPlaceDetail(autocomplete.getPlace())}
              />
              <InputDate
                dateRef={originsDate}
                _onChangeFunction={allowAddTrip}
              />
              <InputDate
                dateRef={destinationDate}
                _onChangeFunction={allowAddTrip}
              />
              <Link to={isDisable}>
                <IconButton
                  disabled={login ? false : true}
                  onClick={storeToRedux}
                  Link
                  colorScheme="teal"
                  p={8}
                  icon={<AddIcon />}
                />
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}
