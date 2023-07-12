import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

const MenteeLogin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    addUser({ variables: { username: firstName, email, password: 'yourpassword' } });
    nav.push("/mentee-homepage");
    if (error) {
      console.log("Error occurred:", error);
    } else if (data) {
      console.log("User added successfully");
    }
  };

  return (
    <>
      <Button size="lg" onClick={handleButtonClick}>
        Mentor
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="500px">
          <DrawerCloseButton />
          <DrawerHeader>Create your Mentee account</DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleFormSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">First name</FormLabel>
                <Input
                  id="first-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="last-name">Last name</FormLabel>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="user-name">User Name</FormLabel>
                  <Input
                    id="user-name"
                    placeholder="User Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input type="password" placeholder="Password" />
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

