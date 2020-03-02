import React from "react";

import s from "./Footer.module.scss";
import { Button, Input } from "antd";

const Footer = ({ value, changeValue, addTask }) => {
  return (
    <footer className={s.newToDo}>
      <Input
        type="text"
        placeholder="new task text"
        className={s.newToDo__input}
        onChange={changeValue}
        value={value}
        onKeyDown={e => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <Button type="primary" onClick={addTask}>
        add task
      </Button>
    </footer>
  );
};

export default Footer;
