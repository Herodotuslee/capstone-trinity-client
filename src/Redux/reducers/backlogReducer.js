import { GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK, DELETE_TASK_SUCCESS, FETCH_ALLPROJECT_TASKS_SUCCESS } from "../actions/types";

const initialState = {
  project_tasks: [],
  project_task: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        project_tasks: action.payload
      };
    case GET_PROJECT_TASK:
      return {
        ...state,
        project_task: action.payload
      };

    case DELETE_TASK_SUCCESS:
      console.log('state', state)
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          item => item.id !== action.payload
        )
      };

    case FETCH_ALLPROJECT_TASKS_SUCCESS:
      return {
        ...state,
        project_tasks: action.payload
      };
    default:
      return state;
  }
}