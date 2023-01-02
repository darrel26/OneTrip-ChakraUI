import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ModalConfirmation = ({isOpen, onClose, title,  body, buttonTitle, buttonClick}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {body}
          </ModalBody>
          <ModalFooter>
            <Link to="/trip">
                <Button colorScheme='blue' mr={3} onClick={() =>{
                buttonClick()
                }}>
              {buttonTitle}
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ModalConfirmation