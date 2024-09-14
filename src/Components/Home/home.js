import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Home() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    {/* Sidebar para pantallas grandes */}
                    <Col lg={3} className="d-none d-lg-flex align-items-center">
                        <SideBarMenu />
                    </Col>

                    {/* Menú de hamburguesa para pantallas pequeñas */}
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

                    <Col sm={12} lg={9}>
                        <div className="d-flex justify-content-center">
                            <div className="w-75 d-flex flex-column">
                                <div className="d-flex justify-content-center">
                                    <div className="border-bottom border-5 border-danger w-50"></div>
                                    <div className="border-bottom border-5 border-primary w-50"></div>
                                    <div className="border-bottom border-5 border-info w-50"></div>
                                </div>
                                <h1 className="text-white text-center my-2">BIENVENIDO A MI PORTAFOLIO</h1>
                                <div className="d-flex justify-content-center">
                                    <div className="border-top border-5 border-warning w-50"></div>
                                    <div className="border-top border-5 border-secondary w-50"></div>
                                    <div className="border-top border-5 border-success w-50"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}