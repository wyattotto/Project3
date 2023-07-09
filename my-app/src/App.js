import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MentorLogin from './components/MentorLogin';

import MenteeLogin from './components/MenteeLogin';
import AboutButton from './components/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Signin as LoginPage } from './pages/LoginPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SignupPage } from './pages/SignupPage';
import MentorHomepage from './pages/MentorHomepage';
import { AppContextContainer, USER_TYPE } from './services/appContext';
import { WhenLoggedIn, WhenNotLoggedIn } from './components/GuardShells';
import { useAuth } from './services/authSelector';

const CompContainer = ({ children }) => children ?? <></>;

const LandingPage = () => {
  const { userType } = useAuth();
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <HStack spacing={10}>
              <MentorLogin />
              <MenteeLogin />
            </HStack>
            <Link to="/login" />
            <AboutButton />
          </VStack>
        </Grid>
      </Box>

      <WhenLoggedIn>
        {userType === USER_TYPE.MENTOR ? <MentorHomepage /> : <></>}
      </WhenLoggedIn>
    </>
  );
};

const RoutingComp = () => {
  return (
    <Box h="80vh" p={4} id="appRoutingContainer">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MentorHomepage/>} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/calendar" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Box>
  );
};

export const App = () => {
  return (
    <AppContextContainer>
      <ChakraProvider theme={theme}>
        <Header />
        <RoutingComp />
        <Footer />
      </ChakraProvider>
    </AppContextContainer>
  );
};

export default App;


