import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';


export default function Home() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col lg={3} className="d-flex align-items-center">
                        {/* Sidebar para pantallas grandes */}
                        <SideBarMenu />

                        {/* Menú de hamburguesa para pantallas pequeñas */}
                        <HamburguerMenu />
                    </Col>

                    <Col lg={9}>
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