import styled from "styled-components";
import { SiNaver } from "react-icons/si";

const Naver = styled.button`
  width: 328px;
  height: 48px;
  margin-top: 10px;
  background-color: #2db400;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const Icon = styled(SiNaver)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  color: #fff;
`;

const NaverSigin = () => {
  const NAVER_CLIENT_ID = process.env.sRYSb9UGO4bLbAE4CFAQ; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000/"; // Callback URL
  const STATE = "flase";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <Naver onClick={NaverLogin}>
      <Icon />
      네이버로 계속하기
    </Naver>
  );
};

export default NaverSigin;
