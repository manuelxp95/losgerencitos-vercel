import React, { useState } from 'react';
import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import mapmental1 from '../../images/MentalUnidad1.png';
import mapmentalramirez from '../../images/MapaRamirez.jpg';
import mapmentalmelina from '../../images/MapaMelina.webp';


const MMentalesDet = () => {
    const navigate = useNavigate();
    const [fullscreen, setFullscreen] = useState({ map1: false, map2: false, map3: false });

    const toggleFullscreen = (map) => {
        setFullscreen({ ...fullscreen, [map]: !fullscreen[map] });
    };

    return (
        <Container fluid className="main-container">
            <Row className="group-logo justify-content-center mt-3 pb-3">
                <Logo />
            </Row>

            {/* T�tulo para la primera imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Mapa Manuel Ortiz</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.map1 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('map1')}>
                            <img src={mapmental1} alt="Mapa Mental Unidad 1" />
                        </div>
                    )}
                    {!fullscreen.map1 && (
                        <img
                            src={mapmental1}
                            alt="Mapa Mental Unidad 1"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('map1')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            {/* T�tulo para la segunda imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Mapa Christian Ramirez</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.map2 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('map2')}>
                            <img src={mapmentalramirez} alt="Mapa Mental Ramirez" />
                        </div>
                    )}
                    {!fullscreen.map2 && (
                        <img
                            src={mapmentalramirez}
                            alt="Mapa Mental Ramirez"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('map2')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            {/* T�tulo para la tercera imagen */}
            <Row className="justify-content-center mt-3 pb-3">
                <h3 style={{ color: 'white' }}>Mapa Melina Teruel Alonso</h3>
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="image-container text-center">
                    {fullscreen.map3 && (
                        <div className="fullscreen-overlay" onClick={() => toggleFullscreen('map3')}>
                            <img src={mapmentalmelina} alt="Mapa Mental Melina" />
                        </div>
                    )}
                    {!fullscreen.map3 && (
                        <img
                            src={mapmentalmelina}
                            alt="Mapa Mental Melina"
                            width="90%"
                            height="auto"
                            onClick={() => toggleFullscreen('map3')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>
            </Row>

            <div className="text-center mt-3 pb-3">
                <Button variant="btn btn-primary" onClick={() => navigate("/mapmentales")}>Back</Button>
            </div>
        </Container>
    )
};

export default MMentalesDet;
