import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const FormGithub = ({ userName, setUsername, handleSubmit }) => {
  return (
    <FormStyled>
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
        <Form.Group
          controlId="text"
          style={{ marginBottom: 0, paddingRight: '10px' }}
        >
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
    </FormStyled>
  );
};

const FormStyled = styled.div`
  .invisible-button {
    vertical-align: top;
    border: none;
    padding: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
    font-weight: inherit;
    background-color: transparent;
    color: #000;
    &:hover {
      background-color: transparent;
    }
  }
`;
