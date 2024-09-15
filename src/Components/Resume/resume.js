import { Container, Row, Col } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideBarMenu from '../SideBarMenu/sideBarMenu';
import HamburguerMenu from '../HamburguerMenu/hamburguerMenu';
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
        <div className="bg-dark d-flex justify-content-center align-items-center min-vh-100">
        {/* Otra opcion usando Inline Style Condicional */}
        {/* <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: isSmallScreen ? 'auto' : '100vh' }}> */}
            <Container>
                <Row>
                    {/* Sidebar para pantallas grandes */}
                    <Col lg={3} className="d-none d-lg-flex align-items-center">
                        <SideBarMenu />
                    </Col>

                    {/* Menú de hamburguesa para pantallas pequeñas */}
                    <HamburguerMenu />

                    <Col sm={9}>
                        <div className="d-flex justify-content-end">
                            {/* Para pantallas grandes */}
                            <h1 className="bg-warning text-white px-4 py-1 rounded w-50 text-center d-none d-lg-block">
                                Curriculum
                            </h1>

                            {/* Para pantallas pequeñas y medianas */}
                            <h1 className="bg-warning text-white px-4 py-1 rounded w-75 text-center d-lg-none">
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