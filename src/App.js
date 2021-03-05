import React from "react";

import s from "./app.module.scss";
import { Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/welcomePage/WelcomePage";
import ToDoApp from "./components/todoApp/ToDoApp";
import Form from "./components/form/Form";

function NoMatch() {
  return (
    <div className={s.non}>
      <h3>404</h3>
      <Link to="/">BACK</Link>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/todoredux">
        <ToDoApp />
      </Route>

      <Route exact path="/form">
        <Form />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
