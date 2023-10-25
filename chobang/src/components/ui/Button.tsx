import React from "react";
import styled from "styled-components";
type propsType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
const Button = (props: propsType) => {
  return (
    <ButtonTag
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
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
}

const ButtonTag = styled.button<buttonInterface>`
  margin: auto;
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "50px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "100%"};
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.2);
`;
