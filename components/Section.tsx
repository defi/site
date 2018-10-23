import * as React from "react";
import styled from "react-emotion";

const ContentWrapper = styled.div`
  max-width: 1141px;
  margin: 0px auto;
`;

const Section = ({
  className,
  children
}: {
  className?: string;
  children: any;
}) => (
  <section className={className}>
    <ContentWrapper>{children}</ContentWrapper>
  </section>
);

export default styled(Section)`
  padding: 90px 45px;
`;
