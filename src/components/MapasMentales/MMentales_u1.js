import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import meliMcGonagall from '../../images/miembro1.jpeg';
import { useNavigate } from "react-router-dom";

const MMentalesDet = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo justify-content-center mt-3 pb-3">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
                <div className="video-container">
                    <iframe 
                        src="https://drive.google.com/file/d/1sMpVpmGrZ66yKjsmn1EUxwQWHJZOETqZ/view?usp=sharing" 
                        title="PDF Viewer" 
                        width="90%" 
                        height="1000px" 
                        allow="autoplay"
                    ></iframe>
                </div>
            </Row>
            <div className="text-center mt-3 pb-3">
                <Button variant="btn btn-primary" onClick={() => navigate("/mapmentales")}>Back</Button>
            </div>
        </Container>
    )
};

export default MMentalesDet;
