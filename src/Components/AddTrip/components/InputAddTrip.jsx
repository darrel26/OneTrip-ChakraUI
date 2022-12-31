import { Flex, VStack, Heading, InputGroup, Input, HStack, Button, InputLeftElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import DatePicker from 'react-datepicker'
import Navbar from '../../HomePage/Section/Hero/components/Navbar'
import RecommendButton from './RecommendButton'
import { LocationIcon } from '../../../assets/Icons/icons'
import { useSelector } from 'react-redux'

const InputAddTrip = () => {
  const location = useSelector((state) => state.trip.location)
  const originsDate = useSelector((state) => state.trip.originsDate)
  const destinationDate = useSelector((state) => state.trip.destinationDate)
  
  useEffect(() =>{
    console.log(location);
    console.log(originsDate);
    console.log(destinationDate);
  },[])

  return (
   <VStack w="40vw">
        <InputGroup>
         <InputLeftElement
            h="full"
            pointerEvents="none"
            children={<LocationIcon />}
          />
           <Input value={location} type="text"/>
        </InputGroup>
        <InputGroup>
            <Input value={originsDate} type="date"/>
            <Input value={destinationDate} type="date"/>
        </InputGroup>
        
   </VStack>
  )
}

export default InputAddTrip