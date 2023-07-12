import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  Button,
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
  useDisclosure
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MentorLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const [addUser] = useMutation(ADD_USER);

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addUser({ variables: { username: firstName + " " + lastName, email, password } })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.addUser.token)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const PasswordInput = ({ value, onChange }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
          value={value}
          onChange={onChange}
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
        Mentor
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="500px">
          <DrawerCloseButton />
          <DrawerHeader>Create your Mentor account</DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleFormSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">First name</FormLabel>
                <Input
                  id="first-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="last-name">Last name</FormLabel>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </FormControl>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {!email && (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <PasswordInput 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormControl>
              </VStack>
              <Button mt={4} colorScheme="teal" type="submit">
                Create Account
              </Button>
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MentorLogin;








