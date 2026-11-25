export const PASSOS = [
  {
    id: "meta",
    titulo: "Qual é o seu objetivo principal?",
    opcoes: [
      { valor: "ganhar_musculos", titulo: "Ganhar massa muscular", desc: "Aumentar músculos e volume" },
      { valor: "perder_gordura", titulo: "Perder gordura", desc: "Reduzir o percentual de gordura" },
      { valor: "definir", titulo: "Definir o corpo", desc: "Menos gordura e músculos mais visíveis" },
      { valor: "ganhar_forca", titulo: "Ganhar força", desc: "Levantar cargas cada vez maiores" },
      { valor: "entrar_em_forma", titulo: "Entrar em forma", desc: "Mais saúde e disposição" },
    ],
  },
  {
    id: "desafio",
    titulo: "O que mais atrapalha o seu treino hoje?",
    opcoes: [
      { valor: "nao_sei_treinar", titulo: "Não sei o que treinar", desc: "Tenho dúvida na hora de escolher os exercícios" },
      { valor: "sem_resultados", titulo: "Não vejo resultados", desc: "Sinto que minha evolução está parada" },
      { valor: "execucao", titulo: "Dúvida na execução", desc: "Quero ter certeza de que faço o movimento certo" },
      { valor: "constancia", titulo: "Manter a constância", desc: "Começo bem, mas acabo parando" },
      { valor: "monotonia", titulo: "Treinos repetitivos", desc: "Faço sempre os mesmos exercícios" },
      { valor: "equipamentos", titulo: "Falta de equipamentos", desc: "Nem sempre tenho tudo disponível" },
    ],
  },
  {
    id: "musculo",
    titulo: "Qual músculo você quer priorizar?",
    colunas: 2,
    opcoes: [
      { valor: "equilibrado", titulo: "Equilibrado" },
      { valor: "peito", titulo: "Peito" },
      { valor: "costas", titulo: "Costas" },
      { valor: "bracos", titulo: "Braços" },
      { valor: "pernas", titulo: "Pernas" },
      { valor: "abdomen", titulo: "Abdômen" },
      { valor: "gluteos", titulo: "Glúteos" },
    ],
  },
  {
    id: "cardio",
    titulo: "Quer incluir cardio nos seus treinos?",
    opcoes: [
      { valor: "incluir", titulo: "Sim, incluir cardio", desc: "Esteira, bicicleta, elíptico e similares" },
      { valor: "sem", titulo: "Sem cardio por enquanto", desc: "Foco apenas na musculação" },
    ],
  },
  {
    id: "experiencia",
    titulo: "Qual é a sua experiência com treino?",
    opcoes: [
      { valor: "zero", titulo: "Estou começando", desc: "Nunca treinei ou voltei agora" },
      { valor: "iniciante", titulo: "Iniciante", desc: "Treino há alguns meses" },
      { valor: "intermediario", titulo: "Intermediário", desc: "Treino há mais de um ano" },
      { valor: "avancado", titulo: "Avançado", desc: "Treino há vários anos e conheço bem meus limites" },
    ],
  },
  {
    id: "academia",
    titulo: "Como é a sua academia?",
    opcoes: [
      { valor: "basica", titulo: "Academia básica", desc: "Halteres, barras e bancos" },
      { valor: "equipada", titulo: "Academia completa", desc: "Máquinas e grande variedade de equipamentos" },
    ],
  },
  {
    id: "frequencia",
    titulo: "Quantos dias por semana pretende treinar?",
    opcoes: [
      { valor: "leve", titulo: "1 a 2 dias", desc: "Rotina leve" },
      { valor: "moderado", titulo: "3 a 5 dias", desc: "Rotina moderada" },
      { valor: "intenso", titulo: "6 a 7 dias", desc: "Rotina intensa" },
    ],
  },
];

export const CONDICOES = [
  { id: "joelho", nome: "Dor ou lesão no joelho" },
  { id: "ombro", nome: "Dor ou lesão no ombro" },
  { id: "lombar", nome: "Dor lombar ou problema na coluna" },
  { id: "cardiaco", nome: "Problema cardíaco ou pressão alta" },
  { id: "diabetes", nome: "Diabetes" },
  { id: "respiratorio", nome: "Problema respiratório (ex.: asma)" },
  { id: "outra", nome: "Outra condição" },
];