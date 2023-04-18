import { ContainerMain } from "../components/home/HomeStyles";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import qrCode from '../assets/qrcode.png';
import styled from "styled-components";
import { ConatinerContact,  SectionLogin} from './LoginStyles';

const Login = () => {

  const [qrcodeORcpf, SetqrcodeORcpf] = useState('');



  const TextFieldContainer = styled.input`
  /* Add your styles here */
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;



  return(
    <ContainerMain>
     <ConatinerContact>
      
        <h2>Seja bem Vindo!</h2>
        <p>Insira o seu cpf ou scaneie o seu qr code para fazer login</p>
      <form>
        <SectionLogin>
      <TextField
        label="Cpf/Qr code"
        variant="outlined"
        required
        fullWidth
        value={qrcodeORcpf}
        // onChange={()=> {SetqrcodeORcpf()}}
        
      />
      <img  src={qrCode} alt="QR code" />
      <button>Entrar</button> 
      </SectionLogin>
    </form>
    </ConatinerContact>
    </ContainerMain>
  )
}

export default Login;