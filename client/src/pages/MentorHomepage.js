import { Box, Image, Heading, Container } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import MentorCalendar from '../components/MentorCalendar';
import MentorReminder from '../components/MentorReminder';
// import { Image } from "@chakra-ui/react";
import mentorImage from '../assets/mentorlady.jpeg';
// import useMentorUserInfo from '../services/queryMutationHooks';
import { useQuery, gql } from '@apollo/client';

const MENTOR_USER_INFO_QUERY = gql`
  query MentorUserInfo {
    user {
      _id
      email
      focus
      role
      education
      about
      username
      why
      image_url
      reviews {
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;
// function MentorHomepage() {
// make a grid of repeat(3,1fr) using chakra ui
//   const { mentor, loading, error } = useMentorUserInfo();
// console.log(mentor);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error! {error.message}</div>;
// const {data} = useQuery(MENTOR_USER_INFO_QUERY);
// if (data){
//   console.log(data.user);
// }
// else
// {console.log("no data")}

function Mentorpage() {
  return (
    <Container>
      <Heading as="h1" size="xl">
        Welcome Mentor
      </Heading>
      <Mentorpage />
    </Container>
  );
}

function MentorHomepage() {
  const user = {
    _id: '123',
    email: 'test@test.com',
    focus: 'Mock-Interviews',
    role: 'Software Engineer',
    education: 'Georgia Institute of Technology',
    about: 'Two years in Google',
    username: 'Mentor23',
    why: 'I would be able to help others grow and develop into the best versions of themselves.',
    image_url: '',
    reviews: [
      {
        reviewText: 'Mentor is very helpful and knowledgeable.',
        reviewAuthor: 'Mentee1',
        createdAt: '07-2-2023',
      },
      {
        reviewText: 'Mentor prepared me well for my interview.',
        reviewAuthor: 'Mentee2',
        createdAt: '06-22-2023',
      },
      {
        reviewText: 'Mentor helped me with my resume.',
        reviewAuthor: 'Mentee3',
        createdAt: '06-20-2023',
      },
      {
        reviewText: 'Mentor taught me how to negotiate my salary.',
        reviewAuthor: 'Mentee4',
        createdAt: '06-18-2023',
      },
      {
        reviewText: 'Mentor talked to me about the importance of networking.',
        reviewAuthor: 'Mentee5',
        createdAt: '06-15-2023',
      },
    ],
  };

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="60% 40%"
      color="white"
      bg="teal 400 "
      gap={4}
      style={{ height: '100%' }}
    >
      <Box
        display="flex"
        bg="ActiveBorder"
        backgroundColor={'teal.400'}
        color="white"
        gridColumn="1 / 1"
        position="relative"
      >
        <GridCard header={'welcome'}>
          <Image
            style={{ objectFit: 'cover', height: '100%' }}
            src={mentorImage}
            alt="mentor profile image"
          />
        </GridCard>
      </Box>
      <Box
        display="flex"
        bg="ActiveBorder"
        backgroundColor={'teal.400'}
        color="white"
        gridColumn="2 / 2"
      >
        <MentorAchievement user={user} />
      </Box>
      {/* <Box display="flex" alignItems="left" justify="space-between" mt="4">
          <Box flex="1" mr="4">
            <Box as="h4" fontWeight="bold" fontSize="lg" mb="2">
          </Box> */}

      {/* <Box bg="ActiveBorder" backgroundColor={"teal.600"} color="white" alignItems="left" gridColumn="1 / 1">
      <GeneralInfo  user={user}/>
    </Box> */}
      <Box
        bg="ActiveBorder"
        backgroundColor="teal.400"
        color="white"
        alignItems="center"
        gridColumn="1 / span 1"
      >
        <GeneralInfo user={user} />
      </Box>

      <Box
        bg="ActiveBorder"
        backgroundColor={'teal.400'}
        color="white"
        gridColumn="2 / 2"
      >
        <Calendar />
      </Box>

      <Box
        bg="ActiveBorder"
        gridColumn="3 / 3"
        backgroundColor={'teal.400'}
        color="white"
        gridRow="1 / 3"
      >
        <GridCard header="REMINDERS">
          <MentorReminder />
        </GridCard>
      </Box>
    </Grid>
  );
}

function MentorAchievement({ user }) {
  const reviews = user.reviews;

  return (
    <GridCard header={<span>Ratings</span>}>
      <PaddedContainer>
        {/* <h2>Mentor Achievement</h2> */}
        <div>Reviews {reviews.length}</div>
        <div>
          {reviews.map(review => (
            <div>
              <h3>Review: {review.reviewText}</h3>
              <h3>Author: {review.reviewAuthor}</h3>
              <h3>Date: {review.createdAt}</h3>
            </div>
          ))}
        </div>
      </PaddedContainer>
    </GridCard>
  );
}

function GeneralInfo({ user }) {
  return (
    <GridCard header={<h2>General Information</h2>}>
      <PaddedContainer>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Focus: {user.focus}</h3>
        <h3>Education: {user.education}</h3>
        <h3>About: {user.about}</h3>
        <h3>Why: {user.why}</h3>
      </PaddedContainer>
    </GridCard>
  );
}

function Calendar() {
  return (
    <GridCard header="MEETINGS">
      <MentorCalendar />
    </GridCard>
  );
}

function GridCard({ header = undefined, children }) {
  return (
    <Box className="gridcard" style={{ height: '100%', width: '100%' }}>
      <Box
        className="gridcard-header"
        style={{
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          height: '50px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
        bgColor={'blue.600'}
      >
        {header ?? 'NoHeader'}
      </Box>
      <Box
        className="gridcard-container"
        style={{ overflowY: 'scroll', height: 'calc( 100% - 50px)' }}
      >
        {children}
      </Box>
    </Box>
  );
}

function PaddedContainer({ children }) {
  return (
    <Box className="paddedContainer" style={{ padding: '2rem' }}>
      {children}
    </Box>
  );
}

export default MentorHomepage;
