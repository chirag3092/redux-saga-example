import { TODO_GET_LIST_LOADING_STATE, TODO_GET_LIST_DATA_STATE } from './todo.actionTypes';
import { TodoState } from './todo.types.d';

const initialState: TodoState = {
  loading: false,
  data: [],
};
const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case TODO_GET_LIST_LOADING_STATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case TODO_GET_LIST_DATA_STATE: {
      return {
        ...state,
        loading: false,
        data: [
          {
            id: 1,
            name: 'To-do1',
          },
          {
            id: 2,
            name: 'To-do2',
          },
          {
            id: 3,
            name: 'To-do3',
          },
          {
            id: 4,
            name: 'To-do4',
          },
        ],
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
