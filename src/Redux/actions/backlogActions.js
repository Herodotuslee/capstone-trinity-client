import axios from "axios";

import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
} from "./types";



// export const addProjectTask = (
//   backlog_id,
//   project_task,
//   history
// ) => async dispatch => {
//   await axios.post(`/api/backlog/${backlog_id}`, project_task);
//   history.push(`/projectBoard/${backlog_id}`);
// };


export const addProjectTask = (backlog_id, project_task) => dispatch => {
  return axios
    .post(`http://localhost:8080/api/backlog/${backlog_id}`, project_task)
    .then(response => {
      console.log('response', response.data)
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_TASK_FAILED,
        payload: err.response.data
      })
    );
};

export const getBacklog = backlog_id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};