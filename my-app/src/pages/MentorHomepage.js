import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import MentorCalendar from '../components/MentorCalendar';
import MentorReminder from '../components/MentorReminder';
import useMentorUserInfo from '../services/queryMutationHooks';
function MentorHomepage() {
  // make a grid of repeat(3,1fr) using chakra ui
  const { mentor, loading, error } = useMentorUserInfo();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

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
            <img src={mentor.image_url} alt="mentor profile image" />
          </h2>
        </div>
      </Box>
      <Box bg="ActiveBorder" gridColumn="2 / 2">
        <MentorAchievement />
      </Box>
      <Box bg="ActiveBorder" gridColumn="1 / 1">
        <GeneralInfo />
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

function ProfileImage() {
  return (
    <div>
      {' '}
      <h2>Profile image</h2>{' '}
    </div>
  );
}

function MentorAchievement() {
  //show the mentor achievement styled with chakra ui
  const { mentor, loading, error } = useMentorUserInfo();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const reviews = mentor.reviews;

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

function GeneralInfo() {
  const { mentor, loading, error } = useMentorUserInfo();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  //show the mentor general info styled with chakra ui
  return (
    <div>
      <h2>General Info</h2>
      <div>
        <h3>Username: {mentor.username}</h3>
        <h3>Email: {mentor.email}</h3>
        <h3>Focus: {mentor.focus}</h3>
        <h3>Education: {mentor.education}</h3>
        <h3>About: {mentor.about}</h3>
        <h3>Why: {mentor.why}</h3>
      </div>
    </div>
  );
}

function Calendar() {
  return <MentorCalendar />;
}

function Reviews() {
  return <div>Reviews</div>;
}
export default MentorHomepage;
