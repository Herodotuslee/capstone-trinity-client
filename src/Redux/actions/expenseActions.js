import axios from "axios";

import {
  FETCH_EXPENSE_SUCCESS, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILED, UPDATE_EXPENSE_SUCCESS, UPDATE_EXPENSE_FAILED, FETCH_EXPENSE_FAILED,
} from "./types";


export const fetchExpense = () => dispatch => {
  axios
    .get("http://localhost:8080/api/expense/all")
    .then(response => {
      return dispatch({
        type: FETCH_EXPENSE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: FETCH_EXPENSE_FAILED, payload: err }));
};

export const deleteExpense = id => dispatch => {
  axios
    .delete(`http://localhost:8080/api/expense/${id}`)
    .then(response => dispatch({ type: DELETE_EXPENSE_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_EXPENSE_FAILED, payload: err }));
};

export const addExpense = expense => dispatch => {
  console.log(expense);
  return axios
    .post("http://localhost:8080/api/expense", expense)
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

export const updateExpense = (expense, id) => dispatch => {
  return axios
    .patch(`http://localhost:8000/api/expense/edit/${id}`, expense)
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