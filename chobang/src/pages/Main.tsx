import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>메인페이지임</div>

      <div>
        <Link to="/login">로그인하기</Link>
      </div>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </>
  );
};

export default Main;
