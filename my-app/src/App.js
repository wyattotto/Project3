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
import MentorButton from './component/MentorLogin';
import MenteeButton from './component/MenteeLogin';
import AboutButton from './component/About';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <HStack spacing={10}>
              <MentorButton />
              <MenteeButton />
            </HStack>
            <AboutButton />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;









