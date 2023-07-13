import {
  Box,
  Container,
  Image,
  Wrap,
  WrapItem,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';
import icecreamImage from '../assets/Icecreamscoop.jpeg';
import coneImage from '../assets/Cone.jpeg';
import mentorImage from '../assets/mentorlady.jpeg';
import { Link } from 'react-router-dom';

const MenteeHomepage = () => {
  return (
    <Container>
      <Heading>Welcome Mentee!</Heading>

      <Box display="flex" alignItems="left" justify="space-between" mt="4">
        <Image src={icecreamImage} borderRadius="full" boxSize="200px" alt="Ice Cream Scoop" />
        <Box flex="1" ml="4">
          <Box>
            <h2>What's the Scoop?</h2>
            There are many things that go into being successful. Sometimes we may have all the ingredients but not the proper equipment. But that’s ok because we are here to help mix all the parts together and create amazing!
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="left" justify="space-between" mt="4">
        <Box flex="1" mr="4">
          <Box>
            <h2>Choose a Flavor...</h2>
            With the help of some amazing industry professionals, we can assist with building your career and taking it to new tiers. Choose your ideal career from the menu below and explore your options of mentors. Book a session and build something cool.
          </Box>
        </Box>
        <Image src={coneImage} borderRadius="full" boxSize="200px" alt="Ice Cream Scoop" />
      </Box>

      <FormControl mt="4">
        <FormLabel htmlFor="role">Search Mentors by Role</FormLabel>
        <Select id="country" placeholder="Select Role">
          <option>Software Developer</option>
          <option>UX/UI</option>
          <option>Cloud Engineer</option>
          <option>Product Manager</option>
          <option>Tech Sales</option>
          <option>Cybersecurity</option>
        </Select>
      </FormControl>

      <Box textAlign="center" mt="4">
        <Wrap justify="right" spacing="6">
          <WrapItem></WrapItem>
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
    imageUrl: mentorImage,
    imageAlt: 'mentor image',
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
        <Link to="/mentor-calendar">
          <Button colorScheme="teal" size="sm">
            Schedule a Session
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default MenteeHomepage;

