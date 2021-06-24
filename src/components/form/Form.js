import React, { useEffect, useState } from "react";

import s from "./form.module.scss";

import { auth } from "./fb";
import Exit from "./Exit";
import LoginInputs from "./LoginInputs";
import AboutProject from "../aboutProject/AboutProject";

const descriptToDo = [
  "Форма входа на основе стороннего API от firebase",
  "Валидация на клиенте, а также обработка ответа от сервера",
  "Работа с асинхронными запросами",
  "ЛОГИН И ПАРОЛЬ УКАЗАНЫ В ФОРМЕ",
];
const title = "Описание проекта Form:";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("Гость");

  let resetData = (userName = "") => {
    setPassword("");
    setUserName(userName);
    setEmail("");
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        resetData();
        setUserName(user.email);
      } else {
        resetData("Гость");
      }
    });
  }, []);

  return (
    <section className={s.container}>
      <AboutProject discr={descriptToDo} title={title}></AboutProject>
      <div className={s.formContainer}>
        <div className={s.header}>
          {userName === "Гость" ? <h3>Login: demo@demo.com</h3> : ""}
          {userName === "Гость" ? <h3>Pass: 1demo1</h3> : ""}
          <h3>User: {userName}</h3>
        </div>

        {userName !== "Гость" ? (
          <Exit reset={resetData} />
        ) : (
          <LoginInputs
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    </section>
  );
};

export default Form;
