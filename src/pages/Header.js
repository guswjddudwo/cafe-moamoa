import React from "react";
import styled from "styled-components";
// import { Container, Nav, Navbar } from "react-bootstrap";

function Header(props) {
  // const navigate = useNavigate();
  const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border-bottom: 1px solid #eeeeee;
  `;

  const Logo = styled.div`
    margin-left: 20px;
    font-size: 1.5em;
    font-weight: bold;
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `;

  const NavLink = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: black;
    font-size: 1em;
  `;

  const Icons = styled.div`
    display: flex;
    align-items: center;
  `;

  const Icon = styled.span`
    margin-left: 20px;
    font-size: 1.2em;
    cursor: pointer;
  `;
  return (
    <HeaderWrapper>
      <Logo>CAFE MOAMOA</Logo>
      <Nav>
        <NavLink href="#coffee">Coffee</NavLink>
        <NavLink href="#mood">Mood</NavLink>
        <NavLink href="#dessert">Dessert</NavLink>
      </Nav>
      <Icons>
        <Icon>👤</Icon>
        <Icon>🔍</Icon>
      </Icons>
    </HeaderWrapper>
  );
}

export default Header;
