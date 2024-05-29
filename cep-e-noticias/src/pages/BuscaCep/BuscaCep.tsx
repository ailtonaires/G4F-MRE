import React, { useState } from "react"
import { api } from "../../config/api";
import { Address } from "./types";
import "./BuscaCep.css";

const FindCep = () => {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFind = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setAddress(null);

    const cepPattern = /^\d{8}$/;
    if (!cepPattern.test(cep)) {
      setError("CEP inválido. Deve conter exatamente 8 dígitos numéricos.");
      return;
    }

    try {
      const response = await api.get(`cep/${cep}`);
      setAddress(response.data);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (
      !/^\d$/.test(key) &&
      key !== "Backspace" &&
      key !== "Tab" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h1 className="title">Buscar CEP</h1>
      <form onSubmit={handleFind} className="form">
        <input
        className="input-cep"
          type="text"
          value={cep}
          onChange={(e) => {setCep(e.target.value); setError(null)}}
          onKeyDown={handleKeyDown}
          placeholder="Digite o CEP"
          maxLength={8}
          minLength={8}
          pattern="\d*"
          required
        />
        <button type="submit" className="button-cep">Buscar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {address && (
        <div className="address">
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
