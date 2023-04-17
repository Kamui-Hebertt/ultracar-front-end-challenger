import { Link } from "react-router-dom";

import logo from '../../assets/Logo-Nova-04.png';

import { ContainerHeader, ImgLogo,} from './HeaderStyle';

const Header:React.FC = () => {

  return (
  
    <ContainerHeader>
      <Link 
        to='/'
      >
        <ImgLogo
          src={ logo } 
          alt='logo'
        />      
      </Link>
      {/* <Hamburgue /> */}
    </ContainerHeader>
  )
}

export default Header;
