import React from 'react';
import { Card, CardBody, VStack, Image, Heading, Text } from '@chakra-ui/react';

export default function FeatureCard({ image, heading, text }) {
  return (
    <Card w="350px">
      <CardBody>
        <VStack textAlign="center" spacing={4}>
          <Image
            src={image}
            mb={4}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Heading size="xl" fontSize="xl">
            {heading}
          </Heading>
          <Text fontSize="sm">{text}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}
