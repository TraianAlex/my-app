import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import 'font-awesome/css/font-awesome.css';

const TodoLocalList = ({ setIsEdit }) => {
  const { todos, deleteTodo } = useLocalStorage();
  const loading = false;
  const onUpdate = (id) => setIsEdit(id);

  return (
    <>
      {!loading &&
        todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="d-flex flex-row justify-content-between align-items-center todo-item"
          >
            <p>{todo.title}</p>
            <span className="d-inline-flex">
              <i
                className="edit-todo fa fa-edit"
                onClick={() => onUpdate(todo.id)}
              ></i>
              <i
                className="remove-todo fa fa-trash"
                onClick={() => deleteTodo(todo.id)}
              ></i>
            </span>
          </div>
        ))}
    </>
  );
};

export default TodoLocalList;
