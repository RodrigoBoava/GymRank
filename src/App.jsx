import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Calorias from "./pages/Calorias";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Painel from "./pages/Painel";
import { NOME_APP } from "./lib/marca";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/calorias" element={<Calorias />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/painel" element={<Painel />} />
        </Routes>
      </div>
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © 2026 {NOME_APP}. Todos os direitos reservados.
      </footer>
    </div>
  );
}