import { ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED, FETCH_EXPENSE_SUCCESS, FETCH_EXPENSE_FAILED } from "../actions/projectActions";

export default function (state = [], action) {
  switch (action.type) {

    case ADD_EXPENSE_SUCCESS:
      return [...state, action.payload];
    case ADD_EXPENSE_FAILED:
      return state;
    case FETCH_EXPENSE_SUCCESS:
      return action.payload;
    case FETCH_EXPENSE_FAILED:
      return action.payload;

    default:
      return state;
  }
}