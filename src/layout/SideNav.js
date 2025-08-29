import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideNav = ({ isOpen }) => {
  return (
    <SideDiv
      className={isOpen && 'is-open'}
      aria-hidden={isOpen ? 'true' : 'false'}
    >
      <Link to="/">Cards</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/github-card">Github Card</Link>
      <Link to="/results">Results</Link>
      <Link to="/meal-tracker">Meal Tracker</Link>
      <Link to="/x-o">X-O Game</Link>
      <Link to="/star-match">Star Match</Link>
      <Link to="/github-search">GitHub Search</Link>
      <Link to="/stocks">Stocks</Link>
      <Link to="/google-sheet">Google Sheet</Link>
    </SideDiv>
  );
};

const SideDiv = styled.nav`
  z-index: 1000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -200px;
  width: 200px;
  background-color: #333;
  transition: transform 0.3s ease-in-out;

  &.is-open {
    transform: translateX(-200px);
  }

  > a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 1em 1.5em;
    + a {
      border-top: 1px solid white;
    }
  }
`;
