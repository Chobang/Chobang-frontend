const useEmailValidationCheck = (data: string | undefined) => {
  if (data) {
    const email: string = data.trim();
    if (email.includes("@")) {
      console.log("우효 ㅋㅋ @ ㅋ있쥬 ");
      if (email.split(".")[1]) {
        console.log(email.split(".")[0]);
        console.log(email.split(".")[1]);
      }
    }
  } else {
    console.log("data가 undefined입니다.");
  }
};

export default useEmailValidationCheck;
