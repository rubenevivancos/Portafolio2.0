import React, { useEffect, useState } from 'react';
import { Button, Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useSelectedItem } from '../../Context/context';



function SidebarMenu() {
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    // Establecer el estado del botón como true cuando se presiona el botón.
    setButtonClicked(true);
  };


  useEffect(() => {
    if (buttonClicked) {
      if (selectedItem !== null) {
        console.log("selectedItem --> " + selectedItem);
        navigate("/" + selectedItem);
      }

      // Reiniciar el estado del botón después de ejecutar el efecto
      setButtonClicked(false);
    }
  }, [buttonClicked]);


  return (
    <Col className="d-none d-lg-flex align-items-center">
      <Container className="d-flex flex-column gap-2">
        <Button
          variant={selectedItem === 'aboutMe' ? "primary" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('aboutMe')}
        >
          Sobre mí
        </Button>
        <Button
          variant={selectedItem === 'experience' ? "success" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('experience')}
        >
          Experiencia
        </Button>
        <Button
          variant={selectedItem === 'skills' ? "danger" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('skills')}
        >
          Habilidades
        </Button>
        <Button
          variant={selectedItem === 'projects' ? "secondary" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('projects')}
        >
          Proyectos
        </Button>
        <Button
          variant={selectedItem === 'resume' ? "warning text-white" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('resume')}
        >
          Curriculum
        </Button>
        <Button
          variant={selectedItem === 'contact' ? "info text-white" : "outline-secondary"}
          size="sm"
          onClick={() => handleItemClick('contact')}
        >
          Contacto
        </Button>
      </Container>
    </Col>
  );
}

export default SidebarMenu;
