// import React from 'react';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   HStack,
//   Text,
//   Button,
//   VStack,
//   Heading,
//   Image,
// } from '@chakra-ui/react';
// import SignUpForm from './SignUpForm';
// import OneTripLogo from '../../../../../../assets/HomePage/Logo.svg';

// export default function SignUpModal() {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       size="md"
//       motionPreset="scale"
//       isCentered
//     >
//       <ModalOverlay />
//       <ModalContent px={10} py={12}>
//         <VStack justifyContent="center">
//           <Image
//             src={OneTripLogo}
//             width="120px"
//             objectFit="fill"
//             height="65px"
//           />
//           <VStack spacing={4}>
//             <Heading size="lg" fontWeight="semibold">
//               Log in to your account
//             </Heading>
//             <HStack spacing="1" justify="center">
//               <Text color="muted">Don't have an account?</Text>
//               <Button variant="link" colorScheme="blue">
//                 Sign up
//               </Button>
//             </HStack>
//           </VStack>
//         </VStack>
//         <ModalCloseButton />
//         <ModalBody>
//           <SignUpForm />
//         </ModalBody>
//         <ModalFooter>
//           <Button width="full" colorScheme="teal" mt={4}>
//             Sign in
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }
