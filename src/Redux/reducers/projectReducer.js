import { GET_PROJECT, DELETE_PROJECT, FETCH_PROJECTS_SUCCESS, ADD_PROJECT_SUCCESS } from "../actions/types";



const initialState = {
  projects: [],
  project: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.projectIdentifier !== action.payload
        )
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
}