import {
  SET_TODO_TITLE,
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  CLEAR_TODO_TITLE,
} from './Types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    case SET_TODO_TITLE:
      return {
        ...state,
        title: payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    case CLEAR_TODO_TITLE:
      return {
        ...state,
        title: '',
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
