import * as React from "react";

import styled from "react-emotion";
import Section from "./Section";

const Events = ({ className }: { className?: string }) => (
  <Section className={className}>
    <h2>Events</h2>
    <h4>Upcoming</h4>
    <h4>Previous</h4>
  </Section>
);

export default styled(Events)`
  background-color: #fafbff;
`;
