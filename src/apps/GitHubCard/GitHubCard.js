import React, { useState } from 'react';
import { Form } from './Form';
import { CardList } from './CardList';
import './GitHubCard.scss';
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

export const GitHubCard = () => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) =>
    setProfiles((prevState) => [...prevState, profileData]);

  return (
    <div className="github-card">
      <div className="header">The GitHub Cards App</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

// https://jscomplete.com/playground/rgs2.7
