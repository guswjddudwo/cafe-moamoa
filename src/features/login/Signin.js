import styled from "styled-components";
import KakaoSigin from "./KakaoSigin";
import NaverSigin from "./NaverSigin";
import { useNavigate } from "react-router-dom";

const SingInWrapper = styled.div`
  width: 426px;
  height: 354px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid #e9ecef;
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

const Signup = styled.a`
  display: block;
  font-size: 1rem;
  margin-top: 10%;
  cursor: pointer;
`;

function Signin({ onLoginSuccess }) {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <SingInWrapper>
      <Container>
        <LoginIntro>CAFE MOAMOA</LoginIntro>
        <KakaoSigin onLoginSuccess={onLoginSuccess} />
        <NaverSigin onLoginSuccess={onLoginSuccess} />
        <Signup onClick={handleSignupClick}>3초만에 가입하기</Signup>
      </Container>
    </SingInWrapper>
  );
}

export default Signin;
