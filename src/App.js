import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import UpdateProjectForm from "./compontents/Project/UpdateProjectForm";


import ProjectBoard from "./compontents/ProjectBoard/ProjectBoard";
import reducers from "./Redux/reducers";

import Header from "./compontents/Layout/Header";
import Dashboard from "./compontents/Dashboard";
import AddProjectForm from "./compontents/Project/AddProjectForm";
import AddProjectTask from "./compontents/ProjectBoard/ProjectTask/AddProjectTask";


const middleware = [logger, thunkMiddleware];
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


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
              <Route exact path="/projectBoard/:id" component={ProjectBoard} />
              <Route exact path="/projectBoard/:id/add" component={AddProjectTask} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
