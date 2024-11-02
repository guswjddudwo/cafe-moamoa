import styled from "styled-components";
import KakaoSigin from "./KakaoSigin";
import NaverSigin from "./NaverSigin";

const SingInWrapper = styled.div`
  width: 426px;
  height: 354px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid #ced4da;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

const LoginIntro = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bold;
`;

function Signin() {
  return (
    <SingInWrapper>
      <Container>
        <LoginIntro>CAFE MOAMOA</LoginIntro>
        <KakaoSigin />
        <NaverSigin />
        <span>회원가입</span>
        <span>계정찾기</span>
      </Container>
    </SingInWrapper>
  );
}

export default Signin;
