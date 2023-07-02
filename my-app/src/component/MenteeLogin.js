import React from 'react';
import { Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Input } from '@chakra-ui/react';

const MenteeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();
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
              onSubmit={(e) => {
                e.preventDefault();
                console.log('submitted');
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
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

export default MenteeButton;
