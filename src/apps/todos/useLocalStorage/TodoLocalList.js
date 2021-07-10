import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import 'font-awesome/css/font-awesome.css';
import { TodoItem } from './TodoItem';

const TodoLocalList = ({ setIsEdit }) => {
  const { todos, updateTodo } = useLocalStorage();

  const loading = false;
  const onUpdate = (id) => setIsEdit(id);

  const onSetCompleted = (id) => {
    const { title, completed } = todos.find((todo) => todo.id === id);
    const completedTodo = {
      id,
      title,
      completed: !completed,
    };
    updateTodo(id, completedTodo);
  };

  return (
    <>
      {!loading &&
        todos &&
        todos
          .reverse()
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onSetCompleted={onSetCompleted}
              onUpdate={onUpdate}
            />
          ))}
    </>
  );
};

export default TodoLocalList;
