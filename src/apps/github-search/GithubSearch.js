import React from 'react';
import { Container } from 'react-bootstrap';
import { GitProvider } from './store/GitProvider';
import SearchForm from './components/SearchForm';
import Profile from './components/Profile';

export const GithubSearch = () => {
  return (
    <Container style={{minHeight: '80vh'}}>
      <GitProvider>
        <SearchForm />
        <Profile />
      </GitProvider>
    </Container>
  );
};
