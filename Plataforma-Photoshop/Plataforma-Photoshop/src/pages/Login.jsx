import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <h2>Entrar</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Digite seu email" />
        </label>
        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;