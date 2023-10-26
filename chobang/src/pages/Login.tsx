import { useRef, useState } from "react";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import * as S from "./Login.style";
import kakaologiniamge from "../assets/kakao_login_large_wide.png";
import LoginHead from "../components/login/LoginHead";
import Button from "../components/ui/Button";

const Login = () => {
  const test = useRef<HTMLInputElement>("");
  const emailtest = () => {};
  return (
    <Container width="500px" flexDirection="column">
      <LoginHead />
      <S.inputBox>
        <label>이메일</label>

        <Input placeholder="이메일을 입력해주세요" width={"100%"}></Input>
      </S.inputBox>
      <S.inputBox>
        <label>비밀번호</label>

        <input type="text" ref={test} />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          width={"100%"}
        ></Input>
      </S.inputBox>

      <Button
        width="100%"
        onClick={() => {
          console.log(test.current?.value);
        }}
      >
        로그인하기
      </Button>
      <S.ImgDiv marginTop="1rem">
        <img src={kakaologiniamge} alt="kakao login" />
      </S.ImgDiv>
    </Container>
  );
};

export default Login;
