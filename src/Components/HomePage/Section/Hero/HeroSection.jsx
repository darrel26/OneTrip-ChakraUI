import React, {useState} from 'react';
import { Container, Flex, HStack, VStack, IconButton, Link } from '@chakra-ui/react';
import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import HeroDescription from './components/HeroDescription';
import HeroTitle from './components/HeroTitle';
import InputDate from './components/InputDate';
import InputLocation from './components/InputLocation';
import Navbar from './components/Navbar';
import HeroBg from '../../../../assets/HomePage/hero-section-bg.svg';


export default function HomePage() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

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
          <Navbar />
          <VStack
            w="full"
            h="80%"
            spacing={12}
            textAlign="center"
            px={20}
            justify="center"
          >
            <HeroTitle />
            <HeroDescription />
            <HStack
              padding={2}
              spacing={0}
              bgColor="white"
              w="85%"
              h="80px"
              borderRadius="xl"
            >
              <InputLocation />
              <InputDate startPicker={true} endPicker={false} date={startDate} setDate={setStartDate} placeholder="Start Date" maxDate={endDate}/>
              <InputDate startPicker={false} endPicker={true} date={endDate} setDate={setEndDate} placeholder="End Date" minDate={startDate}/>
              <Link href="/trip"><IconButton Link colorScheme="teal" p={8} icon={<AddIcon />} /></Link>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}
