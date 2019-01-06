import { GET_BACKLOG, GET_PROJECT_TASK, DELETE_TASK_SUCCESS, FETCH_ALLPROJECT_TASKS_SUCCESS, DELETE_TASK_BYID_SUCCESS, ADD_TASK_SUCCESS_BUTTON, ADD_TASK_FAILED_BUTTON, ADD_TASK_SUCCESS } from "../actions/types";

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
    case ADD_TASK_SUCCESS_BUTTON:
      return {
        ...state,
        project_tasks: state.project_tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        })
      }
    case DELETE_TASK_SUCCESS:
      console.log('state', state)
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          item => item.id !== action.payload
        )
      };
    case DELETE_TASK_BYID_SUCCESS:
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
    case ADD_TASK_SUCCESS:
      return { ...state };
    case ADD_TASK_FAILED_BUTTON:
      return [...state, action.payload];
    default:
      return state;
  }
}