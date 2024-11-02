import { colors } from "ions";
import Styled, { styled } from "styled-components";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Wrapper = styled.div`
  width: 100%;
  height: 313px;
  background-color: #111111;
  margin-top: 120px;
`;

const Text = styled.span`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
`;
function Footer() {
  return (
    <div>
      <Wrapper>
        <Text>CAFE MOAMOA</Text>
        <BiLogoInstagramAlt size="2rem" color="#ffff" />
      </Wrapper>
    </div>
  );
}

export default Footer;
