import Logo from "../Logo/Logo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import meliMcGonagall from '../../images/miembro1.jpeg';
import mapmental1 from '../../images/MentalUnidad1.png';

import { useNavigate } from "react-router-dom";

const MMentalesDet = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="main-container">
            <Row className="group-logo justify-content-center mt-3 pb-3">
                <Logo />
            </Row>
            <Row className="justify-content-center mt-3 pb-3">
            <div className="image-container text-center">
            <img
                src= {mapmental1}
                alt="Imagen desde Google Drive"
                width="90%"
                height="auto"
            />
            </div>
            </Row>
            <div className="text-center mt-3 pb-3">
                <Button variant="btn btn-primary" onClick={() => navigate("/mapmentales")}>Back</Button>
            </div>
        </Container>
    )
};

export default MMentalesDet;
