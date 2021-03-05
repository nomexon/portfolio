import React from "react";

import s from "./App.module.scss";

import MainContainer from "./components/main/MainContainer";
import FooterContainer from "./components/footer/FooterContainer";
import NavContainer from "./components/nav/NavContainer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={s.todoApp}>
      <NavContainer />
      <MainContainer />

      <FooterContainer />

      <Link to="/">BACK</Link>
    </div>
  );
}

export default App;
