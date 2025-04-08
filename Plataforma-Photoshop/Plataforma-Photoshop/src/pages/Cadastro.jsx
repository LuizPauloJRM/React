import React from "react";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="cadastro-page">
      <h2>Cadastrar</h2>
      <form>
        <label>
          Nome:
          <input type="text" placeholder="Digite seu nome" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Digite seu email" />
        </label>
        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;