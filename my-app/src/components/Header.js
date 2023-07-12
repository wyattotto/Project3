import { Box, Stack } from '@chakra-ui/react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { useAuth } from '../services/authSelector';
import { WhenNotLoggedIn, WhenLoggedIn } from './GuardShells';

export const Header = () => {
  //hide logo on landing page
  const location = useLocation();
  const { email, logout } = useAuth();

  const isLanding = '/landing' === location.pathname;
  const showLogo = (_isLanding = isLanding) => (_isLanding ? <></> : <Logo />);
  const onLogout = event => {
    event.preventDefault(); // Prevents default refresh by the browser
    logout();
    navigate('/home');
  };

  return (
    <Stack direction="row" p={4} justifyContent="space-between">
      <NavLink to="/home">
        <Box width={'120px'}>{showLogo()}</Box>
      </NavLink>
      <Stack direction="row">
        <WhenLoggedIn>
          <>
            <Link key={3} to="/home">
              Mentor Home
            </Link>
            <Link key={1} to="/account">
              My Account
            </Link>
            <Link key={4} to="/session">
              Session History
            </Link>
            <Link key={8} to="/calendar">
              Calendar
            </Link>
          </>
        </WhenLoggedIn>

        
      </Stack>

      <Stack
        direction="row"
        style={{ alignItems: 'center', justifyContent: 'flex-end' }}
      >
        <WhenLoggedIn>
          <Link onClick={onLogout}>Logout</Link>
        </WhenLoggedIn>
        <WhenNotLoggedIn>
          <Link key={1} to="/login">
            Login
          </Link>
          <Link key={10} to="/signup">
            Signup
          </Link>
        </WhenNotLoggedIn> ̰
        <ColorModeSwitcher justifySelf="flex-end" />
      </Stack>
    </Stack>
  );
};
