import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';
import portafolio from '../../Images/portafolio.png';
import bazarUniversal from '../../Images/bazarUniversal.png';
import dogs from '../../Images/dogs.png';


export default function Projects() {

    return(
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
                        <div className="mb-5 d-flex justify-content-end">
                            {/* Para pantallas grandes */}
                            <h1 className="bg-secondary text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                                Proyectos
                            </h1>

                            {/* Para pantallas pequeñas y medianas */}
                            <h1 className="bg-secondary text-white px-4 py-1 rounded w-75 text-center d-lg-none">
                                Proyectos
                            </h1>
                        </div>

                        <div className="mt-5 d-flex justify-content-center overflow-auto" style={{ maxHeight: '70vh', scrollbarColor: '#6c757d #292e33' }}>
                            <div className="w-75">
                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={dogs} width="140" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={dogs} width="140" height="120"/>
                                        </div>
                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>App de Razas Caninas</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            Aplicación que consume datos de una API (The Dog API) a través de un
                                                            Backend. Se pueden realizar: búsquedas, ordenamientos y filtros, ver detalle, realizar registro.
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 1:</b> <span className="small">Está hecha con Redux</span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI-Dogs-Henry_FrontEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI-Dogs-Henry_FrontEnd", "_blank")}
                                                            >
                                                                GitHub-Frontend
                                                            </Link>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI-Dogs-Henry_BackEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI-Dogs-Henry_BackEnd", "_blank")}
                                                            >
                                                                GitHub-Backend
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://pi-dogs-henry-front-end.vercel.app"
                                                                  onClick={() => window.open("https://pi-dogs-henry-front-end.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 2:</b> <span className="small">Está hecha con Redux-Toolkit</span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI_Dogs_2.0_FrontEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI_Dogs_2.0_FrontEnd", "_blank")}
                                                            >
                                                                GitHub-Frontend
                                                            </Link>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/PI_Dogs_2.0_BackEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/PI_Dogs_2.0_BackEnd", "_blank")}
                                                            >
                                                                GitHub-Backend
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://pi-dogs-2-0-front-end.vercel.app"
                                                                  onClick={() => window.open("https://pi-dogs-2-0-front-end.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={bazarUniversal} width="100" height="120"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={bazarUniversal} width="100" height="120"/>
                                        </div>

                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>Bazar OnLine</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            En esta aplicación web los usuarios podrán buscar el nombre del producto, se mostrará una lista de 
                                                            productos como resultado y podrán hacer clic en cada uno para ver el detalle.
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 1:</b> <span className="small">Los productos son obtenidos de un archivo JSON</span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal2.0_FrontEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal2.0_FrontEnd", "_blank")}
                                                            >
                                                                GitHub-Frontend
                                                            </Link>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal2.0_BackEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal2.0_BackEnd", "_blank")}
                                                            >
                                                                GitHub-Backend
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://bazar-universal2-0-front-end.vercel.app"
                                                                  onClick={() => window.open("https://bazar-universal2-0-front-end.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 2:</b> <span className="small">Los datos se obtienen de tres tablas relacionadas 
                                                                                                      en una base de datos PostgreSQL, utilizando 
                                                                                                      tres funciones almacenadas.
                                                                              </span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Sequelize</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">PostgreSQL</span>
                                                        </span>
                                                        <span className="mb-4 d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal3.0_FrontEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal3.0_FrontEnd", "_blank")}
                                                            >
                                                                GitHub-Frontend
                                                            </Link>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal3.0_BackEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal3.0_BackEnd", "_blank")}
                                                            >
                                                                GitHub-Backend
                                                            </Link>                                                             
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://bazar-universal3-0-front-end.vercel.app"
                                                                  onClick={() => window.open("https://bazar-universal3-0-front-end.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                        <span className="mb-2">
                                                            <b>Versión 3:</b> <span className="small">Los datos se obtienen de una base de datos MongoDB 
                                                                                                      y se gestionan mediante Mongoose.
                                                                              </span>
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Redux-Toolkit</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Node</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Express</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Mongoose</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">MongoDB</span>
                                                        </span>
                                                        <span className="d-flex flex-column flex-lg-row align-items-start">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal4.0_FrontEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal4.0_FrontEnd", "_blank")}
                                                            >
                                                                GitHub-Frontend
                                                            </Link>
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/BazarUniversal4.0_BackEnd"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/BazarUniversal4.0_BackEnd", "_blank")}
                                                            >
                                                                GitHub-Backend
                                                            </Link>
                                                            <Link className="small text-white"
                                                                  to="#" 
                                                                  title="https://bazar-universal4-0-front-end.vercel.app"
                                                                  onClick={() => window.open("https://bazar-universal4-0-front-end.vercel.app", "_blank")}
                                                            >
                                                                Deploy
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                                <div className="mb-5 border border-secondary d-flex flex-column flex-lg-row">
                                        {/* Para pantallas grandes */}
                                        <div className="col-auto d-flex align-items-center justify-content-center p-3 d-none d-lg-flex" style={{ width: '188px' }}>
                                            <Image src={portafolio} width="140" height="50"/>
                                        </div>
                                        {/* Para pantallas pequeñas y medianas */}
                                        <div className="d-flex align-items-center justify-content-center p-3 d-lg-none" style={{ height: '100%' }}>
                                            <Image src={portafolio} width="140" height="50"/>
                                        </div>

                                        <div>
                                            <Card className="bg-dark text-white border-0">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <b>Portafolio</b>
                                                    </Card.Title>
                                                    <Card.Text className="d-flex flex-column">
                                                        <span className="mb-4 small">
                                                            Aplicación web hecha con React-Bootstrap y React-Context
                                                        </span>
                                                        <span className="d-flex flex-wrap">
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Bootstrap</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React</span>
                                                            <span className="bg-secondary rounded px-2 me-2 mb-2 small">React-Context</span>
                                                        </span>
                                                        <span className="mb-4">
                                                            <Link className="pe-2 small text-white"
                                                                  to="#" 
                                                                  title="https://github.com/rubenevivancos/Portafolio"
                                                                  onClick={() => window.open("https://github.com/rubenevivancos/Portafolio", "_blank")}
                                                            >
                                                                GitHub
                                                            </Link>
                                                        </span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}