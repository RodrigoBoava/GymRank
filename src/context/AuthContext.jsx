import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

async function buscarPerfil() {
  const { data } = await supabase.from("perfis").select("*").maybeSingle();
  return data ?? null;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [perfil, setPerfil] = useState(null);
  const [perfilCarregando, setPerfilCarregando] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setCarregando(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_evento, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const uid = user?.id;

  useEffect(() => {
    let ativo = true;
    if (!uid) {
      setPerfil(null);
      setPerfilCarregando(false);
      return;
    }
    setPerfilCarregando(true);
    buscarPerfil().then((p) => {
      if (ativo) {
        setPerfil(p);
        setPerfilCarregando(false);
      }
    });
    return () => {
      ativo = false;
    };
  }, [uid]);

  const recarregarPerfil = useCallback(async () => setPerfil(await buscarPerfil()), []);
  const sair = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider value={{ user, carregando, sair, perfil, perfilCarregando, recarregarPerfil }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}