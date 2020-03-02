import React from "react";
import s from "./Main.module.scss";
import { Button } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined
} from "@ant-design/icons";

const NormalMode = ({
  editMode,
  item,
  changeStatus,
  deleteTask,
  changeEditStatus
}) => {
  return (
    <div className={s.todo__item}>
      <div className={s.todo__text}>{item.text}</div>
      <div className={s.todo__item__btns}>
        {item.active ? (
          <Button
            type="primary"
            className={s.btn_marginRight}
            onClick={() => changeStatus(item.id)}
            disabled={editMode}
            icon={<CheckSquareOutlined />}
          />
        ) : (
          ""
        )}
        <Button
          type="primary"
          className={s.btn_marginRight}
          onClick={() => changeEditStatus(item.id)}
          disabled={editMode || !item.active}
          icon={<EditOutlined />}
        />

        <Button
          type="danger"
          disabled={editMode}
          onClick={() => deleteTask(item.id)}
          icon={<DeleteOutlined />}
        />
      </div>
    </div>
  );
};

export default NormalMode;
