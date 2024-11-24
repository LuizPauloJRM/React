// src/components/AlunoForm.tsx
import React, { useState } from 'react';
import { addAluno } from '../services/AlunoService';

const AlunoForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState<number | string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof idade === 'number' && nome.trim()) {
      const newAluno = { nome, idade };
      const response = await addAluno(newAluno);
      if (response) {
        setNome('');
        setIdade('');
        alert('Aluno adicionado com sucesso!');
      } else {
        alert('Erro ao adicionar aluno');
      }
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(Number(e.target.value))}
        placeholder="Idade"
        required
      />
      <button type="submit">Adicionar Aluno</button>
    </form>
  );
};

export default AlunoForm;
