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
                <Col md={6} className="mb-3 min-height-col">
                    <Card>
                        <Card.Body>
                            <Card.Title>Chris Flamel</Card.Title>
                            <div style={{
                                position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%',
                                paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em',
                                marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'
                            }}>
                                <iframe loading="lazy" style={{
                                    position: 'absolute', width: '100%', height: '100%', top: 0, left: 0,
                                    border: 'none', padding: 0, margin: 0
                                }} src="https://www.canva.com/design/DAGEHldUVHo/705Oej26sDxBA7H9g5VgyQ/view?embed" allowFullScreen></iframe>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Ruta de Aprendizaje de Melina Anahí Teruel</span>
                                <Button variant="btn btn-primary" onClick={() => navigate("/rutaprendi")}>Back</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
};

export default MiembroDetalle;
