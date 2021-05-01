import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed={'top'}>
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/todo">
            Todo
          </Nav.Link>
          <NavDropdown title="RxJS" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/results">
              Results
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Apps" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/github-card">
              Github Card
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/meal-tracker">
              Meal Tracker
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/members-only">
              Members Only
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/x-o">
              X-O
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/star-match">
              Star Match
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
