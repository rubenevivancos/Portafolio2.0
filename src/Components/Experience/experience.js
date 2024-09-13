import { Container, Row, Col, Card } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function Experience() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-success text-white px-5 py-1 rounded w-50 text-center">
                                Experiencia
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <div className="w-75">
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
                                    <div className="border-bottom border-2 border-success w-75 "></div>
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
                                    <div className="border-bottom border-2 border-success w-75 "></div>
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
                                    <div className="border-bottom border-2 border-success w-75 "></div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}