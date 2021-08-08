import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// @ts-ignore
import logo from '../logo.svg';

export const Navigation = ({toggleNav}) => {
  return (
    <header className="mb-5">
      <Navbar bg="dark" variant="dark" expand="lg" fixed={'top'} collapseOnSelect>
        <Navbar.Brand onClick={toggleNav}>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
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
              <LinkContainer to="/meal-tracker">
                <NavDropdown.Item>Meal Tracker</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/members-only">
                <NavDropdown.Item>Members Only</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/photo-sharing">
                <NavDropdown.Item>Photo Sharing</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/stocks">
                <NavDropdown.Item>Stock Trading</NavDropdown.Item>
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
            <NavDropdown
              title="Diverse"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <LinkContainer to="/github-search" className="d-flex flex-column align-items-center">
                <NavDropdown.Item>Github Search</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/github-card" className="d-flex flex-column align-items-center">
                <NavDropdown.Item>Github Card</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
