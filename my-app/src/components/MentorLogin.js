import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
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
  Select,
  FormHelperText,
  FormErrorMessage,
  VStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
// import { EditIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MentorLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mentorOption, setMentorOption] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFocusable, setIsFocusable] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

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

const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addUser({ variables: { username: firstName + " " + lastName, email, password } })
      .then(response => {
        console.log(response.data);
        // Handle response here
        localStorage.setItem('token', response.data.addUser.token)
      })
      .catch(error => {
        console.log(error);
        // Handle error here
      });
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
        Mentor
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="500px">
          <DrawerCloseButton />
          <DrawerHeader>Create your Mentor account</DrawerHeader>
          <DrawerBody>
            <Container>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Container>

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
                    onChange={e => setEmail(e.target.value)}
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
              <VStack spacing={4}>
                {/* <FormControl>
                  <FormLabel>Years of Experience</FormLabel>
                  <Select
                    placeholder="Select option"
                    value={mentorOption}
                    onChange={e => setMentorOption(e.target.value)}
                  >
                    <option value="option1">0-1 Years</option>
                    <option value="option2">1-5 Years</option>
                    <option value="option3">5+</option>
                  </Select>
                </FormControl> */}
              </VStack>
              <VStack spacing={6}>
                {/* Add any form controls or elements you want here */}
              </VStack>
              <Button type="submit" form="my-form">
              Create Account
              </Button>
              <Container>
                Have an account? Login below.
              </Container>
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
              <Link to="/mentorhome">
                <Button type="button">GO Mentor</Button>
              </Link>
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

export default MentorLogin;









