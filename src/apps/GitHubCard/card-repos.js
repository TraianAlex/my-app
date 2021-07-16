import React from 'react';
import { Card } from 'react-bootstrap';

export const CardRepos = ({ repo }) => (
  <Card
    style={{
      width: '19.3rem',
      minHeight: '120px',
      fontSize: '0.7rem',
    }}
    className="m-3 shadow"
  >
    <Card.Body>
      <Card.Link href={repo.url} style={{ fontSize: '0.9rem' }}>
        {repo.name}
      </Card.Link>
      <Card.Text>
        <Card.Text>{repo.description}</Card.Text>
        <span
          className="repo-language-color"
          style={{
            marginRight: '0.7em',
            backgroundColor: '#f1e05a',
          }}
        ></span>
        {repo.language ? repo.language : '-'}
      </Card.Text>
    </Card.Body>
  </Card>
);
