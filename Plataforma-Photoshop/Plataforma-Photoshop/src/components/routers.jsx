import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Corrigido o caminho
import Desafios from "../pages/Desafios"; // Corrigido o caminho
import Rankings from "../pages/Rankings"; // Corrigido o caminho
import Regras from "../pages/Regras"; // Corrigido o caminho
import Perfil from "../pages/Perfil"; // Corrigido o caminho
import Cadastrar from "../pages/Cadastrar"; // Corrigido o caminho
import Login from "../pages/Login"; // Nova rota
import Cadastro from "../pages/Cadastro"; // Nova rota


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desafios" element={<Desafios />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/regras" element={<Regras />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
    </Routes>
  );
}

export default AppRoutes;