import * as React from "react";

import styled from "react-emotion";
import Section from "./Section";
import EventCard from "./EventCard";
import mq from "../lib/mq";
import { css } from "emotion";

const Events = ({ className }: { className?: string }) => (
  <Section className={className}>
    <h2>Events</h2>
    <EventGroup>
      <h4>Upcoming</h4>
      <EventCard
        image="static/events/defisumm.it.png"
        title="DeFi Summit London"
        location="London, UK"
        date="Sept 10th 2019"
        time="9am - 5pm"
      />
    </EventGroup>
    <EventGroup>

    <EventCard
      image="static/events/www.defidappsday.com.png"
      title="DeFi dApps Day"
      location="Tel Aviv, Israel"
      date="Sept 10th 2019"
      time="9am - 5pm"
    />
  </EventGroup>

    <EventGroup>
      <h4>Previous</h4>
      <EventCard
        image="static/events/defi-summit-prague.jpg"
        title="DeFi Summit Prague"
        location="Prague, Czech Republic"
        date="Oct 29th 2018"
        time="9am - 5pm"
      />
        </EventGroup>
  <EventGroup>
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
    ${mq.medium(css`
      font-size: 14px;
      line-height: 17px;
      letter-spacing: normal;
    `)};
  }
`;

export default styled(Events)`
  background-color: #fafbff;
  h2 {
    margin-bottom: 14px;
  }
`;
