import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../images/GerencitosLogo.png';
import miembrosCard from '../../images/miembros_card.jpg';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <Col sm={4} className="justify-content-center">
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
                <Col sm={4} className="justify-content-center">
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
                <Col sm={4} className="justify-content-center">
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
                <Col sm={4} className="justify-content-center">
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
                <Col sm={4} className="justify-content-center">
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
                <Col sm={4} className="justify-content-center">
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
            </Row>
        </Container>
    )
};

export default HomePage;
