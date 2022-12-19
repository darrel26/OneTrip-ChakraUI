// import React from 'react';
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Stack,
//   InputRightElement,
//   IconButton,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// export default function SignUpForm() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={6} pt={12}>
//       <FormControl>
//         <FormLabel htmlFor="email">Email</FormLabel>
//         <InputGroup>
//           <InputLeftElement
//             pointerEvents="none"
//             children={<EmailIcon color="gray.300" />}
//           />
//           <Input type="email" />
//         </InputGroup>
//       </FormControl>
//       <FormControl>
//         <FormLabel htmlFor="password">Password</FormLabel>
//         <InputGroup>
//           <InputLeftElement
//             pointerEvents="none"
//             children={<LockIcon color="gray.300" />}
//           />
//           <Input
//             type={isOpen ? 'text' : 'password'}
//             autoComplete="current-password"
//           />
//           <InputRightElement>
//             <IconButton
//               variant="link"
//               aria-label={isOpen ? 'Mask password' : 'Reveal password'}
//               icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
//               onClick={onToggle}
//             ></IconButton>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//     </Stack>
//   );
// }
