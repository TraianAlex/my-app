import React from 'react';
import './Home.scss';

export const Home = () => {
  const greeting =
    new Date().getHours() < 12 ? 'Good Morning!' : 'Good Evening!';

  return (
    <div className="page1">
      <h2>{greeting}</h2>
      <div className="test-page1">Page1</div>
    </div>
  );
};
