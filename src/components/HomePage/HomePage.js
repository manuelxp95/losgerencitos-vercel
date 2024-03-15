import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../images/GerencitosLogo.png';
import miembrosCard from '../../images/miembros_card.jpg';
import alianza from '../../images/alianza.jpg';
import desafios from '../../images/desafios.jpg';
import lectura from '../../images/lectura.jpg';
import mapa from '../../images/mapa.jpg';
import material from '../../images/material.jpg';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembrosCard} />
                        <Card.Body>
                            <Card.Title>Miembros</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={alianza} />
                        <Card.Body>
                            <Card.Title>Alianza</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafios} />
                        <Card.Body>
                            <Card.Title>Desafios</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={lectura} />
                        <Card.Body>
                            <Card.Title>Material de Lectura</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Mapas Mentales</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} className="justify-content-center mb-3">
                    <Card style={{ width: '18rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={material} />
                        <Card.Body>
                            <Card.Title>Apuntes y material de estudio</Card.Title>
                            <Card.Text>
                                Conoce a los hechiceros que integran a este aquelarre
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("miembros")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;
