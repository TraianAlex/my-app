import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const SideNav = ({ isOpen }) => {
  return (
    <SideDiv
      className={isOpen && 'is-open'}
      aria-hidden={isOpen ? 'true' : 'false'}
    >
      <a href="/">{''}</a>
      <a href="/">{''}</a>
      <LinkContainer to="/cards">
        <Nav.Link>Cards</Nav.Link>
      </LinkContainer>
      <a href="/todo">Todo</a>
      <a href="/github-card">Github Card</a>
      <a href="/#">Link4</a>
      <a href="/#">Link5</a>
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
