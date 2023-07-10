import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import MentorReminder from '../components/MentorReminder';
function MentorHomepage() {
  // make a grid of repeat(3,1fr) using chakra ui

  return (
    <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2,1fr)" gap={4} style={{height: '100%'}}>
      <Box bg="ActiveBorder" gridColumn="1 / 1">
        <ProfileImage />
      </Box>
      <Box bg="ActiveBorder" gridColumn="2 / 2">
        <MentorAchievement />
      </Box>
      <Box bg="ActiveBorder" gridColumn="1 / 1">
        <GeneralInfo />
      </Box>
      <Box bg="ActiveBorder" gridColumn="3 / 3" gridRow="1 / 3">
        <MentorReminder />
      </Box>
      <Box bg="ActiveBorder" gridColumn="2 / 2">
        <Calendar />
      </Box>
    </Grid>
  );
}

function ProfileImage() {
  return <div>Profile image</div>;
}

function MentorAchievement() {
  return <div>mentor achievement</div>;
}

function GeneralInfo() {
  return <div>general info</div>;
}

function Calendar() {
  return <div>calendar</div>;
}

function Reviews() {
  return <div>Reviews</div>;
}
export default MentorHomepage;
