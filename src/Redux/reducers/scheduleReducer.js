import { FETCH_SCHEDULE_SUCCESS, FETCH_SCHEDULE_FAILED, ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILED, DELETE_SCHEDULE_SUCCESS, DELETE_SCHEDULE_FAILED, UPDATE_SCHEDULE_SUCCESS, UPDATE_SCHEDULE_FAILED } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SCHEDULE_SUCCESS:
      return action.payload;
    case FETCH_SCHEDULE_FAILED:
      return action.payload;
    case ADD_SCHEDULE_SUCCESS:
      return [...state, action.payload];
    case ADD_SCHEDULE_FAILED:
      return state;
    case DELETE_SCHEDULE_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case DELETE_SCHEDULE_FAILED:
      return action.payload;
    case UPDATE_SCHEDULE_SUCCESS:
      return [...state, action.payload];
    case UPDATE_SCHEDULE_FAILED:
      return action.payload;
    default:
      return state;
  }
}