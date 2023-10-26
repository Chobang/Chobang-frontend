import styled from "styled-components";

type containerType = {
  width?: string | number;
  flexdirection?: string;
};

export const Containerbox = styled.div<containerType>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexdirection ? props.flexdirection : "row"};
  width: ${(props) => (props.width ? props.width : `100%`)};
`;
