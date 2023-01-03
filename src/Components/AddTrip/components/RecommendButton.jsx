import { Alert, Button, HStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ModalConfirmation from './ModalConfirmation'
import { useDispatch, useSelector } from 'react-redux'
import { storeRecommendation } from '../../../Redux/ReduxSlices'

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
  const { isOpen:istoursitOpen, onOpen: ontoursitOpen, onClose:ontouristClose } = useDisclosure()
  return (
    <HStack>
        <Buttons onClickHandler={onmuseumOpen} title="🏦  MUSEUM"/>
        <ModalConfirmation
          isOpen={ismuseumOpen}
          onClose={onmuseumClose}
          title="Are you sure pick Museum?"
          body="Trip will auto generate museum"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('museum'))}
        />
        <Buttons onClickHandler={onrestaurantOpen} title="🍴  RESTAURANT"/>
         <ModalConfirmation
          isOpen={isrestaurantOpen}
          onClose={onrestaurantOpen}
          title="Are you sure pick Restaurant?"
          body="Trip will auto generate restaurant"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('restaurant'))}
        />
        <Buttons onClickHandler={ontoursitOpen} title="🧺  TOURIST ATTRACT"/>
         <ModalConfirmation
          isOpen={istoursitOpen}
          onClose={ontouristClose}
          title="Are you sure pick Tourist Attraction?"
          body="Trip will auto generate tourist attraction?"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('tourist_attraction'))}
        />
    </HStack>
  )
}

export default RecommendButton