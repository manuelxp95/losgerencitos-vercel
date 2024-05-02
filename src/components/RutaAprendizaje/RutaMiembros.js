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

const RutaMiembros = () => {
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
                            <p><strong>Mi Ruta de Aprendizaje</strong></p>
                            </Card.Text>
                            {/* <Button variant="primary" onClick={() => navigate("ruta_d1")}>Ver</Button>*/}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembro2} />
                        <Card.Body>
                            <Card.Title>Meli McGonagall</Card.Title>
                            <Card.Text>
                            <p><strong>Mi Ruta de Aprendizaje</strong></p>


                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("ruta_d2")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={miembro3} />
                        <Card.Body>
                            <Card.Title>Manuverus Orgrim</Card.Title>
                            <Card.Text>
                            <p><strong>Mi Ruta de Aprendizaje</strong></p>

                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("ruta_d3")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                
            </Row>
        </Container>
    )
};

export default RutaMiembros;
