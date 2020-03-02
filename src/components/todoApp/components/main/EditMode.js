import React from "react";
import { Button } from "antd";
import s from "./Main.module.scss";
import Input from "antd/lib/input";
const EditMode = ({ id, text, changeEditValueTask, saveEditValue }) => {
  return (
    <div className={`${s.todo__item}  + ${s.editmode}`}>
      <Input
        type="text"
        value={text}
        className={s.edit__input}
        onChange={changeEditValueTask}
      />
      <Button onClick={() => saveEditValue(id)}>Save</Button>
    </div>
  );
};

export default EditMode;
