import {
  ADD_TASK,
  CHANGE_EDIT_STATUS,
  CHANGE_EDIT_VALUE,
  CHANGE_SHOW_FILTER,
  CHANGE_STATUS,
  DEL_TASK,
  SAVE_EDIT_VALUE,
  SEARCH_VALUE,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_DONE,
  START_SEARCH,
  VALUE_TASK
} from "../actionTypes/actionTypes";

let ini = {
  id: 3,
  showFilter: SHOW_ALL,
  searchValue: "",
  tasks: [
    { id: 1, text: "text todo", active: true, edit: false },
    { id: 2, text: "text22222 todo", active: true, edit: false }
  ],

  valueTask: "",
  editValueTask: "",
  editMode: false
};

export default function tasks(state = ini, action) {
  switch (action.type) {
    case VALUE_TASK:
      return { ...state, valueTask: action.value };
    case CHANGE_SHOW_FILTER:
      let newFilter;

      if (action.filter === SHOW_DONE) {
        newFilter = SHOW_DONE;
      } else if (action.filter === SHOW_ACTIVE) {
        newFilter = SHOW_ACTIVE;
      } else if (action.filter === SHOW_ALL) {
        newFilter = SHOW_ALL;
      }
      return { ...state, showFilter: newFilter };
    case ADD_TASK:
      let newTask = {
        id: state.id,
        text: state.valueTask,
        active: true,
        edit: false
      };
      let newId = state.id + 1;
      let newTasks = [...state.tasks];
      newTasks.push(newTask);
      return { ...state, id: newId, tasks: newTasks, valueTask: "" };
    case DEL_TASK:
      let newTasksFiltered = [
        ...state.tasks.filter(item => {
          return item.id !== action.id;
        })
      ];
      return { ...state, tasks: newTasksFiltered };
    case CHANGE_STATUS:
      let after = [
        ...state.tasks.map(item => {
          if (item.id === action.id) {
            item.active = !item.active;
          }
          return item;
        })
      ];

      return { ...state, tasks: after };
    case CHANGE_EDIT_STATUS: //изменяет статус для редактирования и добавляет текст для редактирования
      let oldValueTask = "";
      let EditStatusChanged = [
        ...state.tasks.map(item => {
          if (item.id === action.id) {
            item.edit = true;

            oldValueTask = item.text;
          }
          return item;
        })
      ];

      return {
        ...state,
        tasks: EditStatusChanged,
        editValueTask: oldValueTask,
        editMode: true
      };
    case CHANGE_EDIT_VALUE:
      return { ...state, editValueTask: action.value };
    case SAVE_EDIT_VALUE:
      let savedValue = [
        ...state.tasks.map(item => {
          if (item.id === action.id) {
            item.text = state.editValueTask;
            item.edit = false;
          }
          return item;
        })
      ];

      return {
        ...state,
        editValueTask: "",
        tasks: savedValue,
        editMode: false
      };
    case SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case START_SEARCH:
      console.log("start");
      return { ...state };
    default:
      return state;
  }
}
