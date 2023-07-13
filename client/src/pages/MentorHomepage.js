import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import MentorCalendar from '../components/MentorCalendar';
import MentorReminder from '../components/MentorReminder';
// import useMentorUserInfo from '../services/queryMutationHooks';
import {useQuery,gql} from '@apollo/client';

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
function MentorHomepage() {
  const user = {
    _id: '123',
    email: 'test@test.com',
    focus: 'test focus',
    role: 'test role',
    education: 'test education',
    about: 'test about',
    username: 'test username',
    why: 'test why',
    image_url: 'test.jpg',
    reviews: [
      {
        reviewText: 'test review',
        reviewAuthor: 'test author',
        createdAt: 'test date',
      },
    ],
  };

return (
  <Grid
    templateColumns="repeat(3, 1fr)"
    templateRows="50% 50%"
    color="white"
    gap={4}
    style={{ height: '100%' }}
  >
    <Box bg="ActiveBorder" gridColumn="1 / 1">
      <div>
        <h2>
          <img src={user.image_url} alt="mentor profile image" />
        </h2>
      </div>
    </Box>
    <Box bg="ActiveBorder" gridColumn="2 / 2">
      <MentorAchievement user={user}/>
    </Box>
    <Box bg="ActiveBorder" gridColumn="1 / 1">
      <GeneralInfo user={user}/>
    </Box>
    <Box bg="ActiveBorder" gridColumn="2 / 2">
      <Calendar />
    </Box>
    <Box bg="ActiveBorder" gridColumn="3 / 3" gridRow="1 / 3">
      <MentorReminder />
    </Box>
  </Grid>
);
}

function MentorAchievement({ user }) {
const reviews = user.reviews;

return (
  <div>
    <h2>Mentor Achievement</h2>
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
  </div>
);
}

function GeneralInfo({ user }) {
return (
  <div>
    <h2>General Info</h2>
    <div>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Focus: {user.focus}</h3>
      <h3>Education: {user.education}</h3>
      <h3>About: {user.about}</h3>
      <h3>Why: {user.why}</h3>
    </div>
  </div>
);
}

function Calendar() {
return <MentorCalendar />;
}

export default MentorHomepage;
