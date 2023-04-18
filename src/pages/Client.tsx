import { ContainerMain } from "../components/home/HomeStyles";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import { ConatinerContact, SectionLogin } from "./LoginStyles";

const Client = () => {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [plate, setPlate] = useState("");

  const submit= (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

    if (!name || !cpf || !plate) {
      return alert("Preencha todos os campos");
    }

    if(cpf.trim().length < 11 ) {
      return alert("Cpf inválido, digite um formato válido")
    }


  };
  return (
    <ContainerMain>
      <ConatinerContact>
        <h2>Seja bem Vindo!</h2>
        <p>Preencha os campos para realizar o cadastro</p>
        <form onSubmit={submit}>
          <SectionLogin>

            <TextField
              label="Nome"
              variant="outlined"
            
              fullWidth
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              label="CPF"
              variant="outlined"
          
              fullWidth
              value={cpf}
              onChange={(e)=>setCPF(e.target.value)}
            />
            <TextField
              label="Placa Do Veículo"
              variant="outlined"
          
              fullWidth
               value={plate}
              onChange={(e)=>setPlate(e.target.value)}  
            />

            <button  type="submit">Cadastrar</button>
          </SectionLogin>
        </form>
      </ConatinerContact>
    </ContainerMain>
  );
};

export default Client;
