import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../Styles/Demo.css"

const Demo = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <LinkContainer to="/" exact>
            <Nav.Link as={NavLink} to="/" activeClassName="active">
              <FaHome className="mr-2" /> Home
            </Nav.Link>
          </LinkContainer>

          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <LinkContainer to="/settings/general">
              <NavDropdown.Item as={NavLink} to="/settings/general" activeClassName="active">
                General
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/settings/account">
              <NavDropdown.Item as={NavLink} to="/settings/account" activeClassName="active">
                Account
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <LinkContainer to="/logout">
            <Nav.Link as={NavLink} to="/logout" activeClassName="active">
              <FaSignOutAlt className="mr-2" /> Logout
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Demo;
