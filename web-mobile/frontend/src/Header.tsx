import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <span>Logo</span> {/* Substitua por um logo real */}
        </div>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#aulas" className="hover:text-gray-200">Aulas</a>
          <a href="#contato" className="hover:text-gray-200">Contato</a>
        </nav>
        <div>
          <button className="bg-green-500 px-4 py-2 rounded-lg mr-2 hover:bg-green-600">Login</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">Cadastro</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
