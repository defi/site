import * as React from "react";
import emotionNormalize from "emotion-normalize";
import { injectGlobal } from "emotion";

injectGlobal`
${emotionNormalize}

html, body {
    margin: 0;
}
`;

import Header from "../components/Header";
import Description from "../components/Description";

export default () => (
  <div>
    <Header />
    <Description />
  </div>
);
