import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HamburgerMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none w-100">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre mí</Nav.Link>
            <Nav.Link href="#about">Experiencia</Nav.Link>
            <Nav.Link href="#contact">Habilidades</Nav.Link>
            <Nav.Link href="#contact">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Curriculum</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HamburgerMenu;
