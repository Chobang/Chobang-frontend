import { useState } from "react";
import * as S from "./Input.style";

type propsType = {
  placeholder?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
  isClick?: boolean;
};

/** input의 넓이와 높이를 입력이 가능하며 placeholder 전달가능 */
const Input = (props: propsType) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const isClickHandler = (
    e: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    if (e.type === "click") setIsClick(true);
    if (e.type === "blur") setIsClick(false);
  };
  return (
    <>
      <S.Input
        type={props.type}
        placeholder={props.placeholder}
        width={props.width}
        height={props.height}
        onClick={isClickHandler}
        onBlur={isClickHandler}
        isClick={isClick}
      />
    </>
  );
};

export default Input;
