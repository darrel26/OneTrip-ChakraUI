import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Buttons =({title}) =>{
  return(
      <Button boxShadow="base">{title}</Button>
    )
}

const RecommendButton = () => {
  return (
    <HStack>
        <Buttons title="🏦  MUSEUM"/>
        <Buttons title="🍴  RESTAURANT"/>
        <Buttons title="🧺  TOURIST ATTRACT"/>
    </HStack>
  )
}

export default RecommendButton