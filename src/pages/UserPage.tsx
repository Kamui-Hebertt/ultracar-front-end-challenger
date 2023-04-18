import { ContainerMain } from "../components/home/HomeStyles";
import React, { useState } from "react";
import { ConatinerContact, SectionLogin } from "./LoginStyles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [qrcodeORcpf, SetqrcodeORcpf] = useState<string>("");

  return (
    <ContainerMain>
      <ConatinerContact>
        <h2>Seja bem Vindo!</h2>
      </ConatinerContact>
    </ContainerMain>
  );
};

export default Login;
