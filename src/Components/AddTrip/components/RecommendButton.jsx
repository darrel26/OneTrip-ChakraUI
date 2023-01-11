import { Alert, Button, HStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ModalConfirmation from './ModalConfirmation'
import { useDispatch, useSelector } from 'react-redux'
import { storeRecommendation, storeTimePlace, storeTimeJourney } from '../../../Redux/ReduxSlices'

const Buttons =({title, onClickHandler}) =>{
  return(
      <Button onClick={() => onClickHandler()} boxShadow="base">{title}</Button>
    )
}

const RecommendButton = () => {
  const dispatch = useDispatch()
  const getLoc = useSelector((state) => state.trip.location)
  const { isOpen:ismuseumOpen, onOpen: onmuseumOpen, onClose:onmuseumClose } = useDisclosure()
  const { isOpen:isrestaurantOpen, onOpen: onrestaurantOpen, onClose:onrestaurantClose } = useDisclosure()
  const { isOpen:istouristOpen, onOpen: ontouristOpen, onClose:ontouristClose } = useDisclosure()
  const [journey, setJourney] = useState(null)
  const [place, setPlace] = useState(null)

  useEffect(() => {
    if(journey > 10){
      setJourney(10)
    }
    if(place > 5){
      setPlace(5)
    }
  },[journey, place])

  const dispatcher = (restriction) => {
    dispatch(storeRecommendation(restriction))
    dispatch(storeTimeJourney(journey))
    dispatch(storeTimePlace(place))
  }

  return (
    <HStack>
        <Buttons onClickHandler={onmuseumOpen} title="🏦  MUSEUM"/>
        <ModalConfirmation
          isOpen={ismuseumOpen}
          onClose={onmuseumClose}
          title="Are you sure pick Museum?"
          body="Trip will auto generate museum from destination you choose before"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatcher('museum')}
          journey={journey}
          place={place}
          setJourney= {setJourney}
          setPlace={setPlace}
        />
        <Buttons onClickHandler={onrestaurantOpen} title="🍴  RESTAURANT"/>
        <ModalConfirmation
          isOpen={isrestaurantOpen}
          onClose={onrestaurantClose}
          title="Are you sure pick Restaurant?"
          body="Trip will auto generate restaurant from destination you choose before"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('restaurant'))}
          journey={journey}
          place={place}
          setJourney= {setJourney}
          setPlace={setPlace}
        />
        <Buttons onClickHandler={ontouristOpen} title="🧺  TOURIST ATTRACT"/>
        <ModalConfirmation
          isOpen={istouristOpen}
          onClose={ontouristClose}
          title="Are you sure pick Tourist Attraction?"
          body="Trip will auto generate tourist attraction from destination you choose before"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('tourist_attraction'))}
          journey={journey}
          place={place}
          setJourney= {setJourney}
          setPlace={setPlace}
        />
    </HStack>
  )
}

export default RecommendButton