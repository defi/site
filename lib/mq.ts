import { css } from "emotion";

const breakpoints: { [key: string]: any } = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: "(max-width: 360px) and (min-height: 740px)"
};

// @ts-ignore
const mq: {
  small: any;
  medium: any;
  large: any;
  xLarge: any;
  tallPhone: any;
} = Object.keys(breakpoints).reduce(
  (accumulator: { [key: string]: any }, label) => {
    let prefix = typeof breakpoints[label] === "string" ? "" : "max-width:";
    let suffix = typeof breakpoints[label] === "string" ? "" : "px";
    accumulator[label] = (cls: any) =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
  },
  {}
);

export default mq;
