import React from 'react';
import {
  Image,
  HStack,
  ButtonGroup,
  Button,
  useDisclosure,
  Avatar,
  Menu,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import logo from '../../../../../assets/HomePage/logo.svg';
import LoginModal from './Login/LoginModal';
import SignUpModal from './SignUp/SignUpModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, getUsernameUrl } from '../../../../../utils/cookies';
import { SignOutIcon, ProfileIcon } from '../../../../../assets/Icons/icons';
import { storeLoginStatus } from '../../../../../Redux/ReduxSlices';

export default function Navbar() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  const loginStatus = useSelector((state) => state.trip.loginStatus);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(storeLoginStatus(false));
  };

  return (
    <HStack w="full" justify="space-between" py={5}>
      <Image src={logo} />
      <HStack>
        <ButtonGroup variant="link" spacing="24">
          {['Home', 'Features', 'About Us'].map((item) => (
            <Button key={item}>{item}</Button>
          ))}
        </ButtonGroup>
      </HStack>
      {loginStatus ? (
        <Menu placement="auto">
          <MenuButton colorScheme="pink">
            <Avatar
              size="md"
              name={getCookie('username')}
              src={getUsernameUrl()}
            ></Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<ProfileIcon />}>My Account</MenuItem>
            <MenuDivider />
            <MenuItem icon={<SignOutIcon />} onClick={signOut}>
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack>
          <Button colorScheme="teal" variant="ghost" onClick={onLoginOpen}>
            Login
          </Button>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <Button colorScheme="teal" variant="solid" onClick={onSignUpOpen}>
            Sign up
          </Button>
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </HStack>
      )}
    </HStack>
  );
}
