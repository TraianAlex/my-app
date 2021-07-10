import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';
import { displayError, generateId } from '../../../common/utils/utils';
import { useLocalStorage } from './useLocalStorage';

const TodoLocalForm = ({ isEdit, setIsEdit }) => {
  const { todos, createTodo, updateTodo } = useLocalStorage();
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const onCreateTodo = (e) => {
    e.preventDefault();

    if (title === '' || title.length < 2) {
      displayError('Please enter a todo!', setError);
      return;
    }

    const newTodo = {
      id: generateId(todos),
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
        data-testid="todo-form"
      >
        <Form.Group
          as={Col}
          controlId="text"
          style={{ marginBottom: 0, paddingLeft: 0 }}
        >
          <Form.Control
            type="text"
            name="title"
            data-testid="todo-input"
            onChange={({ target }) => setTitle(target.value)}
            value={title}
            placeholder="Things you wanna do..."
            required
          />
        </Form.Group>
        <Button
          type="submit"
          role="submit"
          variant="light"
          className="todo-item"
        >
          Save
        </Button>
      </Form>
      {error && (
        <Alert variant="danger" className="mt-2" data-testid="todo-error">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default TodoLocalForm;
