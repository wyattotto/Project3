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
    Flex
  } from '@chakra-ui/react';
  // import { SearchIcon } from '@chakra-ui/icons';
  import React from 'react';
  import icecreamImage from '../assets/Icecreamscoop.jpeg';
  import coneImage from '../assets/Cone.jpeg';
  import { useNavigate } from 'react-router-dom';

  
  const MenteeHomepage = () => {
    return (
      <Container  style={{ paddingBottom: '60px' }}>
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
              With the help of some amazing industry professional, we can assist with building your career and taking it to new tiers. Choose your ideal career from the menu below and explore your options of mentors. Book a session and build something cool.
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
            <WrapItem>
            
            </WrapItem>
            <WrapItem>
              {/* Insert your other components or content here */}
              {/* Example: */}
              <MentorBoxes />
            </WrapItem>
          </Wrap>
        </Box>
      </Container>
    );
  };

  
  
  // function AirbnbExample() {
  //   const navigate = useNavigate();
  
  //   const mentor = {
  //     imageUrl: 'https://bit.ly/2Z4KKcF',
  //     imageAlt: 'mentor image',
  //     title: 'Name of the mentor',
  //     reviewCount: 34,
  //     formattedPrice: 'Title of the mentor',
  //   };
  
  //   return (
  //     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" mt="4">
  //       <Image src={mentor.imageUrl} alt={mentor.imageAlt} />
  
  //       <Box display="flex" alignItems="baseline" mt="2">
  //         <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
  //           {mentor.title}
  //         </Box>
  //       </Box>
  
  //       <Box display="flex" mt="2" alignItems="center">
  //         <Button colorScheme="teal" size="sm" onClick={() => navigate('/calendar')}>
  //           Schedule a Session
  //         </Button>
  //         {/* Replace the StarIcon component with an appropriate icon component */}
  //         {/* Example: */}
        
  //       </Box>
  //     </Box>
  //   );
  // }
  function MentorBox({ mentor }) {
    const navigate = useNavigate();
    
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" mt="4">
        <Image src={mentor.imageUrl} alt={mentor.imageAlt} />
        <Box display="flex" alignItems="baseline" mt="2">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {mentor.title}
          </Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <Button colorScheme="teal" size="sm" onClick={() => navigate('/calendar')}>
            Schedule a Session
          </Button>
        </Box>
      </Box>
    );
  }
  
  export const MentorBoxes = () => {
    const mentors = [
      {
        imageUrl: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=703&q=80',
        imageAlt: 'mentor image',
        title: 'Mia Sullivan',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80',
        imageAlt: 'mentor image',
        title: 'Benjamin Anderson',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        imageAlt: 'mentor image',
        title: 'James Mitchell',
      },
    ];
  
    return (
      <Flex direction="row" justify="space-between">
        {mentors.map((mentor, index) => (
          <MentorBox key={index} mentor={mentor} />
        ))}
      </Flex>
    );
  };
  
  
  export default MenteeHomepage;
  

















  