
import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";
import expenseReducer from "./expenseReducer";
import scheduleReducer from "./scheduleReducer";

export default combineReducers({

  expense: expenseReducer,
  project: projectReducer,
  backlog: backlogReducer,
  schedule:scheduleReducer
});