import { Button } from '@chakra-ui/button';
import React, { useState } from 'react';
import {
  InlineWidget,
  PopupButton,
  PopupModal,
  useCalendlyEventListener,
} from 'react-calendly';
import { useAuth } from '../services/authSelector';

function MentorCalendar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log('onProfilePageViewed'),
    onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    onEventTypeViewed: () => console.log('onEventTypeViewed'),
    onEventScheduled: e => console.log(e.data.payload),
  });

  const calendlyurl = user.calendly_url;
  // const calendlyurl = "https://calendly.com/app/availability/schedules";

  const rootElement = document.getElementById('root');
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      {/* <div className="App">
        <InlineWidget url={calendlyurl} />
      </div> */}
      <Button colorScheme="teal" size="lg" onClick={onOpen}>Open Calendar </Button>
      {/* <Button colorScheme="teal" size="lg"></Button> */}
      <PopupModal
        url={'https://calendly.com/demoproject3'}
        // pageSettings={this.props.pageSettings}
        // utm={this.props.utm}
        // prefill={this.props.prefill}
        onModalClose={onClose}
        open={open}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement}
      />
    </>
  );
}
export default MentorCalendar;
