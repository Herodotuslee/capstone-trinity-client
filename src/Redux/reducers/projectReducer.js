import { ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED } from "../actions/projectActions";




export default function (state = [], action) {
  switch (action.type) {

    case ADD_EXPENSE_SUCCESS:
      return [...state, action.payload];
    case ADD_EXPENSE_FAILED:
      return state;

    default:
      return state;
  }
}