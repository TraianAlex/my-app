import React, { useMemo } from 'react';
import { useLocalStorageState } from 'common/utils/use-local-stotage';
import TodoLocalContext from '../Context';

const TodoLocalState = ({ children }) => {
  // @ts-ignore
  const [state, setState] = useLocalStorageState('todos', []);

  const value = useMemo(() => [state, setState], [setState, state]);

  return <TodoLocalContext.Provider value={value}>{children}</TodoLocalContext.Provider>;
};

export default TodoLocalState;
