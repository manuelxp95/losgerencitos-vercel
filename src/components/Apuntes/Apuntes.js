import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mapa from '../../images/material.jpg';
import { useNavigate } from "react-router-dom";

import doc1 from '../../docs/Unidad 1-1.pdf';
import doc2 from '../../docs/Unidad 1-2.pdf';
import doc3 from '../../docs/Unidad 1-3.pdf';
import doc4 from '../../docs/Unidad 2-1.pdf';
import doc5 from '../../docs/Unidad 2-2.pdf';
import doc6 from '../../docs/Unidad 2-3.pdf';
import doc7 from '../../docs/Modelo Canvas.pdf';

const Apuntes = () => {
    const navigate = useNavigate();

    // Función para abrir los documentos en una nueva pestaña
    const openDocument = (document) => {
        window.open(document, '_blank');
    };

    return (
        <Container fluid className="main-container">
            <Row className="group-logo">
                <Logo />
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 1-1</Card.Title>
                            {/* Botón para abrir el primer documento */}
                            <Button variant="primary" onClick={() => openDocument(doc1)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 1-2</Card.Title>
                            {/* Botón para abrir el segundo documento */}
                            <Button variant="primary" onClick={() => openDocument(doc2)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 1-3</Card.Title>
                            {/* Botón para abrir el tercer documento */}
                            <Button variant="primary" onClick={() => openDocument(doc3)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 2-1</Card.Title>
                            {/* Botón para abrir el cuarto documento */}
                            <Button variant="primary" onClick={() => openDocument(doc4)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 2-2</Card.Title>
                            {/* Botón para abrir el quinto documento */}
                            <Button variant="primary" onClick={() => openDocument(doc5)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Unidad 2-3</Card.Title>
                            {/* Botón para abrir el sexto documento */}
                            <Button variant="primary" onClick={() => openDocument(doc6)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="justify-content-center mb-3">
                    <Card style={{ width: '22rem', margin: 'auto' }}>
                        <Card.Img variant="top" src={mapa} />
                        <Card.Body>
                            <Card.Title>Modelo Canvas</Card.Title>
                            {/* Botón para abrir el séptimo documento */}
                            <Button variant="primary" onClick={() => openDocument(doc7)}>Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Apuntes;
