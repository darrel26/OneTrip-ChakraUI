import React from 'react';
import {
  Card,
  HStack,
  Image,
  CardBody,
  Text,
  Button,
  Tag,
} from '@chakra-ui/react';

export default function PlaceRecommendation({ item, onClick }) {
  const category = [
    'amusement_park',
    'bakery',
    'bar',
    'bowling_alley',
    'cafe',
    'shopping_mall',
    'stadium',
    'spa',
    'zoo',
    'movie_theater',
    'mosque',
    'church',
    'lodging',
    'restaurant',
  ];

  return (
    <Card display="flex" p={2} variant="outline">
      <HStack>
        <Image
          w="30%"
          boxSize="100px"
          borderRadius="4px"
          src={
            item.photos
              ? item.photos[0].getUrl()
              : 'https://via.placeholder.com/200'
          }
        ></Image>
        <CardBody w="40%">
          <Text fontWeight="medium">{item.name}</Text>
          <HStack mt={4}>
            {item.types
              .filter((type) => category.includes(type))
              .map((type) => (
                <Tag
                  key={`${type}${Math.random()}`}
                  size="md"
                  w="auto"
                  borderColor="green.600"
                  borderRadius="full"
                  colorScheme="teal"
                >
                  {type}
                </Tag>
              ))}
          </HStack>
        </CardBody>
        <Button w="50px" h="50px" onClick={() => onClick()} colorScheme="teal">
          +
        </Button>
      </HStack>
    </Card>
  );
}
