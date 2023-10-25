const useEmailValidationCheck = (data: string) => {
  const email: string = data.trim();

  //토스트메시지 체크

  if (email.includes("@")) {
    return 0;
  }
  return;
};

export default useEmailValidationCheck;
