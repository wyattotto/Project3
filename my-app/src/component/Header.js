import { Box, Stack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

export const Header = () => {
  //hide logo on landing page
  const location = useLocation();

  const links = [
    <Link key={2} to="/landing">
      Landing
    </Link>,
    <Link key={3} to="/home">
      Home
    </Link>,
    <Link key={4} to="/profile">
      Profile
    </Link>,
    <Link key={1} to="/login">
      Login
    </Link>,
    <Link key={1} to="/signup">
      Signup
    </Link>,
  ];

  const isLanding = '/landing' === location.pathname;
  const showLogo = (_isLanding = isLanding) => (_isLanding ? <></> : <Logo />);

  return (
    <Stack direction="row" p={4} justifyContent="space-between">
      <Box width={'120px'}>{showLogo()}</Box>
      <Stack direction="row">{links}</Stack>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Stack>
  );
};
