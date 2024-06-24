import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../images/GerencitosLogo.png';
import miembro1 from '../../images/miembro1.jpeg';
import miembro2 from '../../images/miembro2.jpeg';
import miembro3 from '../../images/miembro3.jpg';
import { useNavigate } from "react-router-dom";

const Miembros = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row>
                <Col sm={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembro1} />
                        <Card.Body>
                            <Card.Title>Chris Flamel</Card.Title>
                            <Card.Text>
                                <p><strong>Superpoderes:</strong></p>
                                <p>Super detector de futuros problemas</p>
                                <p>Fuerza sobrenatural en resolución de conflictos</p>
                                <p>Planificador serial</p>
                                <p>Economizador Mileitico</p>
                            </Card.Text>
                            <Button variant="primary" className="w-100 mb-2" onClick={() => navigate("miembrodetalle")}>Ver</Button>
                            <Button variant="secondary" className="w-100 mb-2" onClick={() => navigate("rpa1")}>Ver RPA</Button>
                            <Button variant="info" className="w-100" onClick={() => navigate("infografia1")}>Ver Infografía</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembro2} />
                        <Card.Body>
                            <Card.Title>Meli McGonagall</Card.Title>
                            <Card.Text>
                                <p><strong>Superpoderes:</strong></p>
                                <p>Mi animago es un gato, llamado Nox</p>
                                <p>Especialista en transformaciones de personas</p>
                                <p>Experta en eco mágico</p>
                                <p>Estratega mental</p>
                            </Card.Text>
                            <Button variant="primary" className="w-100 mb-2" onClick={() => navigate("miembrodetalle2")}>Ver</Button>
                            <Button variant="secondary" className="w-100 mb-2" onClick={() => navigate("rpa2")}>Ver RPA</Button>
                            <Button variant="info" className="w-100" onClick={() => navigate("infografia2")}>Ver Infografía</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembro3} />
                        <Card.Body>
                            <Card.Title>Manuverus Orgrim</Card.Title>
                            <Card.Text>
                                <p><strong>Superpoderes:</strong></p>
                                <p>Aura de Calma</p>
                                <p>Mente Estratégica Infalible</p>
                                <p>Manipulación de la Energía C plus plus para generar codigo</p>
                                <p>Escudo de la Verdad</p>
                            </Card.Text>
                            <Button variant="primary" className="w-100 mb-2" onClick={() => navigate("miembrodetalle3")}>Ver</Button>
                            <Button variant="secondary" className="w-100 mb-2" onClick={() => navigate("rpa3")}>Ver RPA</Button>
                            <Button variant="info" className="w-100" onClick={() => navigate("infografia3")}>Ver Infografía</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Miembros;
