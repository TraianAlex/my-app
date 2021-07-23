import React from 'react';
import { Card } from 'react-bootstrap';

export const CardRepos = ({ repo, repoCard }) => (
  <Card
    style={{
      //flexBasis: repoCard ? '19.3rem' : '42.5rem',
      width: repoCard ? '45%' : '100%',
      flex: 'auto',
      minWidth: repoCard ? 0 : '-moz-available',
      fontSize: '0.7rem',
    }}
    className="m-3 shadow"
  >
    <Card.Body>
      <Card.Link href={repo.url} style={{ fontSize: '0.9rem' }}>
        {repo.name}
      </Card.Link>
      <Card.Text>
        {repoCard && <Card.Text>{repo.description}</Card.Text>}
        <span
          className="repo-language-color"
          style={{
            marginRight: '0.7em',
            marginTop: repoCard ? '0' : '1rem',
            backgroundColor: '#f1e05a',
          }}
        ></span>
        {repo.language ? repo.language : '-'}
      </Card.Text>
    </Card.Body>
  </Card>
);
