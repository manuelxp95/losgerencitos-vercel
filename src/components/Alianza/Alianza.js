import React, { useState } from 'react';
import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import ali_01 from '../../images/ali_01.jpeg';
import ali_02 from '../../images/ali_02.jpeg';
import ali_03 from '../../images/ali_03.jpeg';
import ali_04 from '../../images/ali_04.jpeg';
import ali_05 from '../../images/ali_05.jpeg';

const MMentalesDet = () => {
    const navigate = useNavigate();
    const [fullscreen, setFullscreen] = useState({ ali1: false, ali2: false, ali3: false, ali4: false, ali5: false });

    const toggleFullscreen = (ali) => {
        setFullscreen({ ...fullscreen, [ali]: !fullscreen[ali] });
    };

    return (
        <Container fluid className="main-container">
            <Row className="group-logo justify-content-center mt-3 pb-3">
                <Logo />
            </Row>

            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.ali1 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('ali1')}>
                            <img src={ali_01} alt="Alianza Manuel Ortiz" />
                        </div>
                    )}
                    {!fullscreen.ali1 && (
                        <img
                            src={ali_01}
                            alt="Alianza Manuel Ortiz"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('ali1')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            {/* Título para la segunda imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Acuerdo</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.ali2 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('ali2')}>
                            <img src={ali_02} alt="Alianza Christian Ramirez" />
                        </div>
                    )}
                    {!fullscreen.ali2 && (
                        <img
                            src={ali_02}
                            alt="Alianza Christian Ramirez"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('ali2')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            {/* Título para la tercera imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Metas</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.ali3 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('ali3')}>
                            <img src={ali_03} alt="Alianza Melina Teruel Alonso" />
                        </div>
                    )}
                    {!fullscreen.ali3 && (
                        <img
                            src={ali_03}
                            alt="Alianza Melina Teruel Alonso"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('ali3')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            {/* Título para la cuarta imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Herramientas</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.ali4 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('ali4')}>
                            <img src={ali_04} alt="Alianza Cuarta Imagen" />
                        </div>
                    )}
                    {!fullscreen.ali4 && (
                        <img
                            src={ali_04}
                            alt="Alianza Cuarta Imagen"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('ali4')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.ali5 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('ali5')}>
                            <img src={ali_05} alt="Alianza Quinta Imagen" />
                        </div>
                    )}
                    {!fullscreen.ali5 && (
                        <img
                            src={ali_05}
                            alt="Alianza Quinta Imagen"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('ali5')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            <div className="text-center mt-3 pb-3">
                <Button variant="btn btn-primary" onClick={() => navigate("/")}>Back</Button>
            </div>
        </Container>
    )
};

export default MMentalesDet;
