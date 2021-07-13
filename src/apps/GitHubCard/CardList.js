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
    <div className="github-profile m-2" style={{ fontSize: 'font-size: 1.25rem'}}>
      <img alt="user" src={avatar_url} style={{ width: '5em'}} />
      <div className="d-inline-block ml-3">
        <div className="font-weight-bold">{name}</div>
        <div className="font-weight-bold">{company}</div>
      </div>
    </div>
  );
};
