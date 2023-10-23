import styled from "styled-components";

type containerType = {
  width?: string | number;
  flexDirection?: string;
};

export const Containerbox = styled.div<containerType>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : `100%`)};
`;
