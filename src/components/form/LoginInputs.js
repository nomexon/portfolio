import React, { useState } from "react";
import s from "./form.module.scss";
import sending from "./sending";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
  let defStyle = [s.formControl];
  let errStyle = [s.formControl + ` ` + s.error];
  let [errEmail, setErrEmail] = useState("");
  let [errPass, setErrPass] = useState("");
  return (
    <form
      action=""
      className={s.form}
      onSubmit={(e) => sending(e, email, password, setErrEmail, setErrPass)}
    >
      <div className={errEmail === "" ? defStyle : errStyle}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <i className="fas fa-check-circle" />
        <i className="fas fa-exclamation-circle" />
        <small>{errEmail}</small>
      </div>
      <div className={errPass === "" ? defStyle : errStyle}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className="fas fa-check-circle" />
        <i className="fas fa-exclamation-circle" />
        <small>{errPass}</small>
      </div>
      <button className={s.btn}>Submit</button>
    </form>
  );
};

export default LoginInputs;
