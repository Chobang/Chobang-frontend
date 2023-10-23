import { useRef, useState } from "react";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import * as S from "./Login.style";
import kakaologiniamge from "../assets/kakao_login_large_wide.png";

const Login = () => {
  return (
    <Container width="500px" flexDirection="column">
      <S.Header className="logo">
        <S.ImgDiv>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDCoa7Pq_xlrWor5yPw75F0JVGWNJuckKwya5glzWAgDnuVp7bmCpjzR5pu_L4PvBuw&usqp=CAU"
            alt="logo"
          />
        </S.ImgDiv>
        <S.TextDiv>
          <p>간편하게 로그인하고</p>
          <p>다양한 서비스를 이용하세요</p>
        </S.TextDiv>
      </S.Header>

      <S.inputBox>
        <label>아이디</label>
        <Input placeholder="아이디를 입력해주세요"></Input>
      </S.inputBox>

      <S.inputBox>
        <label>비밀번호</label>
        <Input placeholder="비밀번호를 입력해주세요"></Input>
      </S.inputBox>

      <S.ImgDiv marginTop="1rem">
        <img src={kakaologiniamge} alt="kakao login" />
      </S.ImgDiv>
    </Container>
  );
};

export default Login;
