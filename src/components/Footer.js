import { colors } from "ions";
import Styled, { styled } from "styled-components";
import { SiInstagram } from "react-icons/si";

const Wrapper = styled.div`
  width: 100%;
  height: 313px;
  background-color: #111111;
  margin-top: 120px;
`;

const Text = styled.span`
  color: #fff;
`;
function Footer() {
  return (
    <div>
      <Wrapper>
        <Text>CAFE MOAMOA</Text>
        <SiInstagram size="2rem" color="#ffff" />
      </Wrapper>
    </div>
  );
}

export default Footer;
