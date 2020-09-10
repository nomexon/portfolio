import React from "react";

import s from "./App.module.scss";
import { Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/welcomePage/WelcomePage";
import ToDoApp from "./components/todoApp/ToDoApp";
import Form from "./components/form/Form";

function NoMatch() {
  return (
    <div className={s.non}>
      <h3>404</h3>
      <Link to="/portfolio">BACK</Link>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route exact path="/portfolio">
        <WelcomePage />
      </Route>
      <Route exact path="/portfolio/todoredux">
        <ToDoApp />
      </Route>

      <Route exact path="/portfolio/form">
        <Form />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
