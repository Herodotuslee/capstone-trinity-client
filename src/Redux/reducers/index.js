// // import { combineReducers } from "redux"
// // import errorReducer from "./errorReducer";


// // export default combineReducers({ errors: errorReducer })


// import { combineReducers } from "redux";
// import projectReducer from "./projectReducer";

// const rootReducer = combineReducers({
//   project: projectReducer
// });

// export default rootReducer;

import { combineReducers } from "redux";
// import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  projects: projectReducer
});