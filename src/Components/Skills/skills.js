import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'; 

import SideBarMenu from '../SideBarMenu/sideBarMenu';
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
        <div className="bg-dark d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Container fluid className="py-3">
                <Row className="h-100">
                    <Col xs={12} md={3} className="d-flex flex-column align-items-center p-3">
                        <SideBarMenu />
                    </Col>
                    <Col xs={12} md={9} className="d-flex flex-column">
                        <div className="mb-5 d-flex justify-content-center">
                            <h1 className="bg-danger text-white px-4 py-2 rounded w-75 text-center mb-5">
                                Habilidades
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="w-100">
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
