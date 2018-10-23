import styled from "react-emotion";
import Section from "./Section";

const Grid = () => {
  return <div />;
};

const Header = ({ className }: { className?: string }) => (
  <Section className={className}>
    <Main>
      <Logo>
        <Title>DeFi</Title>
        <Line />
      </Logo>
      <Subtitle>An Open Community of Decentralized Finance Platforms</Subtitle>
      <JoinTelegramButton>
        <span>Join the Telegram</span>
      </JoinTelegramButton>
    </Main>
    <Grid />
  </Section>
);

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 861px;
`;

const Line = styled.div`
  margin-left: 51px;
  height: 44px;
  width: 356px;
  border-bottom: 2px solid #ffffff;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 180px;
  font-weight: bold;
  letter-spacing: -5.47px;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 20px;
  margin-bottom: 65px;
`;

const JoinTelegramButton = styled.div`
  cursor: pointer;
  height: 74px;
  width: 293px;
  border-radius: 8px;
  background-color: #ffffff;
  span {
    height: 24px;
    width: 166px;
    color: #0734ff;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #ccc;
  }
`;

export default styled(Header)`
  border: 1px solid #979797;
  background-color: #0734ff;
  padding-top: 159px;
  padding-bottom: 190px;
`;
