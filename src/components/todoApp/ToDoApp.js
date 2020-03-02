import React from "react";

import App from "./App";
import reducer from "./redux/reducer/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ToDoApp;
