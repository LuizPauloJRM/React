import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="minimal-header">
      <div className="logo">LOGO</div>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/entrar" className="btn">Entrar</Link>
      </nav>
    </header>
  );
}

export default Header;
