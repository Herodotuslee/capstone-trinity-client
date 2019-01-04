
import { combineReducers } from "redux";
// import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";
import expenseReducer from "./expenseReducer";

export default combineReducers({

  expense: expenseReducer,
  project: projectReducer,
  backlog: backlogReducer
});