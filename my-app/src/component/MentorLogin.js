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
  Select,
  FormHelperText,
  FormErrorMessage,
  Switch,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

const MentorButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mentorOption, setMentorOption] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFocusable, setIsFocusable] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const handleButtonClick = () => {
    onOpen();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    // Perform any other necessary actions here
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Container>

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
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Years of Experience</FormLabel>
                  <Select
                    placeholder="Select option"
                    value={mentorOption}
                    onChange={(e) => setMentorOption(e.target.value)}
                  >
                    <option value="option1">0-1 Years</option>
                    <option value="option2">1-5 Years</option>
                    <option value="option3">5+</option>
                  </Select>
                </FormControl>
              </VStack>
              <VStack spacing={6}>
                <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
                  <FormLabel htmlFor="isChecked">Monday:</FormLabel>
                  <Switch
                    id="isChecked"
                    isChecked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />

                  <FormLabel htmlFor="isDisabled">Tuesday:</FormLabel>
                  <Switch
                    id="isDisabled"
                    isChecked={isDisabled}
                    onChange={() => setIsDisabled(!isDisabled)}
                  />

                  <FormLabel htmlFor="isFocusable">Wednesday:</FormLabel>
                  <Switch
                    id="isFocusable"
                    isChecked={isFocusable}
                    onChange={() => setIsFocusable(!isFocusable)}
                  />

                  <FormLabel htmlFor="isInvalid">Thursday:</FormLabel>
                  <Switch
                    id="isInvalid"
                    isChecked={isInvalid}
                    onChange={() => setIsInvalid(!isInvalid)}
                  />

                  <FormLabel htmlFor="isReadOnly">Friday:</FormLabel>
                  <Switch
                    id="isReadOnly"
                    isChecked={isReadOnly}
                    onChange={() => setIsReadOnly(!isReadOnly)}
                  />

                  <FormLabel htmlFor="isRequired">Saturday:</FormLabel>
                  <Switch
                    id="isRequired"
                    isChecked={isRequired}
                    onChange={() => setIsRequired(!isRequired)}
                  />

                  <FormLabel htmlFor="isRequired">Sunday:</FormLabel>
                  <Switch
                    id="isRequired"
                    isChecked={isRequired}
                    onChange={() => setIsRequired(!isRequired)}
                  />
                </FormControl>
              </VStack>
              <Button type="submit" form="my-form">
                Save
              </Button>
            </form>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MentorButton;





