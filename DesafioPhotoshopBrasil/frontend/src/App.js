import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16 p-4">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/desafios" element={<h1>Desafios</h1>} />
          <Route path="/ranking" element={<h1>Ranking</h1>} />
          <Route path="/regras" element={<h1>Regras</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
