import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap CSS 추가
import "react-toastify/dist/ReactToastify.min.css"; // ReactToastify CSS 추가

const GlobalStyle = createGlobalStyle`
/* 글로벌(공통) 스타일 */
body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
