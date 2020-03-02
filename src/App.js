import React from "react";

import s from "./App.module.scss";
import { Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/welcomePage/WelcomePage";
import ToDoApp from "./components/todoApp/ToDoApp";

function NoMatch() {
  return (
    <div className={s.non}>
      <h3>404</h3>
      <Link to="/">BACK</Link>
    </div>
  );
}
function InProgress() {
  return (
    <div className={s.non}>
      <h3>not available</h3>
      <Link to="/">BACK</Link>
    </div>
  );
}
function App() {
  return (
    <Switch>
      <Route exact path="/portfolio">
        <WelcomePage />
      </Route>
      <Route path="/portfolio/todoredux">
        <ToDoApp />
      </Route>
      <Route path="/portfolio/inprogress">
        <InProgress />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
