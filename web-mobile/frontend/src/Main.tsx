const Main: React.FC = () => {
    return (
      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Seção de Busca */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Encontre a Aula Perfeita</h2>
            <input
              type="text"
              placeholder="Pesquisar por assunto..."
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
  
          {/* Lista de Aulas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exemplo de Cartão de Aula */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800">Programação para Iniciantes</h3>
              <p className="text-gray-600 mt-2">Duração: 2 horas</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Ver mais</button>
            </div>
            {/* Adicione mais cartões conforme necessário */}
          </div>
        </div>
      </main>
    );
  };
  
  export default Main;
  