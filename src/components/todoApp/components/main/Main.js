import React from "react";
import s from "./Main.module.scss";

import EditMode from "./EditMode";
import NormalMode from "./NormalMode";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_DONE
} from "../../redux/actionTypes/actionTypes";

const Main = ({
  tasks,
  editText,
  deleteTask,
  changeStatus,
  changeEditStatus,
  changeEditValueTask,
  saveEditValue,
  editMode,
  showFilter,
  searchValue
}) => {
  let renderArr;
  if (searchValue) {
    let afterSearch = tasks.filter(item => {
      return item.text.indexOf(searchValue) !== -1;
    });
    renderArr = afterSearch;
  } else {
    let afterFilterArr = tasks.filter(item => {
      if (showFilter === SHOW_ALL) {
        return item;
      } else if (showFilter === SHOW_DONE) {
        return item.active === false;
      } else if (showFilter === SHOW_ACTIVE) {
        return item.active === true;
      }
      return item;
    });
    renderArr = afterFilterArr;
  }

  return (
    <main className={s.todo__items}>
      {renderArr.map(item => {
        return (
          <div className={s.todo__item} key={item.id}>
            {item.edit ? (
              <EditMode
                text={editText}
                changeEditValueTask={changeEditValueTask}
                saveEditValue={saveEditValue}
                id={item.id}
              />
            ) : (
              <NormalMode
                item={item}
                deleteTask={deleteTask}
                changeStatus={changeStatus}
                changeEditStatus={changeEditStatus}
                editMode={editMode}
              />
            )}
          </div>
        );
      })}
    </main>
  );
};

export default Main;
