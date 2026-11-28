import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Rodape from "./components/Rodape";
import RotaPrivada from "./components/RotaPrivada";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Calorias from "./pages/Calorias";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Painel from "./pages/Painel";
import Exercicios from "./pages/Exercicios";
import Treino from "./pages/Treino";
import Ficha from "./pages/Ficha";
import Perfil from "./pages/Perfil";
import Onboarding from "./pages/Onboarding";
import NaoEncontrada from "./pages/NaoEncontrada";
import { useAuth } from "./context/AuthContext";
import { supabase } from "./lib/supabase";
import { jaPulou, onboardingCompleto } from "./lib/onboarding";

const ENTRADAS = ["/", "/painel", "/login", "/cadastro"];

// Quem ainda não respondeu o questionário é levado até ele UMA vez, ao entrar no site.
// A decisão vem do banco (e não só do estado em memória), então não se repete a cada login.
function GuardaOnboarding() {
  const { user, perfil } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !ENTRADAS.includes(pathname)) return;
    if (jaPulou(user.id) || onboardingCompleto(perfil)) return;

    let cancelado = false;
    supabase
      .from("perfis")
      .select("onboarding_concluido,sexo,data_nascimento,peso_kg,altura_cm")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelado || error) return; // em caso de erro, não incomoda o usuário
        if (!onboardingCompleto(data)) navigate("/boas-vindas", { replace: true });
      });
    return () => {
      cancelado = true;
    };
  }, [user, perfil, pathname, navigate]);

  return null;
}

const privada = (elemento) => <RotaPrivada>{elemento}</RotaPrivada>;

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
                <Route path="/exercicios" element={<Exercicios />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/calorias" element={<Calorias />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/painel" element={privada(<Painel />)} />
                <Route path="/treino" element={privada(<Treino />)} />
                <Route path="/ficha" element={privada(<Ficha />)} />
                <Route path="/perfil" element={privada(<Perfil />)} />
                <Route path="/boas-vindas" element={<Onboarding />} />

                <Route path="*" element={<NaoEncontrada />} />
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