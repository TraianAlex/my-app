import { useContext } from 'react';
import TodoLocalContext from '../Context';

export const useLocalStorage = () => {
  const context = useContext(TodoLocalContext);
  if (!context) {
    throw new Error(`useLocalStorage must be used within a TodoLocalState`);
  }

  const [todos, setTodos] = context;

  const createTodo = (newTodo) => setTodos([...todos, newTodo]);

  const updateTodo = (id, newTodo) => {
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
      }
    });
    createTodo(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return {
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};
