import React, { useState } from "react";

import { Button } from "antd";
import s from "./aboutProject.module.scss";

export default function AboutProject({ discr, title }) {
  const [isOpen, setisOpen] = useState(false);
  const [cssClose, setcssClose] = useState(s.aboutProjectClose);

  return (
    <div className={s.aboutProject}>
      <h2
        onClick={() => {
          if (isOpen) {
            setcssClose(s.aboutProjectClose);
          } else {
            setcssClose(s.aboutProjectOpen);
          }
          setisOpen(!isOpen);
        }}
      >
        {title} <Button>{isOpen === true ? "Закрыть" : "Открыть"}</Button>
      </h2>
      <ul className={cssClose}>
        {discr.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
