import React from "react";
import styled from "styled-components";
import { GoPerson } from "react-icons/go";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #111111;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 0 41px;
  padding: 2px 5px;
  text-decoration: none;
  color: #111111;
  font-size: 1.2em;
  display: inline-block;

  &:hover {
    background-color: #f4f6fa;
    border-radius: 15%;
  }
`;

const userNameDisplay = styled.span`
  font-size: 1rem;
  color: #111111;
  font-weight: bold;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

function Header({ userName }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/signin");
  };
  return (
    <HeaderWrapper>
      <Logo onClick={handleLogoClick}>CAFE MOAMOA</Logo>
      <Nav>
        <NavLink href="#coffee">Coffee</NavLink> {/*라우터나 아울렛 사용 */}
        <NavLink href="#mood">Mood</NavLink>
        <NavLink href="#dessert">Dessert</NavLink>
      </Nav>
      <Icons>
        {userName ? (
          <userNameDisplay>{userName}님</userNameDisplay>
        ) : (
          <GoPerson size="2rem" onClick={handleLoginClick} />
        )}
        <PiMagnifyingGlass size="2rem" />
      </Icons>
    </HeaderWrapper>
  );
}

export default Header;
