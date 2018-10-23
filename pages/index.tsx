import * as React from "react";
import emotionNormalize from "emotion-normalize";
import { injectGlobal } from "emotion";
import styled from "react-emotion";

import Header from "../components/Header";
import Description from "../components/Description";
import Events from "../components/Events";

injectGlobal`
${emotionNormalize}

@font-face {
    font-family: Aeonik;
    src: url(/static/Aeonik-Bold.ttf);
    font-weight: bold;
}

@font-face {
    font-family: Aeonik;
    src: url(/static/Aeonik-Regular.ttf);
}

html, body {
    margin: 0;
    font-family: Aeonik, Arial, sans-serif;
}

*  {
    box-sizing: border-box;
}

  h2 {
    color: #0734ff;
    font-size: 70px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 84px;
  }

  h3 {
    color: #0734ff;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 60px;
  }

  h4 {
    color: #000d45;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: -1.52px;
    line-height: 34px;
  }

  p {
    color: #000d45;
    font-size: 20px;
    line-height: 28px;
  }

  section {
    padding: 86px 0px;
  }

`;

export default () => (
  <>
    <Header />
    <Description />
    <Events />
  </>
);
