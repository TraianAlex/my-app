import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// @ts-ignore
import logo from '../logo.svg';

export const Navigation = ({ toggleNav }) => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <header className="mb-5">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed={'top'}
        collapseOnSelect
      >
        <Navbar.Brand onClick={toggleNav}>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Todo
            </Nav.Link>
            <NavDropdown
              title="RxJS"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <NavDropdown.Item onClick={() => handleNavClick('/results')}>
                Results
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Apps"
              id="basic-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <NavDropdown.Item onClick={() => handleNavClick('/meal-tracker')}>
                Meal Tracker
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/members-only')}>
                Members Only
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavClick('/photo-sharing')}
              >
                Photo Sharing
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/stocks')}>
                Stock Trading
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Games"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <NavDropdown.Item onClick={() => handleNavClick('/x-o')}>
                X-O
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/star-match')}>
                Star Match
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Diverse"
              id="responsive-nav-dropdown"
              className="d-flex flex-column align-items-center"
            >
              <NavDropdown.Item
                onClick={() => handleNavClick('/github-search')}
              >
                Github Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/github-card')}>
                Github Card
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('/google-sheet')}>
                Google sheet
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
