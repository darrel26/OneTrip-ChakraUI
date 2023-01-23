import React, {useState} from 'react';
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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, getUsernameUrl } from '../../../../../utils/cookies';
import { SignOutIcon, ProfileIcon } from '../../../../../assets/Icons/icons';

export default function Navbar({setLogin}) {
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

  const signOut = () => {
    sessionStorage.removeItem('loginStatus');
    window.location.reload(false);
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
      {sessionStorage.getItem("loginStatus") ? (
        <Menu placement="auto">
          <MenuButton colorScheme="pink">
            <Avatar
              size="md"
              name={getCookie('username')}
              src={getUsernameUrl()}
            ></Avatar>
          </MenuButton>
          <MenuList>
            <Link to={'/my-profile'}>
              <MenuItem icon={<ProfileIcon />}>My Account</MenuItem>
            </Link>
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
          <LoginModal setLogin={setLogin} isOpen={isLoginOpen} onClose={onLoginClose} />
          <Button colorScheme="teal" variant="solid" onClick={onSignUpOpen}>
            Sign up
          </Button>
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </HStack>
      )}
    </HStack>
  );
}
