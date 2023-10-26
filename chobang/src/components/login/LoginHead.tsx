import React from "react";
import * as S from "./LoginHead.style";
import { Link } from "react-router-dom";

const LoginHead = () => {
  return (
    <div>
      <S.Header className="logo">
        <S.ImgDiv>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDCoa7Pq_xlrWor5yPw75F0JVGWNJuckKwya5glzWAgDnuVp7bmCpjzR5pu_L4PvBuw&usqp=CAU"
              alt="logo"
            />
          </Link>
        </S.ImgDiv>
        <S.TextDiv>
          <p>간편하게 로그인하고</p>
          <p>다양한 서비스를 이용하세요</p>
        </S.TextDiv>
      </S.Header>
    </div>
  );
};

export default LoginHead;
