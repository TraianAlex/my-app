import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import 'font-awesome/css/font-awesome.css';

const TodoLocalList = ({ setIsEdit }) => {
  const { todos, updateTodo, deleteTodo } = useLocalStorage();

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

  const lineThrough = (completed) =>
    completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

  return (
    <>
      {!loading &&
        todos &&
        todos.reverse().map((todo) => (
          <div
            key={todo.id}
            className="d-flex flex-row justify-content-between align-items-center mb-3 pt-2 pr-3 pb-2 pl-3 rounded todo-item"
          >
            <span
              style={lineThrough(todo.completed)}
              onClick={() => onSetCompleted(todo.id)}
            >
              {todo.title}
            </span>
            <span className="d-inline-flex">
              <i
                className="edit-todo pr-2 pl-2 fa fa-edit"
                onClick={() => onUpdate(todo.id)}
              ></i>
              <i
                className="edit-todo pr-2 pl-2 fa fa-trash"
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </span>
          </div>
        ))}
    </>
  );
};

export default TodoLocalList;
