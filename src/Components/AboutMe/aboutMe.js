import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';

export default function AboutMe() {
  return (
    <div className="bg-dark d-flex flex-column" style={{ height: '100vh' }}>
      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          <Col xs={12} md={3} className="d-flex flex-column align-items-center p-3">
            <SideBarMenu />
          </Col>
          <Col xs={12} md={9} className="d-flex flex-column justify-content-center p-3">
            <div className="d-flex justify-content-center">
              <h1 className="bg-primary text-white px-5 py-1 rounded w-75 text-center">
                Sobre mí
              </h1>
            </div>
            <div className="d-flex justify-content-center text-white px-5 py-5 text-justify">
              <p className="w-100 w-md-75">
                Mi nombre es <span className="bg-primary rounded px-2">Rubén Vivanco Salazar</span>, soy un Desarrollador Full Stack con sede en Lima-Perú.
                Tengo más de 5 años de experiencia como desarrollador, principalmente con las tecnologías Java y Oracle.
                Adquirí nuevos conocimientos en el <span className="bg-primary rounded px-2">bootcamp SoyHenry</span> y ahora quiero empezar una nueva etapa, nuevos retos con éstas 
                nuevas tecnologías trabajando en <span className="bg-primary rounded px-2">forma remota</span>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
