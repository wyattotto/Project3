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
  Flex,
  Container,
  WrapItem,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MentorLogin from './component/MentorLogin';
import MenteeLogin from './component/MenteeLogin';
import AboutButton from './component/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Signin as LoginPage } from './component/LoginPage';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { SignupPage } from './component/SignupPage';
import MenteeHomepage from './component/MenteeHomepage';
import { Outlet } from 'react-router-dom';

const CompContainer = ({ children }) => children ?? <></>;

const LandingPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Flex justify="space-between" align="center">
          <MentorLogin />
          <Box mx={4} />
          <MenteeLogin />
        </Flex>
        <Link to="/login" />
        <AboutButton />
      </VStack>
    </Grid>
  </Box>
);

const RoutingComp = () => {
  return (
    <Box>
      <Routes>
        {/* Existing routes */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/profile" element={<LandingPage />} />
        <Route path="/calendar" element={<LandingPage />} />

        {/* Nested route */}
        <Route path="/mentee/*" element={<MenteeParent />}>
          <Route path="mentee-test" element={<MenteeHomepage />} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/landing" />} />
      </Routes>
    </Box>
  );
};



const MenteeParent = () => {
  return (
    <>
      
       
       <MenteeHomepage/>  
     
     
      
    
    </>
  );
};


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container/>
      <RoutingComp />
      <Footer />
    </ChakraProvider>
  );
};

export default App;





