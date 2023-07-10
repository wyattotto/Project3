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
import MentorLogin from './component/MentorLogin';

import MenteeLogin from './component/MenteeLogin';
import AboutButton from './component/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Signin as LoginPage } from './component/LoginPage';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { SignupPage } from './component/SignupPage';
import MentorHomepage from './component/MentorHomepage';
import MentorAccount from './component/MentorAccount';
import MentorSession from './component/MentorSession';
import MentorCalendar from './component/MentorCalendar';
import { AppContextContainer, USER_TYPE } from './services/appContext';
import { WhenLoggedIn, WhenNotLoggedIn } from './component/GuardShells';
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
                <MentorHomepage />
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
