'./pages/LoginPage';
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
import React, { useEffect } from 'react';
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
import { useAppContext, useAuth } from './services/authSelector';
import MenteeHomepage from './components/MenteeHomepage';
import { Navigate } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import  Stripe  from './components/Test';
import { useQuery } from '@apollo/client';

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
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/payment" element={<PaymentForm/>} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/mentee-homepage" element={<MenteeHomepage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<MentorAccount />} />
        <Route path="/session" element={<MentorSession />} />
        <Route path="/calendar" element={<MentorCalendar />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
    </Box>
  );
};

export const App = () => {
  const auth = useAuth();
  const { dispatch } = useAppContext();
  const authData = { token: auth.token, user: auth.user };

  // useEffect(() => {
  //   // initialize the user when the app loads
  //   const savedAuth = auth.getSavedAuth();

  //   if (!savedAuth) {
  //     return; //no savedAuth found return
  //   }
  //   //  savedAuth found, initialize the auth store
  //   dispatch('login', savedAuth);
  // }, []);

  // // update the savedAuth if logged or
  // const updateSavedAuth = () => {
  //   if (!authData?.token || !auth.user) {
  //     auth.saveAuth(undefined);
  //   } else {
  //     auth.saveAuth(authData);
  //   }
  // };

  // useEffect(updateSavedAuth, [authData, auth]);
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
