import * as React from "react";

import styled from "react-emotion";
import Section from "./Section";
import EventCard from "./EventCard";

const Events = ({ className }: { className?: string }) => (
  <Section className={className}>
    <h2>Events</h2>
    <EventGroup>
      <h4>Upcoming</h4>
      <EventCard
        image="static/events/defi-summit-prague.jpg"
        title="DeFi Summit Prague"
        location="Prague, Czech Republic"
        date="Oct 29th 2018"
        time="9am - 5pm"
      />
    </EventGroup>
    <EventGroup>
      <h4>Previous</h4>
      <EventCard
        image="static/events/defi-summit.jpg"
        title="DeFi Summit SF"
        location="San Francisco, California"
        date="Oct 4th 2018"
        time="9am - 2:30pm"
      />
    </EventGroup>
  </Section>
);

const EventGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 60px;
  }
  > h4 {
    margin-top: 0;
    margin-bottom: 17px;
  }
`;

export default styled(Events)`
  background-color: #fafbff;
  h2 {
    margin-bottom: 14px;
  }
`;
