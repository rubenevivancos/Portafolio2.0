import { Container, Row, Col } from 'react-bootstrap';
import SideBarMenu from '../SideBarMenu/sideBarMenu';


export default function AboutMe() {

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-primary text-white px-5 py-1 rounded w-50 text-center">
                                Sobre mí
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center text-white px-5 py-5 text-justify">
                            <p className="w-75">
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
    )
}