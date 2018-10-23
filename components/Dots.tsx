import styled from "react-emotion";

const Dots = styled.div`
  background: url(static/dots_${(props: { type: string }) => props.type}.png)
    no-repeat;
  height: 419px;
  width: 244px;
`;

export default Dots;
