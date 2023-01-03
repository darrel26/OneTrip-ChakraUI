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
  return (
    <HStack>
        <Buttons onClickHandler={() =>{
          onmuseumOpen()
        }} title="🏦  MUSEUM"/>
        <ModalConfirmation
          isOpen={ismuseumOpen}
          onClose={onmuseumClose}
          title="Are you sure pick Museum?"
          body="Trip will auto generate museum"
          buttonTitle="Yes, I'm sure"
          buttonClick={()=>dispatch(storeRecommendation('museum'))}
        />
        <Buttons title="🍴  RESTAURANT"/>
        <Buttons title="🧺  TOURIST ATTRACT"/>
    </HStack>
  )
}

export default RecommendButton