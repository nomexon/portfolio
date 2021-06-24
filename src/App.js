import React from "react";

// import s from "./app.module.scss";

import WelcomePage from "./components/welcomePage/WelcomePage";
import ToDoApp from "./components/todoApp/ToDoApp";
import Form from "./components/form/Form";

function App() {
  return (
    <React.Fragment>
      <WelcomePage />
      <ToDoApp />
      <Form />
    </React.Fragment>
  );
}

export default App;
