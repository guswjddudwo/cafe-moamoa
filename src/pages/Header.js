import React from "react";
import styled from "styled-components";

function Header() {
  const HeadertWrapper = styled.span`
    color: #111111;
  `;
  return (
    <HeadertWrapper>
      <div>
        <span>카페모아모아</span>
        <span>카페</span>
        <span>무드</span>
        <span>디저트</span>
        <span>로그인</span>
        <span>검색</span>
      </div>
    </HeadertWrapper>
  );
}

export default Header;
