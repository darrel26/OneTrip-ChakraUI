import React from 'react';
import { Card, HStack, Image, CardBody, Text } from '@chakra-ui/react';

export default function PlaceRecommendation({ item }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      maxW="250px"
      maxH="75px"
    >
      <HStack>
        <Image
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
      </HStack>
    </Card>
  );
}
