import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux/reducers";


import Header from "./compontents/Layout/Header";
import Dashboard from "./compontents/Dashboard";
import AddProjectForm from "./compontents/Project/AddProjectForm";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import UpdateProjectForm from "./compontents/Project/UpdateProjectForm";
const middleware = [logger, thunkMiddleware];
const store = createStore(reducers, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/project/add" component={AddProjectForm} />
              <Route exact path="/project/update/:id" component={UpdateProjectForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
