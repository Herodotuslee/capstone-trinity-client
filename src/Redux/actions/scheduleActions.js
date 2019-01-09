import axios from "axios";

import {
  FETCH_SCHEDULE_SUCCESS, ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILED, DELETE_SCHEDULE_SUCCESS, DELETE_SCHEDULE_FAILED, UPDATE_SCHEDULE_SUCCESS, UPDATE_SCHEDULE_FAILED, FETCH_SCHEDULE_FAILED,
} from "./types";


export const fetchSchedule = () => dispatch => {
  axios
    .get("http://localhost:8080/api/schedule/all")
    .then(response => {
      return dispatch({
        type: FETCH_SCHEDULE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_SCHEDULE_FAILED, payload: err }));
};

export const deleteSchedule = id => dispatch => {
  axios
    .delete(`http://localhost:8080/api/schedule/${id}`)
    .then(response => dispatch({ type: DELETE_SCHEDULE_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_SCHEDULE_FAILED, payload: err }));
};

export const addSchedule = expense => dispatch => {
  console.log(expense);
  return axios
    .post("http://localhost:8080/api/schedule", expense)
    .then(response => {
      dispatch({
        type: ADD_SCHEDULE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_SCHEDULE_FAILED,
        payload: err
      })
    );
};

// export const updateSchedule = (expense, id) => dispatch => {
//   return axios
//     .patch(`http://localhost:8090/api/Schedule/edit/${id}`, expense)
//     .then(response => {
//       dispatch({
//         type: UPDATE_SCHEDULE_SUCCESS,
//         payload: response.data
//       });
//     })
//     .catch(err =>
//       dispatch({
//         type: UPDATE_SCHEDULE_FAILED,
//         payload: err
//       })
//     );
// };