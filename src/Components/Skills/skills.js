import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'; 

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';
import reactBootstrap from '../../Images/react-bootstrap.png';
import bootstrap from '../../Images/bootstrap.png';
import react from '../../Images/react.png';
import reduxToolkit from '../../Images/redux-toolkit.png';
import node from '../../Images/node.png';
import express from '../../Images/express.png';
import sequelize from '../../Images/sequelize.png';
import postgreSQL from '../../Images/postgresql.png';
import git from '../../Images/git.png';
import gitHub from '../../Images/gitHub.png';
import mongoose from '../../Images/mongoose.png';
import mongoDB from '../../Images/mongoDB.png';

export default function Skills() {
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
                        <div className="mb-5 d-flex justify-content-end">
                            {/* Para pantallas grandes */}
                            <h1 className="bg-danger text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                                Habilidades
                            </h1>

                            {/* Para pantallas pequeñas y medianas */}
                            <h1 className="bg-danger text-white px-4 py-1 rounded w-75 text-center d-lg-none">
                                Habilidades
                            </h1>
                        </div>
                        
                        <div className="d-flex justify-content-center">
                            <div className="w-75">
                                <Row className="w-100">
                                    <Col xs={12} sm={6} md={4} className="text-white d-flex flex-column justify-content-start mb-4">
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={react} className="me-2" width="48" height="48" /> React <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={reduxToolkit} className="me-2 rounded" width="48" height="48" /> Redux-Toolkit <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={sequelize} className="me-2" width="48" height="48" /> Sequelize <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={mongoDB} className="me-2 rounded" width="48" height="48" /> MongoDB <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} className="text-white d-flex flex-column justify-content-start mb-4">
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={reactBootstrap} className="me-2" width="48" height="48" /> React-Bootstrap <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={node} className="me-2" width="48" height="48" /> Node <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={postgreSQL} className="me-2" width="48" height="48" /> PostgreSQL <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={git} className="me-2" width="48" height="48" /> Git <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} className="text-white d-flex flex-column justify-content-start mb-4">
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={bootstrap} className="me-2" width="48" height="48" /> Bootstrap <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={express} className="me-2 rounded" width="48" height="48" /> Express <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={mongoose} className="me-2" width="48" height="48" /> Mongoose <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                        <p className="d-flex align-items-center mb-3">
                                            <Image src={gitHub} className="me-2 rounded" width="48" height="48" /> GitHub <span className="text-danger ms-2"><BsCheck /></span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
