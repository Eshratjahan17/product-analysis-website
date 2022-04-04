import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="me-0 ms-0 ">
      <Container>
        <Navbar.Brand>
          <img
            className="brand-icon"
            src="https://www.pngitem.com/pimgs/m/298-2989348_laptop-circle-icon-png-transparent-png.png"
          />
        </Navbar.Brand>
        <Nav className="me-auto ">
          <Link className="navbar" to="/home">
            Home
          </Link>
          <Link className="navbar" to="/allreviwes">
            Reviwes
          </Link>
          <Link className="navbar" to="/dashboard">
            DashBoard
          </Link>
          <Link className="navbar" to="/blogs">
            Blogs
          </Link>
          <Link className="navbar" to="/about">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;