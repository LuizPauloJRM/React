import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">MinhaLogo</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="home-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/desafios">Desafios</Link>
          </li>
          <li>
            <Link to="/ranking">Rankings</Link>
          </li>
          <li>
            <Link to="/regras">Regras</Link>
          </li>
          <li>
            <Link to="/perfil" className="profile-link">
              <i className="fas fa-user"></i> Perfil
            </Link>
          </li>
        </ul>
        <ul className="nav-actions">
          <li>
            <Link to="/login" className="btn">Entrar</Link>
          </li>
          <li>
            <Link to="/cadastro" className="btn">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;