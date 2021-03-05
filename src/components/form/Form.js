import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./form.module.scss";

import { auth } from "./fb";
import Exit from "./Exit";
import LoginInputs from "./LoginInputs";

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
    <div className={s.container}>
      <div className={s.formContainer}>
        <div className={s.header}>
          <h3>Login: demo@demo.com</h3>
          <h3>Pass: 1demo1</h3>
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

      <Link to="/">BACK</Link>
    </div>
  );
};

export default Form;
