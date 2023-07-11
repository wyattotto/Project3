import {
    Box,
    Container,
    Image,
    Wrap,
    WrapItem,
    IconButton,
    Button,
    Heading,
    Divider,
    Center,
    FormControl,
    FormLabel,
    Select,
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';
  import React from 'react';
  import icecreamImage from '../assets/Icecreamscoop.jpeg';
  import coneImage from '../assets/Cone.jpeg';
  
  const MenteeHomepage = () => {
    return (
      <Container>
        <Heading>Welcome Mentee!</Heading>
  
        <Box display="flex" alignItems="left" justify="space-between" mt="4">
          <Image src={icecreamImage} borderRadius="full" boxSize="200px" alt="Ice Cream Scoop" />
          <Box flex="1" ml="4">
            <Box>
              <h2>What's the Scoop?</h2>
              There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.
            </Box>
          </Box>
        </Box>
  
        <Box display="flex" alignItems="left" justify="space-between" mt="4">
          <Box flex="1" mr="4">
            <Box>
              <h2>What's the Scoop?</h2>
              There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.
            </Box>
          </Box>
          <Image src={coneImage} borderRadius="full" boxSize="200px" alt="Ice Cream Scoop" />
        </Box>
  
        <FormControl mt="4">
          <FormLabel htmlFor="role">Search Mentors by Role</FormLabel>
          <Select id="country" placeholder="Select Role">
            <option>Software Developer</option>
            <option>UX/UI</option>
          </Select>
        </FormControl>
  
        <Box textAlign="center" mt="4">
          <Wrap justify="right" spacing="6">
            <WrapItem>
            
            </WrapItem>
            <WrapItem>
              {/* Insert your other components or content here */}
              {/* Example: */}
              <AirbnbExample />
            </WrapItem>
          </Wrap>
        </Box>
      </Container>
    );
  };
  
  function AirbnbExample() {
    const mentor = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Name of the mentor',
      reviewCount: 34,
      formattedPrice: 'Title of the mentor',
    };
  
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" mt="4">
        <Image src={mentor.imageUrl} alt={mentor.imageAlt} />
  
        <Box display="flex" alignItems="baseline" mt="2">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {mentor.title}
          </Box>
        </Box>
  
        <Box display="flex" mt="2" alignItems="center">
          <Button colorScheme="teal" size="sm">
            Schedule a Session
          </Button>
          {/* Replace the StarIcon component with an appropriate icon component */}
          {/* Example: */}
        
        </Box>
      </Box>
    );
  }
  
  export default MenteeHomepage;
  

















  