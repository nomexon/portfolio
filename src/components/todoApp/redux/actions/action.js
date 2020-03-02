import {
  ADD_TASK,
  CHANGE_EDIT_STATUS,
  CHANGE_EDIT_VALUE,
  CHANGE_SHOW_FILTER,
  CHANGE_STATUS,
  DEL_TASK,
  SAVE_EDIT_VALUE,
  SEARCH_VALUE,
  START_SEARCH,
  VALUE_TASK
} from "../actionTypes/actionTypes";

export const addTask = e => {
  return {
    type: ADD_TASK
  };
};
export const changeValueTask = e => {
  let value = e.target.value;

  return {
    type: VALUE_TASK,
    value: value
  };
};
export const deleteTask = id => {
  return {
    type: DEL_TASK,
    id: id
  };
};
export const changeStatus = id => {
  return {
    type: CHANGE_STATUS,
    id: id
  };
};
export const changeEditValueTask = e => {
  let value = e.target.value;

  return {
    type: CHANGE_EDIT_VALUE,
    value: value
  };
};
export const changeEditStatus = id => {
  return {
    type: CHANGE_EDIT_STATUS,
    id: id
  };
};
export const saveEditValue = id => {
  return {
    type: SAVE_EDIT_VALUE,
    id: id
  };
};
export const changeShowFilter = filter => {
  return {
    type: CHANGE_SHOW_FILTER,
    filter
  };
};

export const searchValueChange = e => {
  let value = e.target.value;
  return {
    type: SEARCH_VALUE,
    value: value
  };
};

export const startSearch = () => {
  return {
    type: START_SEARCH
  };
};
