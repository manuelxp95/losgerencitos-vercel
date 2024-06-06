import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../images/GerencitosLogo.png';
import desafio_sample from '../../images/desafio_sample.jpg';
import { useNavigate } from "react-router-dom";

const Desafios = () => {
    const navigate = useNavigate();

    return (
        
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4}  className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 1</Card.Title>
                            {/* TODO: <Button variant="primary" onClick={() => navigate("miembrodetalle")}>Ver</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 2</Card.Title>
                            {/* <Button variant="primary" onClick={() => navigate("miembrodetalle2")}>Ver</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 3</Card.Title>
                            {/* Todo: <Button variant="primary" onClick={() => navigate("miembrodetalle2")}>Ver</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 4</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle4")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 5</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle5")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 6</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle6")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 7</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle7")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 8</Card.Title>
                            {/* <Button variant="primary" onClick={() => navigate("desafiodetalle7")}>Ver</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 9</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle9")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 10</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle10")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 11</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle11")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 12</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle12")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Desafio 13</Card.Title>
                            <Button variant="primary" onClick={() => navigate("desafiodetalle13")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={desafio_sample} />
                        <Card.Body>
                            <Card.Title>Visita experto</Card.Title>
                            <Button variant="primary" onClick={() => navigate("visitaexp")}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
                
            </Row>
        </Container>
    )
};

export default Desafios;
