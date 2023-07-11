import { Box, Stack } from '@chakra-ui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { useAuth } from '../services/authSelector';
import { WhenNotLoggedIn, WhenLoggedIn } from './GuardShells';

export const Header = () => {
  //hide logo on landing page
  const location = useLocation();
  const { email } = useAuth();

  const isLanding = '/landing' === location.pathname;

  const showLogo = (_isLanding = isLanding) => (_isLanding ? <></> : <Logo />);

  return (
    <Stack direction="row" p={4} justifyContent="space-between">
      <NavLink to="/home">
        <Box width={'120px'}>{showLogo()}</Box>
      </NavLink>
      <Stack direction="row">
        {/* <Link key={3} to="/home">
          Home
        </Link> */}
        {/* <Link key={4} to="/profile">
          Profile
        </Link> */}
        <WhenLoggedIn>
          <>
            <Link key={4} to="/profile">
              Profile
            </Link>
            <Link key={3} to="/home">
              Home
            </Link>
          </>
        </WhenLoggedIn>

        <WhenNotLoggedIn>
          <Link key={1} to="/login">
            Login
          </Link>
          <Link key={1} to="/signup">
            Signup
          </Link>
        </WhenNotLoggedIn>
      </Stack>

      <WhenLoggedIn>{email}</WhenLoggedIn>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Stack>
  );
};
