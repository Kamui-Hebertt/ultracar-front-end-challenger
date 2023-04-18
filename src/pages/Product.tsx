import { ContainerMain } from "../components/home/HomeStyles";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ConatinerContact, SectionLogin } from "./LoginStyles";

// import { costumers } from "../mocks/ClientsData";
// import { IClientData } from "../intefaces/IClientData";
// import DataRegistry from '../helpers/RegisterClient';

const Product = () => {
  // const UserRegistry = new DataRegistry();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const [qrCode, setCode] = useState<string>("");
  const [sign, setSign] = useState<boolean>(false);

  
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

 

    setSign(true);
    console.log(qrCode);
    // UserRegistry.register(name, code, cpf);
   
    
   

  };
  return (
    <ContainerMain>
      <ConatinerContact>
        <h2>Seja bem Vindo!</h2>

        <p>Preencha os campos para cadastrar um produto</p>
        <form>
          <SectionLogin>
            <TextField
              label="Nome do produto"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

              <TextField
              label="Preço"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

         
            <button type="submit">Cadastrar</button>

            </SectionLogin>
        </form>
      </ConatinerContact>
    </ContainerMain>
  );
};

export default Product;
