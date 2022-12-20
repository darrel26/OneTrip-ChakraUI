import React from 'react';
import {
  Card,
  HStack,
  Flex,
  Image,
  CardBody,
  Text,
  Grid,
} from '@chakra-ui/react';

export default function PlaceRecommendation() {
  return (
    <Grid autoFlow="column" autoColumns="45%" overflowX="scroll">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        variant="outline"
        maxW="250px"
        maxH="75px"
      >
        <HStack>
          <CardBody w="70%">
            <Text fontWeight="medium">Latte Places</Text>
          </CardBody>
          <Image src="https://via.placeholder.com/200" w="30%"></Image>
        </HStack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        maxW="250px"
        maxH="75px"
      >
        <HStack>
          <CardBody w="70%">
            <Text fontWeight="medium">Latte Places</Text>
          </CardBody>
          <Image src="https://via.placeholder.com/200" w="30%"></Image>
        </HStack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        maxW="250px"
        maxH="75px"
      >
        <HStack>
          <CardBody w="70%">
            <Text fontWeight="medium">Latte Places</Text>
          </CardBody>
          <Image src="https://via.placeholder.com/200" w="30%"></Image>
        </HStack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        maxW="250px"
        maxH="75px"
      >
        <HStack>
          <CardBody w="70%">
            <Text fontWeight="medium">Latte Places</Text>
          </CardBody>
          <Image src="https://via.placeholder.com/200" w="30%"></Image>
        </HStack>
      </Card>
    </Grid>
  );
}
