import React, { useState } from "react";
import axios from "axios";
import "./BuscaCep.css";
import { api } from "../../config/api";
import { Address } from "./types";

const FindCep = () => {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFind = async (event: React.FormEvent) => {
    event.preventDefault();
    // Reset error and address state
    setError(null);
    setAddress(null);

    // Validate CEP format
    const cepPattern = /^\d{8}$/;
    if (!cepPattern.test(cep)) {
      setError("CEP inválido. Deve conter exatamente 8 dígitos numéricos.");
      return;
    }

    try {
      console.log(cep);
      const response = await api.get(`cep/${cep}`);
      setAddress(response.data);
    } catch (error) {
      console.error(error);
      setError("Erro ao buscar o endereço. Por favor, tente novamente.");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    // Allow only digits and control keys
    if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h1>Buscar Endereço por CEP</h1>
      <form onSubmit={handleFind} className="form">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite o CEP"
          maxLength={8}
          minLength={8}
          pattern="\d*"
          required
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p className="error">{error}</p>}
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
