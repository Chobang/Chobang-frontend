import { useRef } from "react";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import * as S from "./Login.style";
import kakaologiniamge from "../assets/kakao_login_large_wide.png";
import LoginHead from "../components/login/LoginHead";
import Button from "../components/ui/Button";
import useEmailValidationCheck from "../hooks/useValidationCheck";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const LoginHandler = () => {
    const email = emailRef.current?.value;
    useEmailValidationCheck(email);
  };

  return (
    <Container width="500px" flexdirection="column">
      <LoginHead />
      <S.inputBox>
        <label>이메일</label>
        <Input
          inputRef={emailRef}
          placeholder="이메일을 입력해주세요"
          width={"100%"}
        ></Input>
      </S.inputBox>
      <S.inputBox>
        <label>비밀번호</label>

        <Input
          inputRef={passwordRef}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          width={"100%"}
        ></Input>
      </S.inputBox>
      <div style={{ marginTop: "1rem" }}>
        <Button width="100%" onClick={LoginHandler}>
          로그인하기
        </Button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Link to="signup">
          <Button width="100%">회원가입하기</Button>
        </Link>
      </div>
      <S.ImgDiv margintop="2rem">
        <img src={kakaologiniamge} alt="kakao login" />
      </S.ImgDiv>
    </Container>
  );
};

export default Login;
