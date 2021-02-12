import React from 'react';
import './Home.css';

export const Home = () => {
  const greeting =
    new Date().getHours() < 12 ? 'Good Morning!' : 'Good Evening!';
  return (
    <>
      <h2>{greeting}</h2>
      <div className="test-page1">Page1</div>
    </>
  );
};
