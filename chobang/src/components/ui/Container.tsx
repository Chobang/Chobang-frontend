import { ReactNode } from "react";
import * as S from "./Container.style";

type propsType = {
  children: ReactNode;
  width?: string | number;
  flexDirection?: string;
};

/** div태그를 쓴 display: flex 속성의 컨테이너,
 * 기본 width는 100%
 * width값을 문자열로 넘길수있음 ex) "200px" , "50%"
 * flexDirection속성은*/
const Container = (props: propsType) => {
  return (
    <S.Containerbox width={props.width} flexDirection={props.flexDirection}>
      {props.children}
    </S.Containerbox>
  );
};

export default Container;
