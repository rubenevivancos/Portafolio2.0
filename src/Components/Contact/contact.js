import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import gitHub from '../../Images/gitHub.png';
import linkedin from '../../Images/linkedin.png';
import mail from '../../Images/mail.png';


export default function Contact() {

    const gitHubURL = 'https://github.com/rubenevivancos';
    const linkedinURL = 'https://www.linkedin.com/in/rubenvivancosalazar';
    const email = 'rernestovsalazar@hotmail.com';

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-info text-white px-5 py-1 mb-5 rounded w-50 text-center">
                                Contacto
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <div className="w-75 text-white ps-5 d-flex justify-content-start">
                                <Link className="me-3"
                                      to="#" 
                                      title={gitHubURL}
                                      onClick={() => window.open(gitHubURL, "_blank")}
                                >
                                    <Image src={gitHub} className="rounded" width="32" height="32"/>
                                </Link>
                                <Link className="me-3"
                                      to="#" 
                                      title={linkedinURL}
                                      onClick={() => window.open(linkedinURL, "_blank")}
                                >
                                    <Image src={linkedin} className="rounded" width="32" height="32"/>
                                </Link>
                                <Link to={`mailto:${email}`}
                                      title={email}
                                >
                                    <Image src={mail} className="rounded" width="32" height="32"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}