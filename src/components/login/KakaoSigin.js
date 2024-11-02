import styled from "styled-components";
import { ImBubble } from "react-icons/im";

const Kakao = styled.button`
  width: 328px;
  height: 48px;
  margin-top: 80px;
  background-color: #fee500;
  border: none;
  border-radius: 10px;
  color: #381e1f;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
const Icon = styled(ImBubble)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;
const KakaoSigin = ({ onClick }) => {
  const handleKakaoLogin = () => {
    const REST_API_KEY = "2ac8c9294b4b1da2bfcae00edd6f2b6f";
    const REDIRECT_URI = "http://localhost:3000/signin";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Kakao onClick={handleKakaoLogin}>
        <Icon />
        카카오로 계속하기
      </Kakao>
    </>
  );
};

export default KakaoSigin;
