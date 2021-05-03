import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const getRandomId = () => Math.random();

const TodoLocalForm = ({ isEdit, setIsEdit }) => {
  const { todos, createTodo, updateTodo } = useLocalStorage();
  const [title, setTitle] = useState('');

  const onCreateTodo = (e) => {
    e.preventDefault();

    if (title === '') {
      alert('Fill the form');
      return;
    }

    const newTodo = {
      id: getRandomId(),
      title,
      completed: false,
    };

    if (isEdit) {
      updateTodo(isEdit, newTodo);
    } else {
      createTodo(newTodo);
    }

    setTitle('');
    setIsEdit('');
  };

  useEffect(() => {
    if (isEdit) {
      const { title } = todos.find((todo) => todo.id === isEdit);
      setTitle(title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

  return (
    <form
      className="d-flex justify-content-center align-items-center mt-4"
      onSubmit={onCreateTodo}
    >
      <input
        type="text"
        name="title"
        className="input"
        onChange={({ target }) => setTitle(target.value)}
        value={title}
        placeholder="Things you wanna do..."
      />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default TodoLocalForm;
