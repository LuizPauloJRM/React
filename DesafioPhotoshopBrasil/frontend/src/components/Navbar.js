import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">DPB - Desafios Photoshop Brasil</div>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/desafios" className="hover:text-gray-400">Desafios</Link></li>
        <li><Link to="/ranking" className="hover:text-gray-400">Ranking</Link></li>
        <li><Link to="/regras" className="hover:text-gray-400">Regras</Link></li>
        <li><Link to="/login" className="hover:text-green-400">Entrar</Link></li>
        <li><Link to="/cadastro" className="hover:text-green-400">Cadastrar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
