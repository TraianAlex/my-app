import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';

export const FormGithub = ({ userName, setUsername, handleSubmit }) => {
  return (
    <>
      <Row className="justify-content-center mb-2">
        <small>
          Try{' '}
          <button
            className="invisible-button"
            type="button"
            onClick={() => setUsername('gaearon')}
          >
            "gaearon"
          </button>
          {', '}
          <button
            className="invisible-button"
            type="button"
            onClick={() => setUsername('sophiebits')}
          >
            "sophiebits"
          </button>
          {', '}
          <button
            className="invisible-button"
            type="button"
            onClick={() => setUsername('bvaughn')}
          >
            "bvaughn"
          </button>
          {', or '}
          <button
            className="invisible-button"
            type="button"
            onClick={() => setUsername('sebmarkbage')}
          >
            "sebmarkbage"
          </button>
        </small>
      </Row>
      <Form className="d-flex justify-content-center p-4 border border-info">
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="GitHub username"
          required
        />
        <Button onClick={handleSubmit}>Add card</Button>
      </Form>
    </>
  );
};
