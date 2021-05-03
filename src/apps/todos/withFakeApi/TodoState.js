import React, { useMemo, useReducer } from 'react';
import TodoContext from '../Context';
import TodoReducer from './TodoReducer';

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    title: '',
    loading: true,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const value = useMemo(() => [state, dispatch], [state]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoState;
