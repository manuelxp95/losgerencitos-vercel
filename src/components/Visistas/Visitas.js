import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../images/GerencitosLogo.png';
import visitasimg from '../../images/Visitas.jpg';
import { useNavigate } from "react-router-dom";

const VVisitas = () => {
    const navigate = useNavigate();

    return (
        
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={visitasimg} />
                        <Card.Body>
                            <Card.Title>Visita experto</Card.Title>
                            <Button variant="primary" onClick={() => navigate("visitaexp")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={visitasimg} />
                        <Card.Body>
                            <Card.Title>Visita a Lopez Hnos.</Card.Title>
                            <Button variant="primary" onClick={() => navigate("visitalh")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
};

export default VVisitas;
