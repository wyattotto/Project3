import { Box, Image, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import puppyImage from '../assets/puppy.jpeg';

const MenteeHomepage = () => {
  return (
    <Box textAlign="center">
      <Wrap justify="center" spacing="4">
        <WrapItem>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={puppyImage}
            alt="Puppy"
          />
        </WrapItem>
        <WrapItem>
          {/* Insert your other components or content here */}
          {/* Example: */}
          <AirbnbExample />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

function AirbnbExample() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      mt="4"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box display="flex" alignItems="baseline" mt="2">
        <Box
          borderRadius="full"
          px="2"
          bg="teal.500"
          color="white"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          New
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {property.beds} beds &bull; {property.baths} baths
        </Box>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {property.title}
      </Box>

      <Box>
        {property.formattedPrice}
        <Box as="span" color="gray.600" fontSize="sm">
          / wk
        </Box>
      </Box>

      <Box display="flex" mt="2" alignItems="center">
        {/* Replace the StarIcon component with an appropriate icon component */}
        {/* Example: */}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {property.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  );
}

export default MenteeHomepage;












  