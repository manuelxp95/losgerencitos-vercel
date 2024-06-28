import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import meliMcGonagall from '../../images/miembro1.jpeg';
import { useNavigate } from "react-router-dom";

const InfografiaDetalle = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo justify-content-center mt-3 pb-3">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="video-container">
                    <iframe 
                        src="https://www.canva.com/design/DAGJX9Xkny0/meNho6mA2L3j_Gq7nXveCg/view?embed" 
                        title="PDF Viewer" 
                        width="90%" 
                        height="1000px" 
                        allow="autoplay"
                    ></iframe>
                </div>
            </Row>
            <div className="text-center mt-3 pb-3">
                <Button variant="btn btn-primary" onClick={() => navigate("/desafios")}>Back</Button>
            </div>
        </Container>
    )
};

export default InfografiaDetalle;