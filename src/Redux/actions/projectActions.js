
import axios from "axios";
import { GET_PROJECT, DELETE_PROJECT, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILED, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILED, FETCH_PROJECT_FAILED } from "./types";



export const createProject = project => dispatch => {

  return axios
    .post("http://localhost:8080/api/project", project)
    .then(response => {
      console.log('response', response.data)
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_PROJECT_FAILED,
        payload: err.response.data
      })
    );
};

export const fetchProjects = () => dispatch => {
  axios
    .get("http://localhost:8080/api/project/all")
    .then(response => {
      return dispatch({
        type: FETCH_PROJECTS_SUCCESS,
        payload: response.data
      });
    }).catch(err => dispatch({ type: FETCH_PROJECTS_FAILED, payload: err }));
};


export const deleteProject = id => dispatch => {
  axios.delete(`http://localhost:8080/api/project/${id}`);
  dispatch({
    type: DELETE_PROJECT,
    payload: id
  });
};


export const getProject = (id) => dispatch => {
  axios
    .get(`http://localhost:8080/api/project/${id}`)
    .then(response => {
      return dispatch({
        type: GET_PROJECT,
        payload: response.data
      });
    }).catch(err => dispatch({ type: FETCH_PROJECT_FAILED, payload: err }));
};


