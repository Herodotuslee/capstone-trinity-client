
import axios from "axios";

export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILED = "ADD_EXPENSE_FAILED";
export const FETCH_EXPENSE_SUCCESS = "FETCH_EXPENSE_SUCCES";
export const FETCH_EXPENSE_FAILED = "FETCH_EXPENSE_FAILED";
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

export const createProject = expense => dispatch => {
  console.log(expense);
  return axios
    .post("http://localhost:8080/api/project", expense)
    .then(response => {
      dispatch({
        type: ADD_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_EXPENSE_FAILED,
        payload: err
      })
    );
};


export const fetchProjects = () => dispatch => {
  axios
    .get("http://localhost:8080/api/project/all")
    .then(response => {
      return dispatch({
        type: FETCH_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_EXPENSE_FAILED, payload: err }));
};