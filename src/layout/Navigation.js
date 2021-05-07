import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// @ts-ignore
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <header className="mb-5">
      <Navbar bg="light" expand="lg" fixed={'top'} collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/cards">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/todo">
              <Nav.Link>Todo</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="RxJS"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <LinkContainer to="/results">
                <NavDropdown.Item className="d-flex flex-column align-items-center">
                  Results
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              title="Apps"
              id="basic-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <LinkContainer to="/github-card">
                <NavDropdown.Item>Github Card</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/meal-tracker">
                <NavDropdown.Item>Meal Tracker</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/members-only">
                <NavDropdown.Item>Members Only</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              title="Games"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <LinkContainer to="/x-o">
                <NavDropdown.Item className="d-flex flex-column align-items-center">
                  X-O
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/star-match">
                <NavDropdown.Item className="d-flex flex-column align-items-center">
                  Star Match
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
