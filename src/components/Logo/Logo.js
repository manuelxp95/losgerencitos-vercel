import logo from "../../images/GerencitosLogo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo"  onClick={() => navigate('/')} />
        </div>
    )
}

export default Logo;