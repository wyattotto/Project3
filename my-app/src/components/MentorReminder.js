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
        <Button variant={'solid'} onClick={onOpen ?? emptyFunction}>
          Open
        </Button>
        <Button variant="solid" onClick={onDelete ?? emptyFunction}>
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
function MentorReminder() {
  const fakeEvents = [
    {
      title: 'title',
      date: 'date',
      time: 'time',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.',
    },
    {
      title: 'title',
      date: 'date',
      time: 'time',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.',
    },
    {
      title: 'title',
      date: 'date',
      time: 'time',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.',
    },
    {
      title: 'title',
      date: 'date',
      time: 'time',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium.',
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
      style={{ overflow: 'scroll', height: '100%', padding: '1.2rem' }}
    >
      <h2>Reminders</h2>
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
