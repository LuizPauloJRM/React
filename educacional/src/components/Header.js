import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 relative">
      <h1 className="text-4xl font-bold text-center">...</h1>
      <div className="absolute top-4 right-4">
        <button className="bg-transparent text-white border-2 border-white py-2 px-4 rounded mr-2 hover:bg-white hover:text-blue-600">
          Login
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
          Cadastro
        </button>
      </div>
    </header>
  );
};

export default Header;
