import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';
import { useLocalStorage } from './useLocalStorage';

const getRandomId = () => Math.random();

const TodoLocalForm = ({ isEdit, setIsEdit }) => {
  const { todos, createTodo, updateTodo } = useLocalStorage();
  const [title, setTitle] = useState('');
  const [showError, setShowError] = useState(false);

  const displayError = () => {
    setShowError(true);
    const clearTimer = setTimeout(() => setShowError(false), 3000);
    return () => clearTimeout(clearTimer);
  };

  const onCreateTodo = (e) => {
    e.preventDefault();

    if (title === '') {
      displayError();
      return;
    }

    const newTodo = {
      id: getRandomId(),
      title,
      completed: false,
    };

    isEdit ? updateTodo(isEdit, newTodo) : createTodo(newTodo);

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
    <>
      <Form
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
            onChange={({ target }) => setTitle(target.value)}
            value={title}
            placeholder="Things you wanna do..."
            required
          />
        </Form.Group>
        <Button type="submit" variant="light" className="todo-item">
          Save
        </Button>
      </Form>
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Please enter a todo!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default TodoLocalForm;
