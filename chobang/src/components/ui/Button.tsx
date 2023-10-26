import React from "react";
import styled from "styled-components";
type propsType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginleft?: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
};
const Button = (props: propsType) => {
  return (
    <ButtonTag
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
      marginleft={props.marginleft}
    >
      {props.children}
    </ButtonTag>
  );
};
export default Button;

interface buttonInterface {
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginleft?: string;
}

const ButtonTag = styled.button<buttonInterface>`
  margin-left: ${(props) => (props.marginleft ? props.marginleft : 0)};
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "50px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.2);
`;
