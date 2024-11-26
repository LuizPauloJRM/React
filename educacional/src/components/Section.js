import React from 'react';

const Section = () => {
  return (
    <section className="py-10 px-4 text-center">
      <div className="flex flex-col items-start">
        {/* Logo/Título grande à esquerda */}
        <h1 className="text-5xl font-bold mb-6">...</h1>

        {/* Botões abaixo da logo */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-800">
            Professores
          </button>
          <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-800">
            Alunos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
