import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Navbar,
  Nav,
  // NavDropdown,
  NavItem,
  NavDropdown
} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Navbar color="faded" light expand="md">
        <Navbar.Brand as={NavLink} to="/">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={NavLink} to="/product">
                Products
              </Nav.Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavDropdown title="Bob" id="basic-nav-dropdown">
              <NavDropdown.Item to="a">Account</NavDropdown.Item>
              <NavDropdown.Item to="a">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="a">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
