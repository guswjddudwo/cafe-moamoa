import React from "react";
import styled from "styled-components";
import { GoPerson } from "react-icons/go";
import { PiMagnifyingGlass } from "react-icons/pi";

function Header(props) {
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
  `;

  const Nav = styled.nav`
    display: flex;
    align-items: center;
  `;

  const NavLink = styled.a`
    padding: 0 41px;
    text-decoration: none;
    color: #111111;
    font-size: 1.2em;
  `;

  const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  return (
    <HeaderWrapper>
      <Logo>CAFE MOAMOA</Logo>
      <Nav>
        <NavLink href="#coffee">Coffee</NavLink> {/*라우터나 아울렛 사용 */}
        <NavLink href="#mood">Mood</NavLink>
        <NavLink href="#dessert">Dessert</NavLink>
      </Nav>
      <Icons>
        <GoPerson size="2rem" />
        <PiMagnifyingGlass size="2rem" />
      </Icons>
    </HeaderWrapper>
  );
}

export default Header;
