import { Link } from "react-router-dom";
import logo from "../../assets/cabecalho.png";
import letters from "../../assets/logo_ultracar_slogan_front.png";
import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./HeaderStyle";
import Hamburger from "./Hamburger";
import { ImgLogo, ImgLogo2 } from "./HeaderStyle";

const Header: React.FC = (): JSX.Element => {
  return (
    <ContainerHeader>
      <Link to="/">
        <ImgLogo src={logo} alt="logo" />
      </Link>
      
      <Link to="/">
        <ImgLogo2 src={letters} alt="logo" />
      </Link>

      <Hamburger />
    </ContainerHeader>
  );
};

export default Header;
