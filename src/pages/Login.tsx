import { ContainerMain } from "../components/home/HomeStyles";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import qrCode from "../assets/qrcode.png";
import styled from "styled-components";
import { ConatinerContact, SectionLogin } from "./LoginStyles";
import { useNavigate } from "react-router-dom";






const Login = () => {
  const [qrcodeORcpf, SetqrcodeORcpf] = useState<string>("");

  const  navigate = useNavigate();

  const loginFunc = (id:string) => {
    // verificação
      navigate(`/login/${id}`);

  }

  return (
    <ContainerMain>
      <ConatinerContact>
        <h2>Seja bem Vindo!</h2>
        <p>Insira o seu cpf ou scaneie o seu qr code para fazer login</p>
        <form onSubmit={()=>loginFunc(qrcodeORcpf)}>
          <SectionLogin>
           
            <TextField
              label="Cpf/Qr code"
              variant="outlined"
              required
              fullWidth
              value={qrcodeORcpf}
              onChange={(e) => {
                SetqrcodeORcpf(e.target.value);
              }}
            />
            <img src={qrCode} alt="QR code" />
            <button type="submit">Entrar</button>
          </SectionLogin>
        </form>
      </ConatinerContact>
    </ContainerMain>
  );
};

export default Login;
