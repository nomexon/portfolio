import { combineReducers } from "redux";

import tasks from "./reducerTasks";

const reducerApp = combineReducers({
  tasks
});

export default reducerApp;
