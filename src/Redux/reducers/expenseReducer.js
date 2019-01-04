import { FETCH_EXPENSE_SUCCESS, FETCH_EXPENSE_FAILED, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILED, UPDATE_EXPENSE_SUCCESS, UPDATE_EXPENSE_FAILED } from "../actions/expenseActions";


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_EXPENSE_SUCCESS:
      return action.payload;
    case FETCH_EXPENSE_FAILED:
      return action.payload;
    case ADD_EXPENSE_SUCCESS:
      return [...state, action.payload];
    case ADD_EXPENSE_FAILED:
      return state;
    case DELETE_EXPENSE_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case DELETE_EXPENSE_FAILED:
      return action.payload;
    case UPDATE_EXPENSE_SUCCESS:
      return [...state, action.payload];
    case UPDATE_EXPENSE_FAILED:
      return action.payload;
    default:
      return state;
  }
}