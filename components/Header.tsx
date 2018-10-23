import styled from "react-emotion";
import Section from "./Section";

const Grid = styled.div`
  background: url(static/dots_${(props: { type: string }) => props.type}.png)
    no-repeat;
  height: 419px;
  width: 244px;
`;

const Header = ({ className }: { className?: string }) => (
  <Section className={className}>
    <Content>
      <Main>
        <Logo>
          <Title>DeFi</Title>
          <Line />
        </Logo>
        <Subtitle>
          An Open Community of Decentralized Finance Platforms
        </Subtitle>
        <JoinTelegramButton
          onClick={() => {
            if (typeof window !== "undefined") {
              window.open("https://t.me/de_fi", "_blank");
            }
          }}
        >
          <img src="static/telegram.png" />
          <span>Join the Telegram</span>
        </JoinTelegramButton>
      </Main>
      <Grid type="light" />
    </Content>
  </Section>
);

const Content = styled.div`
  display: flex;
  ${Grid} {
    margin-top: 40px;
  }
`;

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
  img {
    margin-right: 21px;
  }
  span {
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
