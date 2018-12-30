
import axios from "axios";

export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILED = "ADD_PROJECT_FAILED";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILED = "FETCH_PROJECT_FAILED";
export const UPDATE_EXPENSE_SUCCESS = "UPDATE_EXPENSE_SUCCESS";
export const UPDATE_EXPENSE_FAILED = "UPDATE_EXPENSE_FAILED";
export const GET_PROJECT = "GET_PROJECT"
// export const createProject = (project, history) => async dispatch => {
//   try {
//     const res = await axios.post("http://localhost:8080/api/project", project);
//     history.push("/dashboard");
//   } catch (err) {
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     });
//   }
// };

export const createProject = project => dispatch => {

  return axios
    .post("http://localhost:8080/api/project", project)
    .then(response => {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_PROJECT_FAILED,
        payload: err
      })
    );
};


export const fetchProjects = () => dispatch => {
  axios
    .get("http://localhost:8080/api/project/all")
    .then(response => {
      return dispatch({
        type: FETCH_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_PROJECT_FAILED, payload: err }));
};


export const updateProject = (expense, id) => dispatch => {
  return axios
    .patch(`http://localhost:8080/project/up`, expense)
    .then(response => {
      dispatch({
        type: UPDATE_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: UPDATE_EXPENSE_FAILED,
        payload: err
      })
    );
};


export const getProject = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/api/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data
  });
};