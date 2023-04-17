import { Link } from "react-router-dom";
import logo from "../../assets/cabecalho.png";
import { ContainerHeader } from "./HeaderStyle";
import Hamburger from "./Hamburger";
import { ImgLogo } from "./HeaderStyle";

const Header: React.FC = (): JSX.Element => {
  return (
    <ContainerHeader>
      <Link to="/">
        <ImgLogo src={logo} alt="logo" />
      </Link>

      <Hamburger />
    </ContainerHeader>
  );
};

export default Header;
