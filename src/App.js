import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Review from "./pages/Review";
import Footer from "./components/Footer";
const GlobalStyle = createGlobalStyle`
  ${reset}

/* 글로벌(공통) 스타일 */
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Main />
      <Review />
      <Footer />
    </>
  );
}

export default App;
