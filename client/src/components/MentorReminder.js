import { Button } from '@chakra-ui/button';
import { ListItem, Stack, UnorderedList } from '@chakra-ui/layout';
import React from 'react';

const Reminder = ({ title, date, time, comment, onOpen, onDelete }) => {
  const emptyFunction = () => {};
  return (
    <Stack direction="column">
      <h2>
        {title} {date}
      </h2>
      <p>{time}</p>
      <p>{comment}</p>

      <Stack direction="row">
        {/* <Button variant={'solid'} onClick={onOpen ?? emptyFunction}>
          Open
        </Button>
        <Button variant="solid" onClick={onDelete ?? emptyFunction}>
          Delete
        </Button> */}
      </Stack>
    </Stack>
  );
};
function MentorReminder() {
  const fakeEvents = [
    {
      title: 'Mock Interview ',
      date: 'Aug 12, 2023',
      time: '4:00pm-4:30pm',
      comment: 'Entry-level developer position at Google.',
    },
    {
      title: 'Resume building',
      date: 'Aug 14, 2023',
      time: '1:00pm-2:00pm',
      comment: 'Mentee is looking for internship opportunities.',
    },
    {
      title: 'Project Management interview prep',
      date: 'Aug 16,2023',
      time: '9:00am-10:00am',
      comment:
        'Mentee is transitioning to from scrum master to project mgt role.',
    },
    {
      title: 'Networking/communication Skills',
      date: 'Aug 18,2023',
      time: '3:00pm-4:00pm',
      comment:
        'Mentee is looking to build vital skills for career development.',
    },
    {
      title: 'Full stack developer interview prep',
      date: 'Aug 20,2023',
      time: '2:00pm-3: 00pm',
      comment:
        'Mentee is looking to build vital skills for career development.',
    },
  ].map((val, index) => {
    //use map to transfor each fake even and a number to the title and an id
    val.time += ` ${index}`;
    val.id = crypto.randomUUID();
    return val;
  });
  /**
   * show a list of upcoming events
   */

  const fetchUpcomingEvents = () => {
    //make fetch request
  };

  return (
    <Stack
      direction="column"
      style={{
        overflow: 'scroll',
        height: '100%',
        padding: '1.2rem',
        color: 'white',
        size: '3pt',
      }}
    >
      <UnorderedList>
        {fakeEvents.map(event => (
          <ListItem key={event.id}>
            <Reminder {...event} />
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
}
export default MentorReminder;
