import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  HStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ModalConfirmation = ({
  isOpen,
  onClose,
  title,
  body,
  buttonTitle,
  buttonClick,
  journey,
  setJourney,
  place,
  setPlace,
}) => {
  return (
    <Modal
      size="md"
      motionPreset="scale"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent display="flex">
        <ModalHeader textAlign="center">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text textAlign="center">{body}</Text>
          <br />
          <HStack>
            <Input
              value={journey}
              onChange={(e) => setJourney(e.target.value)}
              type="number"
              required
              placeholder="Estimated journey time"
            />
            <Input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              type="number"
              required
              placeholder="Estimated place time"
            />
          </HStack>
          <br />
          <Text textAlign="center" fontWeight="500">
            This option only available for one day trip? are you want to
            continue?
          </Text>
        </ModalBody>
        <ModalFooter isCentered display="flex">
          <Link to="/trip">
            <Button colorScheme="teal" mr={3} onClick={buttonClick}>
              {buttonTitle}
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmation;
