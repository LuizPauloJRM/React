// src/App.tsx
import React from 'react';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header bg-purple-500 text-white p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Gestão de Alunos</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="main bg-gray-100 p-8">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-4">Cadastro de Alunos</h2>
          <AlunoForm /> {/* Componente para cadastrar aluno */}
          
          <h2 className="text-2xl mt-8 mb-4">Lista de Alunos</h2>
          <AlunoList /> {/* Componente para listar alunos */}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer bg-purple-500 text-white p-4 text-center">
        <p>&copy; 2024 Gestão de Alunos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
