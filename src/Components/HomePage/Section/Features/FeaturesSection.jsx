import React from 'react';
import { Container, HStack } from '@chakra-ui/react';
import cardRecommendation from '../../../../assets/HomePage/card-recommendation.svg';
import cardPersonalized from '../../../../assets/HomePage/card-personalized.svg';
import cardBudget from '../../../../assets/HomePage/card-budget.svg';
import FeatureCard from './components/FeatureCard';

const cardData = [
  {
    image: cardRecommendation,
    heading: 'Give you a recommendation',
    text: 'Recommendation for places near your trip destination',
  },
  {
    image: cardPersonalized,
    heading: 'Personalized your trip',
    text: 'Find the best places for your trip, Easy to add your places to your trip',
  },
  {
    image: cardBudget,
    heading: 'Budget & Expenses',
    text: 'With this feature, never miss what you’ve spent out',
  },
];

export default function FeaturesSection() {
  return (
    <Container
      maxW="container.xl"
      h="60vh"
      display="flex"
      justifyContent="center"
    >
      <HStack h="full" justifyContent="center" w="100vw" spacing={8}>
        {cardData.map(({ image, heading, text }) => {
          return <FeatureCard image={image} heading={heading} text={text} />;
        })}
      </HStack>
    </Container>
  );
}
