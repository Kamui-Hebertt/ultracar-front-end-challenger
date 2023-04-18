import { ContainerMain } from "../components/home/HomeStyles";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ConatinerContact, SectionLogin } from "./LoginStyles";

const Client = () => {
  const [name, setName] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [plate, setPlate] = useState<string>("");
  const [qrCode, setCode] = useState<string>("");
  const [sign, setSign] = useState<boolean>(false);

  const generateCode = () => {
    const length = 15;
    let code = "";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      code += chars[randomIndex];
    }
    return code;
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !cpf || !plate) {
      return alert("Preencha todos os campos");
    }

    if (cpf.trim().length < 11) {
      return alert("Cpf inválido, digite um formato válido");
    }

     if (!/^[0-9-]+$/.test(cpf)) {
    return alert('formato de cpf inválido, digite números com "-"');
  }

    let code = generateCode();
    setCode(code);
    setSign(true);
    console.log(qrCode);
  };
  return (
    <ContainerMain>
      {!sign || (
        <p>
          Cadastro realizado com sucesso, seu codigo de QR code ou login é :{" "}
          {qrCode}
        </p>
      )}

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
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="CPF"
              variant="outlined"
              fullWidth
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
            />
            <TextField
              label="Placa Do Veículo"
              variant="outlined"
              fullWidth
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </SectionLogin>
        </form>
      </ConatinerContact>
    </ContainerMain>
  );
};

export default Client;
