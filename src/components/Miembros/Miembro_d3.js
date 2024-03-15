import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import miembro3 from '../../images/miembro3.jpg';
import { useNavigate } from "react-router-dom";

const MiembroDetalle = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <Col md={6} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={miembro3} />
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card>
                        <Card.Body>
                        <Card.Title>Manuverus Orgrim</Card.Title>
                            <Card.Text>
                            <p><strong>Superpoderes:</strong></p>
                                <p>Aura de Calma</p>
                                <p>Mente Estratégica Infalible</p>
                                <p>Manipulación de la Energía C plus plus para generar codigo</p>
                                <p>Escudo de la Verdad</p>

                            </Card.Text>
                            <div className="video-container">
                            <iframe 
        src="https://drive.google.com/file/d/1zoTGLY8RaW8_ISDCqnsS7T771YXP65by/preview" 
        title="Video" 
        allow="autoplay"
        width="100%" // Ancho del iframe al 100% del contenedor padre
        height= "500px" // Altura del iframe al 100% del contenedor padre
    ></iframe>
</div>
                            <Button variant="btn btn-primary" onClick={() => navigate("/miembros")}>Back</Button> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default MiembroDetalle;
