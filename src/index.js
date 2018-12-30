import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// import logger from "redux-logger";
// import thunkMiddleware from "redux-thunk";
// import reducers from "./Redux/reducers";

// const middleware = [logger, thunkMiddleware];

// const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
