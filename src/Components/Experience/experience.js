import { Container, Row, Col, Card } from 'react-bootstrap'; 
import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';

export default function Experience() {
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
                        <div className="d-flex justify-content-end mb-4">
                            {/* Para pantallas grandes */}
                            <h1 className="bg-success text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                                Experiencia
                            </h1>

                            {/* Para pantallas pequeñas y medianas */}
                            <h1 className="bg-success text-white px-4 py-1 rounded w-75 text-center d-lg-none">
                                Experiencia
                            </h1>
                        </div>
                        
                        <div className="d-flex justify-content-center text-white px-5 py-5 text-justify">
                            <div className="w-100 w-md-75">
                                <Card className="mb-4 bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-start">
                                            <span>PM SERVICES - NKE ASOCIADOS SAC</span>
                                            <span className="text-end">abr. 2015 - nov. 2018</span>
                                        </Card.Title>
                                        <Card.Text className="d-flex flex-column flex-lg-row align-items-start">
                                            <span className="me-4">Programador Web</span>
                                            <span>Lima-Perú (Presencial)</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="border-bottom border-2 border-success w-75"></div>
                                </Card>
                                <Card className="mb-4 bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-start">
                                            <span>NOVATRONIC</span>
                                            <span className="text-end">dic. 2013 - ago. 2014</span>
                                        </Card.Title>
                                        <Card.Text className="d-flex flex-column flex-lg-row align-items-start">
                                            <span className="me-4">Programador Web</span>
                                            <span>Lima-Perú (Presencial)</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="border-bottom border-2 border-success w-75"></div>
                                </Card>
                                <Card className="bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-start">
                                            <span>ALIGNET</span>
                                            <span className="text-end">ene. 2008 - jun. 2013</span>
                                        </Card.Title>
                                        <Card.Text className="d-flex flex-column flex-lg-row align-items-start">
                                            <span className="me-4">Programador Web</span>
                                            <span>Lima-Perú (Presencial)</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="border-bottom border-2 border-success w-75"></div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
