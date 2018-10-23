import styled from "react-emotion";

const Description = ({ className }: { className?: string }) => (
  <section className={className}>
    <h1>DeFi is a Movement</h1>
    <p>
      We saw an overlap in the problems that decentralized finance protocols
      were trying to solve and thought there would be no better way to tackle
      them then by forming an open community of like-minded projects.
    </p>
    <CorePrinciples>
      <h3>Our Core Principles</h3>
      <CorePrinciple>
        <PrincipleId>1</PrincipleId>
        <h4>Interoperability and Open Source</h4>
        <p>
          Members of DeFi take interoperability into account when building their
          projects. This helps strengthen the compounding effects of all our
          projects as a whole. Open sourcing helps us reach this goal by
          allowing us to collectively understand how all of our products can be
          woven together on a technical level.
        </p>
      </CorePrinciple>
      <CorePrinciple>
        <PrincipleId>2</PrincipleId>
        <h4>Accessibility and Financial Inclusion</h4>
        <p>
          We strive to create a financial system that is accessible to anyone
          with an internet connection. We believe in a world where value flows
          freely, regardless of one’s geographic location.
        </p>
      </CorePrinciple>
      <CorePrinciple>
        <PrincipleId>3</PrincipleId>
        <h4>Financial Transparency</h4>
        <p>
          We believe that financial services should not be built in opaque
          silos, but rather that market-level information should be transparent
          to all participants while still preserving individual privacy.
        </p>
      </CorePrinciple>
    </CorePrinciples>
  </section>
);

const CorePrinciples = styled.div``;

const CorePrinciple = styled.div``;

const PrincipleId = styled.span``;

export default styled(Description)``;
