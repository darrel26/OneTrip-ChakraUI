import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  VStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

export default function PlaceCard({
  placeImg,
  index,
  placeAddress,
  placeName,
  rating,
  functionPass,
}) {
  return (
    <Card
      onClick={()=>functionPass()}
      cursor="pointer"
      maxW="100%"
      w="100%"
      h="200px"
      size="sm"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <VStack w="70%" alignItems="flex-start" p={4}>
        <CardBody>
          <Heading size="md">{placeName}</Heading>
          <Text py="2">{placeAddress}</Text>
        </CardBody>
        <CardFooter>
          <Text fontWeight="medium" textColor="orange.300">
            Rating {rating !== undefined ? rating : '-/5.0'}
          </Text>
        </CardFooter>
      </VStack>
      <Image
        objectFit="cover"
        maxW="30%"
        w="40%"
        src={placeImg}
        alt={placeName}
        fallbackSrc="https://via.placeholder.com/200"
      />
    </Card>
  );
}
