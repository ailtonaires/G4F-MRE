import React, { useState } from "react";
import axios from "axios";
import "./BuscaCep.css";
import { api } from "../../config/api";

const FindCep = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    logradouro: new String(),
    bairro: new String(),
    localidade: new String(),
    uf: new String(),
  });

  const handleFind = async () => {
    try {
      const response = await api.get(`cep/${cep}`);
      setAddress(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Buscar Endereço por CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleFind}>Buscar</button>
      {address && (
        <div>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default FindCep;
