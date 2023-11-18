import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    
    <Navbar bg="body-tertiary" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/home">
          Coordinate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/event/new">
              Create New Event
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;