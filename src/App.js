import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./Redux/reducers";



import Header from "./components/Layout/Header";

import ProjectDashboard from "./components/ProjectDashboard";
import UpdateProjectForm from "./components/Project/UpdateProjectForm";
import AddProjectForm from "./components/Project/AddProjectForm";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTask/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTask/UpdateProjectTask";
import ProjectOverview from "./components/Project/ProjectOverview";

import MyCalender from "./components/MyCalender";

import ExpenseDashboard from "./components/Expense/ExpenseDashboard";

import ExpenseAll from "./components/Expense/ExpenseAll";
import AddExpenseForm from "./components/Expense/AddExpenseForm";
import YearChart from "./components/Expense/YearChart";

import Info from "./components/Introduction/Info";

import Login from "./components/Auth/login";
import SignIn from "./components/Auth/signin";
import SearchDatePage from "./components/Expense/SearchDatePage";
import MediaPlayer from "./components/MediaPlayer";



const middleware = [logger, thunkMiddleware];
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={ProjectDashboard} />
              <Route exact path="/dashboard" component={ProjectDashboard} />
              <Route exact path="/project/add" component={AddProjectForm} />
              <Route exact path="/project/overview" component={ProjectOverview} />
              <Route exact path="/project/update/:id" component={UpdateProjectForm} />

              <Route exact path="/projectBoard/:id" component={ProjectBoard} />
              <Route exact path="/projectBoard/:id/add" component={AddProjectTask} />
              <Route exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask} />

              <Route exact path="/expenseDashboard/" component={ExpenseDashboard} />
              <Route exact path="/expenseAll" component={ExpenseAll} />
              <Route exact path="/expense/add" component={AddExpenseForm} />
              <Route exact path="/expense/year" component={YearChart} />
              <Route exact path="/expense/search" component={SearchDatePage} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/myCalendar" component={MyCalender} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/music" component={MediaPlayer} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
