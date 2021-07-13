import React from 'react';
import { Container } from 'react-bootstrap';
import { FormGithub } from './FormGithub';
import { CardList } from './CardList';
import { useGitApi } from './useGitApi';

export const GitHubCard = () => {
  const [profiles, userName, setUsername, handleSubmit] = useGitApi();

  return (
    <Container
      className="d-flex flex-column pt-4"
      style={{ minHeight: '80vh', fontSize: 'calc(10px + 2vmin)' }}
    >
      <div className="text-center my-3" style={{ fontSize: '1.5em' }}>
        The GitHub Cards
      </div>
      <FormGithub
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        userName={userName}
      />
      <CardList profiles={profiles} />
    </Container>
  );
};
