import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
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
    <div>
      {/* <GlobalStyle /> */}

      <Header />
    </div>
  );
}

export default App;
