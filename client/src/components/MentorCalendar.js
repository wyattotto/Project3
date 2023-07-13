import { Button } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  InlineWidget,
  PopupButton,
  PopupModal,
  useCalendlyEventListener,
} from 'react-calendly';
import { useAuth } from '../services/authSelector';
import { getCalendlyScheduledEvents } from '../services/queryMutationHooks';

function MentorCalendar() {
  const calendly_project = 'demoproject3';
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  useCalendlyEventListener({
    onProfilePageViewed: e => console.log('onProfilePageViewed', e),
    onDateAndTimeSelected: e => console.log('onDateAndTimeSelected', e),
    onEventTypeViewed: e => console.log('onEventTypeViewed', e),
    onEventScheduled: e => console.log(e.data.payload),
    event: 'calendly.event_scheduled',
    payload: {
      event: {
        uri: `https://calendly.com/api/v2/scheduled_events/${calendly_project}`,
      },
      invitee: {
        uri: `https://calendly.com/api/v2/scheduled_events/${calendly_project}/invitees/`,
      },
    },
  });

  const calendlyurl = user.calendly_url;
  // const calendlyurl = "https://calendly.com/app/availability/schedules";

  const [calendlyEvents, setCalendlyEvents] = useState([]);

  const rootElement = document.getElementById('root');
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  // useEffect(() => {
  //   getCalendlyScheduledEvents(calendly_project).then(data =>
  //     setCalendlyEvents(data)
  //   );
  // }, []);

  return (
    <Stack direction="column">
      <Button colorScheme="yellow" size="lg" onClick={onOpen}>
        Schedule a Meeting
      </Button>
      <PopupModal
        url={`https://calendly.com/${calendly_project}`}
        onModalClose={onClose}
        open={open}
        rootElement={rootElement}
      />

      <h2>Upcoming Events: {calendlyEvents.length}</h2>
      {calendlyEvents.map(event => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.start_time}</p>
          <p>{event.end_time}</p>
          <p>{event.canceled}</p>
          <p>{event.canceled_at}</p>
          <p>{event.canceled_by}</p>
        </div>
      ))}
    </Stack>
  );
}
export default MentorCalendar;
