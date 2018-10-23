import styled from "react-emotion";
import Section from "./Section";
import Dots from "./Dots";
import mq from "../lib/mq";
import { css } from "emotion";

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
      <Dots type="light" />
    </Content>
  </Section>
);

const Content = styled.div`
  display: flex;
  ${Dots} {
    margin-top: 40px;
    ${mq.medium(css`
      display: none;
    `)};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  max-width: 861px;
`;

const Line = styled.div`
  margin-left: 51px;
  height: 44px;
  width: 356px;
  border-bottom: 2px solid #ffffff;
  ${mq.medium(css`
    display: none;
  `)};
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 180px;
  font-weight: bold;
  letter-spacing: -5.47px;
  margin: 0;
  ${mq.medium(css`
    font-size: 90px;
    font-weight: bold;
    letter-spacing: -2.74px;
    line-height: 108px;
  `)};
`;

const Subtitle = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
  line-height: 60px;
  margin-top: 20px;
  margin-bottom: 65px;
  ${mq.medium(css`
    font-size: 25px;
    line-height: 30px;
  `)};
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

  ${mq.medium(css`
    width: 100%;
  `)};

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
