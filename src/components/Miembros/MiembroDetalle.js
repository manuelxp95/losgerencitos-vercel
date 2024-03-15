import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import meliMcGonagall from '../../images/miembro1.jpeg';
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
                        <Card.Img variant="top" src={meliMcGonagall} />
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card>
                        <Card.Body>
                        <Card.Title>Chris Flamel</Card.Title>
                            <Card.Text>
                            <p><strong>Superpoderes:</strong></p>
                                <p>Super detector de futuros problemas</p>
                                <p>Fuerza sobrenatural en resolución de conflictos</p>
                                <p>Planificador serial</p>
                                <p>Economizador Mileitico</p>
                            </Card.Text>
                            <Button variant="btn btn-primary" onClick={() => navigate("/miembros")}>Back</Button> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default MiembroDetalle;
