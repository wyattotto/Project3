import React, { useState, useContext } from 'react';
import { useMutation, gql } from '@apollo/react-hooks';
import { Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Input } from '@chakra-ui/react';
import { AuthContext } from '../context/authContext';
// import {gql} from "graphql-tag"

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
  const [nickname, setNickname] = useState('');
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform user creation in here
    addUser({ variables: { username: nickname, email: 'example@example.com', password: 'yourpassword' } }); //replace 'example@example.com' and 'yourpassword' with the real ones
    if (error) {
      console.log("Error occurred:", error);
    } else if (data) {
      console.log("User added successfully");
    }
  };

  return (
    <>
      <Button size="lg" onClick={handleButtonClick}>
        Mentee
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <form
              id="my-form"
              onSubmit={handleFormSubmit}
            >
              <Input
                name="nickname"
                placeholder="Type here..."
                value={nickname}
                onChange={e => setNickname(e.target.value)}
              />
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenteeLogin;
