import React from 'react';
import { Card, HStack, Image, CardBody, Text, Button } from '@chakra-ui/react';

export default function PlaceRecommendation({ item, onClick }) {
  return (
    <Card
      display="flex"
      variant="outline"
      maxW="300px"
      w="auto"
      maxH="100px"
    >
      <HStack>
        <Image
          borderRadius="4px"
          src={
            item.photos
              ? item.photos[0].getUrl()
              : 'https://via.placeholder.com/200'
          }
          w="30%"
        ></Image>
        <CardBody w="70%">
          <Text fontWeight="medium">{item.name}</Text>
        </CardBody>
        <Button onClick={() => onClick()} colorScheme="teal">+</Button>
      </HStack>
    </Card>
  );
}
