// src/components/AlunoList.tsx
import React, { useEffect, useState } from 'react';
import { getAlunos } from '../services/AlunoService';

const AlunoList: React.FC = () => {
  const [alunos, setAlunos] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const data = await getAlunos();
      setAlunos(data);
    };
    fetchAlunos();
  }, []);

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno.nome} - {aluno.idade}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
