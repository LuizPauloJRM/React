import React from "react";

function Contato() {
  return (
    <section>
      <h1>Entre em Contato</h1>
      <p>Envie suas dúvidas, sugestões ou feedback para nossa equipe!</p>
      <form>
        <input type="text" placeholder="Seu nome" /><br />
        <input type="email" placeholder="Seu e-mail" /><br />
        <textarea placeholder="Sua mensagem"></textarea><br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
