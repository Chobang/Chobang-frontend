import React from "react";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import * as S from "./Signup.style";
import Button from "../components/ui/Button";
import useZipCode from "../hooks/useZipcode";
import { Link } from "react-router-dom";

const Signup = () => {
  const [address, zipCode, openZipCode] = useZipCode();

  return (
    <>
      <Container flexdirection="column" width="460px">
        <S.ImgDiv>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDCoa7Pq_xlrWor5yPw75F0JVGWNJuckKwya5glzWAgDnuVp7bmCpjzR5pu_L4PvBuw&usqp=CAU"
              alt="logo"
            />
          </Link>
        </S.ImgDiv>
        <S.DivFlex>
          <S.Label>이메일</S.Label>
          <Input placeholder="이메일입력해주세요"></Input>
          <Button width="100px" marginleft="10px">
            중복확인
          </Button>
        </S.DivFlex>
        <S.WarningMessage>
          *비밀번호를 찾을떄 필요합니다 정확한 이메일을 입력해주세요 :D
        </S.WarningMessage>
        <S.DivFlex>
          <S.Label>주소</S.Label>
          <Input placeholder="우편번호" value={zipCode}></Input>
          <Button width="100px" marginleft="10px" onClick={openZipCode}>
            우편번호찾기
          </Button>
        </S.DivFlex>
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <Input
            placeholder="주소를 입력해주세요"
            width="calc(100% - 100px)"
            value={address.toString()}
          ></Input>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <Input
            placeholder="상세주소를 입력해주세요"
            width="calc(100% - 100px)"
          ></Input>
        </div>
        <S.DivFlex>
          <S.Label>전화번호</S.Label>
          <Input
            placeholder="전화번호입력해주세요"
            width="calc(100% - 100px)"
          ></Input>
        </S.DivFlex>
        <S.DivFlex>
          <S.Label>비밀번호</S.Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            width="calc(100% - 100px)"
          ></Input>
        </S.DivFlex>
        <S.WarningMessage>
          *8자이상 영문,숫자,특수문자 포함되어야합니다 :D
        </S.WarningMessage>
        <S.DivFlex>
          <S.Label>비밀번호확인</S.Label>
          <Input
            type="password"
            placeholder="비밀번호를 한번더 입력해주세요"
            width="calc(100% - 100px)"
          ></Input>
        </S.DivFlex>
        <S.WarningMessage>
          *8자이상 영문,숫자,특수문자 포함되어야합니다 :D
        </S.WarningMessage>
        <Button>회원가입 하기</Button>
      </Container>
    </>
  );
};

export default Signup;
