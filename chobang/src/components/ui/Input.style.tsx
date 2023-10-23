import styled from "styled-components";

export const Input = styled.input<{ isClick?: boolean }>`
  margin-left: 1rem;
  margin-top: 1rem;
  outline: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.5);
  text-indent: 5%;
  width: ${(props) => (props.width ? props.width : "250px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  border: ${(props) => (props.isClick ? "3px solid aqua" : "1px solid black")};
`;
