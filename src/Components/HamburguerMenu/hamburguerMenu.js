import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelectedItem } from '../../Context/context';

const HamburgerMenu = () => {
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    navigate("/" + itemName);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none w-100">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleItemClick('aboutMe')}>
              Sobre mí
            </Nav.Link>
            <Nav.Link onClick={() => handleItemClick('experience')}>
              Experiencia
            </Nav.Link>
            <Nav.Link onClick={() => handleItemClick('skills')}>
              Habilidades
            </Nav.Link>
            <Nav.Link onClick={() => handleItemClick('projects')}>
              Proyectos
            </Nav.Link>
            <Nav.Link onClick={() => handleItemClick('resume')}>
              Curriculum
            </Nav.Link>
            <Nav.Link onClick={() => handleItemClick('contact')}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HamburgerMenu;
