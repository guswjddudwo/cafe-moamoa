import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Signin from "./features/login/Signin";
import { useState } from "react";
import ProductRegisterPage from "./pages/form/ProductRegister";

function App({ onLoginSuccess }) {
  const [userName, setUserName] = useState("");

  const handleLoginSuccess = (name) => {
    setUserName(name);
  };
  return (
    <>
      <BrowserRouter>
        <Header userName={userName} />
        <Routes>
          <Route
            path="/signin"
            element={<Signin onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/" element={<Main />} />
          <Route path="form" element={<ProductRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
