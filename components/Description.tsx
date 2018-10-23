import styled from "react-emotion";
import Section from "./Section";
import CorePrinciple from "./CorePrinciple";
import { css } from "emotion";
import Dots from "./Dots";

const Description = ({ className }: { className?: string }) => (
  <Section className={className}>
    <h2>DeFi is a Movement</h2>
    <p>
      We saw an overlap in the problems that decentralized finance protocols
      were trying to solve and thought there would be no better way to tackle
      them then by forming an open community of like-minded projects.
    </p>
    <FlexWrapper>
      <CorePrinciples>
        <h3>Our Core Principles</h3>
        <CorePrinciple
          id="1"
          title="Interoperability and Open Source"
          className={css`
            margin-bottom: 42px;
          `}
        >
          <p>
            Members of DeFi take interoperability into account when building
            their projects. This helps strengthen the compounding effects of all
            our projects as a whole. Open sourcing helps us reach this goal by
            allowing us to collectively understand how all of our products can
            be woven together on a technical level.
          </p>
        </CorePrinciple>
        <CorePrinciple
          id="2"
          title="Accessibility and Financial Inclusion"
          className={css`
            margin-bottom: 73px;
          `}
        >
          <p>
            We strive to create a financial system that is accessible to anyone
            with an internet connection. We believe in a world where value flows
            freely, regardless of one’s geographic location.
          </p>
        </CorePrinciple>
        <CorePrinciple id="3" title="Financial Transparency">
          <p>
            We believe that financial services should not be built in opaque
            silos, but rather that market-level information should be
            transparent to all participants while still preserving individual
            privacy.
          </p>
        </CorePrinciple>
      </CorePrinciples>
      <Dots type="dark" />
    </FlexWrapper>
  </Section>
);

const FlexWrapper = styled.div`
  display: flex;
  ${Dots} {
    margin-top: 280px;
    margin-left: 125px;
  }
`;

const CorePrinciples = styled.div`
  width: 773px;
`;

export default styled(Description)``;
