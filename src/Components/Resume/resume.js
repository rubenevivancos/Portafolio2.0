import { Container, Row, Col } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import curriculumPDF from '../../Documents/rubenVivancoCV.pdf';


export default function Resume() {

    const descargarCurriculum = () => {
        // Crear un enlace temporal para descargar el PDF
        const link = document.createElement('a');
        link.href = curriculumPDF; // Establecer la ruta del archivo PDF
        link.download = 'rubenVivancoCV.pdf'; // Establecer el nombre de descarga del archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Col sm={3} className="d-flex align-items-center">
                        <SideBarMenu />
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            <h1 className="bg-warning text-white px-5 py-1 rounded w-50 text-center">
                                Curriculum
                            </h1>
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <div className="w-75 text-white ps-5">
                                <span className="me-3">Descargar curriculum actualizado</span>
                                <Link onClick={descargarCurriculum} className="text-decoration-none text-white">
                                    <BsDownload className="text-warning" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}