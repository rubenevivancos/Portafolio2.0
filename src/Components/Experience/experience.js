import { Container, Row, Col, Card } from 'react-bootstrap'; 
import SideBarMenu from '../SideBarMenu/sideBarMenu';

export default function Experience() {
    return (
        <div className="bg-dark d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Container fluid className="flex-grow-1 py-3">
                <Row className="h-100">
                    <Col xs={12} md={3} className="d-flex flex-column align-items-center p-3">
                        <SideBarMenu />
                    </Col>
                    <Col xs={12} md={9} className="d-flex flex-column">
                        <div className="d-flex justify-content-center mb-4">
                            <h1 className="bg-success text-white px-4 py-2 rounded w-75 text-center">
                                Experiencia
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="w-100 w-md-75">
                                <Card className="mb-4 bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <span>PM SERVICES - NKE ASOCIADOS SAC</span>
                                            <span className="text-end">abr. 2015 - nov. 2018</span>
                                        </Card.Title>
                                        <Card.Text>
                                            <span>Programador Web</span><span className="ms-4">Lima-Perú (Presencial)</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="border-bottom border-2 border-success w-75"></div>
                                </Card>
                                <Card className="mb-4 bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <span>NOVATRONIC</span>
                                            <span className="text-end">dic. 2013 - ago. 2014</span>
                                        </Card.Title>
                                        <Card.Text>
                                            <span>Programador Web</span><span className="ms-4">Lima-Perú (Presencial)</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="border-bottom border-2 border-success w-75"></div>
                                </Card>
                                <Card className="bg-dark text-white border-0">
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <span>ALIGNET</span>
                                            <span className="text-end">ene. 2008 - jun. 2013</span>
                                        </Card.Title>
                                        <Card.Text>
                                            <span>Programador Web</span><span className="ms-4">Lima-Perú (Presencial)</span>
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
