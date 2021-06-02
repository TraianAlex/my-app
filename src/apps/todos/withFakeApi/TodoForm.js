import React, { useEffect } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
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

    todo ? updateTodo(newTodo) : createTodo(newTodo);
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
      <Form.Group
        as={Col}
        controlId="text"
        style={{ marginBottom: 0, paddingLeft: 0 }}
      >
        <Form.Control
          type="text"
          name="title"
          onChange={({ target }) => setTodoTitle(target.value)}
          value={title}
          placeholder="Things you wanna do..."
          required
        />
      </Form.Group>
      <Button type="submit" variant="light" className="todo-item">
        Save
      </Button>
    </form>
  );
};

export default TodoForm;
