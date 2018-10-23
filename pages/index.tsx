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

`;

const PageWrapper = styled.div`
  h2 {
    color: #0734ff;
    font-family: Aeonik;
    font-size: 70px;
    font-weight: bold;
    line-height: 84px;
  }

  section {
    padding: 86px 0px;
  }
`;

export default () => (
  <PageWrapper>
    <Header />
    <Description />
    <Events />
  </PageWrapper>
);
