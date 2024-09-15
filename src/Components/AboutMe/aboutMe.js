import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';


export default function AboutMe() {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center min-vh-100">
    {/* Otra opcion usando Inline Style Condicional */}
    {/* <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: isSmallScreen ? 'auto' : '100vh' }}> */}
      <Container>
        <Row>
          <Col lg={3} className="d-flex align-items-center">
            {/* Sidebar para pantallas grandes */}
            <SideBarMenu />

            {/* Menú de hamburguesa para pantallas pequeñas */}
            <HamburguerMenu />
          </Col>

          <Col lg={9}>
            <div className="d-flex justify-content-end">
              {/* Para pantallas grandes */}
              <h1 className="bg-primary text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                Sobre mí
              </h1>

              {/* Para pantallas pequeñas y medianas */}
              <h1 className="bg-primary text-white px-4 py-1 rounded w-75 text-center d-lg-none">
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
