import React from "react";
import Container from "../../components/ui/Container";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <>
      <div>
        <div>이미지</div>
        {/* 로그인전 */}

        {!isLogined ? (
          <div>로그인버튼</div>
        ) : (
          <>
            {/* 로그인후 */}
            <div>마이페이지</div>
            <div>로그아웃버튼</div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
