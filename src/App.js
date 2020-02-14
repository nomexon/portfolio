import React from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/welcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;
