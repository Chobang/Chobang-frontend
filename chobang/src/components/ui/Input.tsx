import { ReactNode, useState } from "react";

type propsType = {
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  isClick?: boolean;
  children?: ReactNode;
};

/** input의 넓이와 높이를 입력이 가능하며 placeholder 전달가능 */
const Input = (props: propsType) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const isClickHandler = (
    e: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    if (e.type === "focus") setIsClick(true);
    if (e.type === "blur") setIsClick(false);
  };
  return (
    <>
      <InputTag
        type={props.type}
        placeholder={props.placeholder}
        width={props.width}
        height={props.height}
        onFocus={isClickHandler}
        onBlur={isClickHandler}
        isClick={isClick}
      />
    </>
  );
};

export default Input;

import styled from "styled-components";

const InputTag = styled.input<{ isClick?: boolean }>`
  box-sizing: border-box;
  padding: 0;
  outline: none;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.2);
  text-indent: 5%;
  width: ${(props) => (props.width ? props.width : "250px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  border: ${(props) => (props.isClick ? "3px solid aqua" : "1px solid black")};
`;
