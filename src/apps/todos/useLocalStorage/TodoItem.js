import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const TodoItem = ({ todo, onSetCompleted, onUpdate }) => {
  const { deleteTodo } = useLocalStorage();

  const lineThrough = (completed) =>
    completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center mb-3 pt-2 pr-3 pb-2 pl-3 rounded todo-item"
      data-testid="todo-item"
    >
      <span
        style={lineThrough(todo.completed)}
        onClick={() => onSetCompleted(todo.id)}
        data-testid="todo-text"
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
          data-testid="delete-button"
        ></i>
      </span>
    </div>
  );
};
