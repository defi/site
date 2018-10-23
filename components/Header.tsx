import styled from "react-emotion";

const Header = ({ className }: { className?: string }) => (
  <header className={className}>
    <Title>DeFi</Title>
    <Subtitle>An Open Community of Decentralized Finance Platforms</Subtitle>
    <JoinTelegramButton>
      <span>Join the Telegram</span>
    </JoinTelegramButton>
  </header>
);

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
  height: 824px;
  border: 1px solid #979797;
  background-color: #0734ff;
`;
