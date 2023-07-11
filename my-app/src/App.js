import {
  Box,
  ChakraProvider,
  Grid,
  Flex,
  HStack,
  Link,
  theme,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import MentorLogin from './components/MentorLogin';
import { Logo } from './Logo';

import MenteeLogin from './components/MenteeLogin';
import AboutButton from './components/About';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { Footer,Header } from './components/index.js';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Signin as LoginPage } from './pages/LoginPage';
import MentorAccount from './components/MentorAccount';
import MentorCalendar from './components/MentorCalendar';
import MentorHomepage from './pages/MentorHomepage';
import MentorSession from './components/MentorSession';
import { WhenLoggedIn, WhenNotLoggedIn } from './components/GuardShells';
import { AppContextContainer, USER_TYPE } from './services/appContext';
import { useAuth } from './services/authSelector';
import PaymentForm from './components/PaymentForm';
import  Stripe  from './components/Test';
import MenteeHomepage from './components/MenteeHomepage'


const CompContainer = ({ children }) => children ?? <></>;

const HomePage = () => {
  const { user } = useAuth();

  return (
    <>
      <WhenNotLoggedIn>You must be logged in</WhenNotLoggedIn>
      <WhenLoggedIn>
        {user?.userType === USER_TYPE.MENTOR ? <MentorHomepage /> : <></>}
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
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/home" element={<MentorHomepage/>} />
        <Route path="/payment" element={<PaymentForm/>} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/mentee-homepage" element={<MenteeHomepage />} />
        <Route path="/" element={<Navigate to="/landing" />} />
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





