import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';

export const FormGithub = ({ userName, setUsername, handleSubmit }) => {
  return (
    <>
      <Row className="justify-content-center mb-2">
        <small>
          Try{' '}
          <Button
            variant="light"
            className="invisible-button"
            onClick={() => setUsername('gaearon')}
          >
            "gaearon"
          </Button>
          {', '}
          <Button
            variant="light"
            className="invisible-button"
            onClick={() => setUsername('sophiebits')}
          >
            "sophiebits"
          </Button>
          {', '}
          <Button
            variant="light"
            className="invisible-button"
            onClick={() => setUsername('bvaughn')}
          >
            "bvaughn"
          </Button>
          {', or '}
          <Button
            variant="light"
            className="invisible-button"
            onClick={() => setUsername('sebmarkbage')}
          >
            "sebmarkbage"
          </Button>
        </small>
      </Row>
      <Form className="d-flex justify-content-md-center p-4 border border-info">
        <Form.Group controlId="text" style={{ marginBottom: 0 }}>
          <Form.Control
            type="text"
            value={userName}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="GitHub username"
            required
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Add card</Button>
      </Form>
    </>
  );
};
