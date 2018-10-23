import styled from "react-emotion";
import Section from "./Section";

const Grid = () => {
  return <div />;
};

const Header = ({ className }: { className?: string }) => (
  <Section className={className}>
    <Main>
      <Title>DeFi</Title>
      <Line />
      <Subtitle>An Open Community of Decentralized Finance Platforms</Subtitle>
      <JoinTelegramButton>
        <span>Join the Telegram</span>
      </JoinTelegramButton>
    </Main>
    <Grid />
  </Section>
);

const Main = styled.div``;

const Line = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: 356px;
  border: 2px solid #ffffff;
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: Aeonik;
  font-size: 180px;
  font-weight: bold;
  letter-spacing: -5.47px;
  line-height: 216px;
`;

const Subtitle = styled.p`
  height: 120px;
  width: 861px;
  color: #ffffff;
  font-family: Aeonik;
  font-size: 50px;
  font-weight: bold;
  line-height: 60px;
`;

const JoinTelegramButton = styled.div`
  height: 74px;
  width: 293px;
  border-radius: 8px;
  background-color: #ffffff;
  span {
    height: 24px;
    width: 166px;
    color: #0734ff;
    font-family: Aeonik;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
  }
`;

export default styled(Header)`
  border: 1px solid #979797;
  background-color: #0734ff;
`;
