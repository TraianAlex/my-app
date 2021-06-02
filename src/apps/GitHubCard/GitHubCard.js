import React from 'react';
import { Container } from 'react-bootstrap';
import { FormGithub } from './FormGithub';
import { CardList } from './CardList';
import './GitHubCard.scss';
import { useGitApi } from './useGitApi';

export const GitHubCard = () => {
  const [profiles, userName, setUsername, handleSubmit] = useGitApi();

  return (
    <Container className="d-flex flex-column pt-4 github-card">
      <div className="header text-center my-3">The GitHub Cards</div>
      <FormGithub
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        userName={userName}
      />
      <CardList profiles={profiles} />
    </Container>
  );
};
