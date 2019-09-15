import * as React from "react";
import emotionNormalize from "emotion-normalize";
import { injectGlobal } from "emotion";
import Head from "next/head";

import Header from "../components/Header";
import Description from "../components/Description";
import Events from "../components/Events";
import Members from "../components/Members";
import mq from "../lib/mq";
import { css } from "emotion";

const defiStyles = css`
  @font-face {
    font-family: Aeonik;
    src: url(static/Aeonik-Bold.ttf);
    font-weight: bold;
  }

  @font-face {
    font-family: Aeonik;
    src: url(static/Aeonik-Regular.ttf);
  }

  html,
  body {
    margin: 0;
    font-family: Aeonik, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h2,
  h3 {
    color: #0734ff;
  }

  h2 {
    font-size: 70px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 84px;
    ${mq.medium(css`
      font-size: 35px;
      letter-spacing: -0.76px;
      line-height: 42px;
    `)};
  }

  h3 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 60px;
    ${mq.medium(css`
      font-size: 25px;
      letter-spacing: -0.76px;
      line-height: 30px;
    `)};
  }

  h4 {
    color: #000d45;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 34px;
    ${mq.medium(css`
      font-size: 24px;
      letter-spacing: -1.3px;
      line-height: 29px;
    `)};
  }

  p {
    color: #000d45;
    font-size: 20px;
    line-height: 28px;

    ${mq.medium(css`
      font-size: 16px;
      line-height: 28px;
    `)};
  }

  section {
    padding: 86px 0px;
  }
`;

injectGlobal`
${emotionNormalize}
${defiStyles}
`;

export default () => (
  <>
    <Head>
      <title>DeFi | Decentralizing Finance</title>
    </Head>
    <Header />
    <Description />
  </>
);
