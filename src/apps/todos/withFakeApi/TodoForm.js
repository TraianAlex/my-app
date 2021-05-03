import React, { useEffect } from 'react';
import { useFakeApi } from './useFakeApi';

const TodoForm = () => {
  const { todo, title, setTodoTitle, createTodo, updateTodo } = useFakeApi();

  const onCreateTodo = (e) => {
    e.preventDefault();

    if (title === '') {
      alert('Fill the form');
      return;
    }

    const newTodo = todo
      ? { id: todo.id, title, completed: false }
      : { title, completed: false };

    if (todo) {
      updateTodo(newTodo);
    } else {
      createTodo(newTodo);
    }
  };

  useEffect(() => {
    if (todo) {
      setTodoTitle(todo.title);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);

  return (
    <form
      className="d-flex justify-content-center align-items-center mt-4"
      onSubmit={onCreateTodo}
    >
      <input
        type="text"
        name="title"
        className="input"
        onChange={({ target }) => setTodoTitle(target.value)}
        value={title}
        placeholder="Things you wanna do..."
      />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default TodoForm;
