import React from "react";

import reducer from "./redux/reducer/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import s from "./App.module.scss";

import MainContainer from "./components/main/MainContainer";
import FooterContainer from "./components/footer/FooterContainer";
import NavContainer from "./components/nav/NavContainer";

import AboutProject from "../aboutProject/AboutProject";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

const descriptToDo = [
  "redux для хваниеня данных",
  "Localstorage, для хранения и загрузки данных",
  "Фильтр по ToDo",
  "Добавление, удаение, редактирование отдельных заданий",
  "Фильтр по готовым и не завершенным делам",
];

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <section className={s.todoApp}>
        <div className={s.aboutForm}>
          <AboutProject
            discr={descriptToDo}
            title={"Описание проекта ToDo"}
          ></AboutProject>
        </div>
        <NavContainer />
        <MainContainer />
        <FooterContainer />
      </section>
    </Provider>
  );
};

export default ToDoApp;
