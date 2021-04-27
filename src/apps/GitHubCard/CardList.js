import React from 'react';

export const CardList = ({ profiles }) => (
  <>
    {profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </>
);

const Card = ({ avatar_url, name, company }) => {

  return (
    <div className="github-profile">
      <img alt="user" src={avatar_url} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{company}</div>
      </div>
    </div>
  );
};
