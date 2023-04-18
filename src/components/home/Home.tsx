import { ContainerMain, SignUpBtn, TextPhrase, DivSet, SignInBtn } from "./HomeStyles"
import mainPhoto from "../../assets/logo_ultracar_slogan_front.png";
import { MainLogo } from '../header/HeaderStyle';

import { useNavigate } from 'react-router-dom';

const Home:React.FC = () => {

  const historyN = useNavigate();

  const handleButtonClick = () => {
  
    historyN('/client');
  };

   const handleButtonClickLogin = () => {
  
    historyN('/login');
  };

 

  return(
    <ContainerMain>
      
      <MainLogo src={mainPhoto} alt="main" />
      <DivSet>
      <TextPhrase> Administre sua oficina pelo Ultracarweb
        de forma fácil e faça ela dar lucro.</TextPhrase>
      <SignInBtn onClick={handleButtonClickLogin}>Acesse sua conta</SignInBtn>
      <SignUpBtn onClick={handleButtonClick}>Cadastrar</SignUpBtn>
      </DivSet>
    </ContainerMain>
  )
}

export default Home;