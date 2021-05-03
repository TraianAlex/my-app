import React from 'react';
import { Container } from 'react-bootstrap';
import { FormGithub } from './FormGithub';
import { CardList } from './CardList';
import './GitHubCard.scss';
import { useGitApi } from './useGitApi';

export const GitHubCard = () => {
  const [profiles, userName, setUsername, handleSubmit] = useGitApi();

  return (
    <Container className="github-card">
      <div className="header text-center mt-3 mb-3">The GitHub Cards App</div>
      <FormGithub
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        userName={userName}
      />
      <CardList profiles={profiles} />
    </Container>
  );
};
