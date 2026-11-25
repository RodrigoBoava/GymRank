import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Calorias from "./pages/Calorias";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Painel from "./pages/Painel";
import Exercicios from "./pages/Exercicios";
import Treino from "./pages/Treino";
import Perfil from "./pages/Perfil";
import Onboarding from "./pages/Onboarding";
import { useAuth } from "./context/AuthContext";
import { jaPulou } from "./lib/onboarding";

const ENTRADAS = ["/", "/painel", "/login", "/cadastro"];

// Quem ainda não respondeu o questionário é levado até ele ao entrar no site
function GuardaOnboarding() {
  const { user, perfil, perfilCarregando } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || perfilCarregando || perfil?.onboarding_concluido || jaPulou()) return;
    if (ENTRADAS.includes(pathname)) navigate("/boas-vindas", { replace: true });
  }, [user, perfil, perfilCarregando, pathname, navigate]);

  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-dvh flex-col bg-ink-950 pb-20 text-white md:pb-0">
        <GuardaOnboarding />
        <Navbar />

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/calorias" element={<Calorias />} />
                <Route path="/exercicios" element={<Exercicios />} />
                <Route path="/treino" element={<Treino />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/boas-vindas" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/painel" element={<Painel />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>

        <Rodape />
        <BottomNav />
      </div>
    </MotionConfig>
  );
}