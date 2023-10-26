import { useState } from "react";

const useZipCode = () => {
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const a = new window.daum.Postcode({
    oncomplete: function (data) {
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        const addr: string = data.roadAddress;
        setAddress(addr);
        setZipCode(data.zonecode);
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        const addr: string = data.jibunAddress;
        setAddress(addr);
        setZipCode(data.zonecode);
      }
    },
  });

  const openZipCode = () => {
    a.open();
  };

  return [address, zipCode, openZipCode];
};

export default useZipCode;
