import * as React from "react";
import styled from "react-emotion";
import mq from "../lib/mq";
import { css } from "emotion";

type Props = {
  id: string;
  className?: string;
  title: string;
  children: any;
};

const CorePrinciple = ({ id, className, title, children }: Props) => (
  <div className={className}>
    <PrincipleTitle>
      <PrincipleId>{id}</PrincipleId>
      <h4>{title}</h4>
    </PrincipleTitle>
    {children}
  </div>
);

const PrincipleTitle = styled.div`
  display: flex;
  h4 {
    margin-top: 26px;
    margin-bottom: 0;
    ${mq.medium(css`
      margin-top: 0;
    `)};
  }
  margin-bottom: 25px;
`;

const PrincipleId = styled.div`
  width: 50px;
  color: #0734ff;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1.52px;
  line-height: 60px;
  ${mq.medium(css`
    width: 38px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.76px;
    line-height: 30px;
  `)};
`;

export default styled(CorePrinciple)``;
