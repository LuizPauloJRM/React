// src/App.tsx
import React from 'react';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Gestão de Alunos</h1>
      <AlunoForm />
      <AlunoList />
    </div>
  );
}

export default App;
