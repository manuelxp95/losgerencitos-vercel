import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import miembro2 from '../../images/miembro2.jpeg';
import { useNavigate } from "react-router-dom";

const MiembroDet2 = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <Col md={6} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={miembro2} />
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card>
                        <Card.Body>
                        <Card.Title>Meli McGonagall</Card.Title>
                            <Card.Text>
                            <p><strong>Superpoderes:</strong></p>
                                <p>Mi animago es un gato, llamado Nox</p>
                                <p>Especialista en transformaciones de personas</p>
                                <p>Experta en eco mágico</p>
                                <p>Estratega mental</p>

                            </Card.Text>
                            <div className="video-container">
                            <iframe 
        src="https://drive.google.com/file/d/1WBQB056Unxvqrf8ZLmsobp9Pha6zIOTx/preview" 
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

export default MiembroDet2;
