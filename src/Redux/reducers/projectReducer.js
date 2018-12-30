import { ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILED, FETCH_PROJECT_SUCCESS, FETCH_PROJECT_FAILED, GET_PROJECT } from "../actions/projectActions";

export default function (state = [], action) {
  switch (action.type) {

    case ADD_PROJECT_SUCCESS:
      return [...state, action.payload];
    case ADD_PROJECT_FAILED:
      return state;
    case FETCH_PROJECT_SUCCESS:
      return action.payload;
    case FETCH_PROJECT_FAILED:
      return action.payload;
    case GET_PROJECT:
      return [
        ...state,
        action.payload
      ];


    default:
      return state;
  }
}