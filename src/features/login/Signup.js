import { useForm } from "react-hook-form";

function Signup() {
  return (
    <>
      <h2>회원가입</h2>
      <span>이메일</span>
      <input value="email" placeholder="이메일" />
      <button>이메일 인증하기</button>

      <span>비밀번호</span>
      <input value="password" placeholder="비밀번호" />

      <span>비밀번호 확인</span>
      <input value="password" placeholder="비밀번호 확인" />

      <span>닉네임</span>
      <input value="text" placeholder="별명(2~20자)" />

      <button>회원가입하기</button>
    </>
  );
}

export default Signup;
