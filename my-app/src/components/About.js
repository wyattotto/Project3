import React from 'react';
import { useDisclosure, Button } from '@chakra-ui/react';

const AboutButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();
  };

  return (
    <Button onClick={handleButtonClick}>
      About
    </Button>
  );
};

export default AboutButton;

