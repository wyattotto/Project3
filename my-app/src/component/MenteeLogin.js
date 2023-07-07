import React, { useState } from 'react';
import {
  Button,
  Container,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  VStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const MenteeLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    // Perform any other necessary actions here
  };

  const PasswordInput = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  };

  return (
    <>
      <Button size="lg" onClick={handleButtonClick}>
        Mentee
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="500px">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Container>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Container>

            <form onSubmit={handleFormSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="first-name">User Name</FormLabel>
                  <Input
                    id="User-name"
                    placeholder="User Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <PasswordInput />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email ? (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
              </VStack>
              <Button type="submit" form="my-form">
              Create Account
            </Button>
            </form>
            <Container>
              Have an account? Login below.
            </Container>
            <form onSubmit={handleFormSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="existing-user-name">User Name</FormLabel>
                  <Input
                    id="existing-user-name"
                    placeholder="User Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="existing-password">Password</FormLabel>
                  <PasswordInput />
                </FormControl>
              </VStack>
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button type="submit" form="my-form">
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenteeLogin;

