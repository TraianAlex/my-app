import React, { useEffect } from 'react';
import { useFakeApi } from './useFakeApi';
import 'font-awesome/css/font-awesome.css';

const TodoList = () => {
  const { getTodos, todos, loading, onUpdateTodo, deleteTodo } = useFakeApi();
  // @ts-ignore
  useEffect(getTodos, []);

  return (
    <>
      {!loading &&
        todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="d-flex flex-row justify-content-between align-items-center mb-3 pt-2 pr-3 pb-0 pl-3 rounded todo-item"
          >
            <p>{todo.title}</p>
            <span className="d-inline-flex">
              <i
                className="edit-todo pr-2 pl-2 fa fa-edit"
                onClick={() => onUpdateTodo(todo)}
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

export default TodoList;
