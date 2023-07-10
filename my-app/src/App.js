import {
  Box,
  ChakraProvider,
  Grid,
  HStack,
  Link,
  theme,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import MentorLogin from './components/MentorLogin';
import { Logo } from './Logo';

import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Signin as LoginPage } from './pages/LoginPage';
import MentorAccount from './components/MentorAccount';
import MentorCalendar from './components/MentorCalendar';
import MentorHomepage from './pages/MentorHomepage';
import MentorSession from './components/MentorSession';
import { SignupPage } from './pages/SignupPage';
import AboutButton from './components/About';
import { WhenLoggedIn, WhenNotLoggedIn } from './components/GuardShells';
import MenteeLogin from './components/MenteeLogin';
import { AppContextContainer, USER_TYPE } from './services/appContext';
import { useAuth } from './services/authSelector';

const CompContainer = ({ children }) => children ?? <></>;

const HomePage = () => {
  const { userType } = useAuth();

  return (
    <>
      <WhenNotLoggedIn>You must be logged in</WhenNotLoggedIn>
      <WhenLoggedIn>
        {userType === USER_TYPE.MENTOR ? <MentorHomepage /> : <></>}
      </WhenLoggedIn>
    </>
  );
};
const LandingPage = () => {
  return (
    <>
      <WhenLoggedIn>You are logged in already </WhenLoggedIn>
      <WhenNotLoggedIn>
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
      </WhenNotLoggedIn>
    </>
  );
};

const RoutingComp = () => {
  return (
    <Box h="80vh" p={4} id="appRoutingContainer">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <WhenNotLoggedIn>
                <LandingPage />
              </WhenNotLoggedIn>
              <WhenLoggedIn>
                <HomePage />
              </WhenLoggedIn>
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/account" element={<MentorAccount />} />
        <Route path="/session" element={<MentorSession />} />
        <Route path="/calendar" element={<MentorCalendar />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
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
