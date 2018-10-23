import * as React from "react";
import emotionNormalize from "emotion-normalize";
import { injectGlobal } from "emotion";
import styled from "react-emotion";

import Header from "../components/Header";
import Description from "../components/Description";
import Events from "../components/Events";

injectGlobal`
${emotionNormalize}

html, body {
    margin: 0;
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
