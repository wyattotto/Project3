import React from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
function MentorCalendar() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log('onProfilePageViewed'),
    onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    onEventTypeViewed: () => console.log('onEventTypeViewed'),
    onEventScheduled: e => console.log(e.data.payload),
  });

  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
  );
}
export default MentorCalendar;
