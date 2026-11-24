export const DIAS = [
  { id: "seg", curto: "Seg", nome: "Segunda-feira" },
  { id: "ter", curto: "Ter", nome: "Terça-feira" },
  { id: "qua", curto: "Qua", nome: "Quarta-feira" },
  { id: "qui", curto: "Qui", nome: "Quinta-feira" },
  { id: "sex", curto: "Sex", nome: "Sexta-feira" },
  { id: "sab", curto: "Sáb", nome: "Sábado" },
  { id: "dom", curto: "Dom", nome: "Domingo" },
];

export const GRUPOS = [
  {
    id: "perna",
    nome: "Perna",
    subgrupos: [
      {
        id: "quadriceps",
        nome: "Quadríceps",
        exercicios: [
          "Agachamento livre com barra", "Agachamento frontal", "Agachamento no Smith",
          "Agachamento hack", "Agachamento pêndulo", "Agachamento no cinto (belt squat)",
          "Agachamento goblet", "Agachamento búlgaro", "Agachamento sissy",
          "Agachamento unilateral (pistol)", "Agachamento com salto",
          "Leg press 45°", "Leg press horizontal", "Leg press unilateral",
          "Cadeira extensora", "Cadeira extensora unilateral",
          "Afundo (passada estacionária)", "Avanço (passada andando)", "Avanço reverso",
          "Avanço no Smith", "Subida no banco (step-up)",
        ],
      },
      {
        id: "posterior",
        nome: "Posterior de coxa",
        exercicios: [
          "Mesa flexora", "Cadeira flexora", "Flexora em pé (unilateral)",
          "Flexora com bola suíça", "Flexora deslizante", "Flexão nórdica (nordic curl)",
          "Glute-ham raise (GHD)", "Stiff com barra", "Stiff com halteres", "Stiff unilateral",
          "Levantamento terra romeno", "Levantamento terra convencional",
          "Levantamento terra sumô", "Levantamento terra com barra hexagonal",
          "Bom dia (good morning)", "Pull-through no cabo", "Swing com kettlebell",
        ],
      },
      {
        id: "gluteos",
        nome: "Glúteos",
        exercicios: [
          "Elevação pélvica com barra (hip thrust)", "Elevação pélvica na máquina",
          "Elevação pélvica unilateral", "Ponte de glúteos", "Ponte de glúteos unilateral",
          "Cadeira abdutora", "Abdução de quadril no cabo", "Coice na polia",
          "Coice na máquina", "Coice quatro apoios com caneleira", "Hidrante (fire hydrant)",
          "Caminhada lateral com elástico",
        ],
      },
      {
        id: "adutores",
        nome: "Adutores",
        exercicios: [
          "Cadeira adutora", "Adução de quadril no cabo", "Agachamento sumô",
          "Afundo lateral", "Prancha Copenhagen",
        ],
      },
      {
        id: "panturrilhas",
        nome: "Panturrilhas e tibial",
        exercicios: [
          "Panturrilha em pé na máquina", "Panturrilha em pé no Smith",
          "Panturrilha sentada (sóleo)", "Panturrilha no leg press",
          "Panturrilha unilateral com halter", "Panturrilha no burrinho (donkey)",
          "Panturrilha no degrau (peso corporal)", "Tibial anterior (dorsiflexão)",
        ],
      },
    ],
  },
  {
    id: "peito",
    nome: "Peito",
    subgrupos: [
      {
        id: "superior",
        nome: "Peitoral superior (porção clavicular)",
        exercicios: [
          "Supino inclinado com barra", "Supino inclinado com halteres",
          "Supino inclinado no Smith", "Supino inclinado na máquina",
          "Crucifixo inclinado com halteres", "Crucifixo inclinado no cabo",
          "Crossover polia baixa (baixo para cima)",
        ],
      },
      {
        id: "medio",
        nome: "Peitoral médio (porção esternal)",
        exercicios: [
          "Supino reto com barra", "Supino reto com halteres", "Supino reto no Smith",
          "Supino reto na máquina (chest press)", "Supino articulado (convergente)",
          "Supino no chão (floor press)", "Supino com pegada neutra (halteres)",
          "Svend press", "Crucifixo reto com halteres", "Crucifixo na máquina (peck deck)",
          "Crossover polia média",
        ],
      },
      {
        id: "inferior",
        nome: "Peitoral inferior (porção costal)",
        exercicios: [
          "Supino declinado com barra", "Supino declinado com halteres",
          "Supino declinado no Smith", "Supino declinado na máquina",
          "Crucifixo declinado com halteres", "Crossover polia alta (cima para baixo)",
          "Mergulho nas paralelas (foco em peito)",
          "Mergulho assistido na máquina (foco em peito)",
        ],
      },
      {
        id: "peso-corporal",
        nome: "Flexões e peso corporal",
        exercicios: [
          "Flexão de braço tradicional", "Flexão com pés elevados", "Flexão com mãos elevadas",
          "Flexão aberta", "Flexão archer", "Flexão com palmas", "Flexão no TRX",
          "Flexão com instabilidade (bola/bosu)",
        ],
      },
    ],
  },
  {
    id: "costas",
    nome: "Costas",
    subgrupos: [
      {
        id: "largura",
        nome: "Largura (dorsais: puxadas)",
        exercicios: [
          "Barra fixa pronada", "Barra fixa supinada (chin-up)", "Barra fixa pegada neutra",
          "Barra fixa assistida na máquina", "Barra fixa com peso",
          "Puxada frontal pegada aberta", "Puxada frontal pegada fechada (triângulo)",
          "Puxada frontal supinada", "Puxada frontal pegada neutra",
          "Puxada unilateral na polia", "Puxada atrás da nuca",
          "Puxada articulada na máquina", "Pulldown com braços estendidos",
          "Pullover com halter",
        ],
      },
      {
        id: "espessura",
        nome: "Espessura (remadas)",
        exercicios: [
          "Remada curvada com barra", "Remada curvada supinada", "Remada Pendlay",
          "Remada cavalinho (T-bar)", "Remada Meadows (landmine)",
          "Remada unilateral com halter (serrote)", "Remada baixa no cabo (triângulo)",
          "Remada baixa pegada aberta", "Remada sentada na máquina",
          "Remada com apoio no peito (chest supported)", "Remada no Smith",
          "Remada invertida (barra baixa)", "Remada no TRX", "Remada unilateral na polia",
        ],
      },
      {
        id: "trapezio",
        nome: "Trapézio e romboides",
        exercicios: [
          "Encolhimento com barra", "Encolhimento com halteres", "Encolhimento no Smith",
          "Encolhimento na máquina", "Rack pull", "Elevação em Y (decúbito)",
          "Elevação em T (decúbito)", "Retração escapular na barra fixa",
        ],
      },
      {
        id: "lombar",
        nome: "Lombar (eretores da espinha)",
        exercicios: [
          "Hiperextensão no banco romano", "Hiperextensão a 45°", "Hiperextensão reversa",
          "Extensão lombar na máquina", "Superman (peso corporal)",
        ],
      },
    ],
  },
  {
    id: "ombro",
    nome: "Ombro",
    subgrupos: [
      {
        id: "anterior",
        nome: "Deltoide anterior",
        exercicios: [
          "Desenvolvimento militar em pé com barra", "Desenvolvimento sentado com barra",
          "Desenvolvimento com halteres sentado", "Desenvolvimento Arnold",
          "Desenvolvimento na máquina", "Desenvolvimento no Smith", "Push press",
          "Landmine press", "Elevação frontal com halteres", "Elevação frontal com barra",
          "Elevação frontal com anilha", "Elevação frontal na polia",
          "Flexão em parada de mão",
        ],
      },
      {
        id: "lateral",
        nome: "Deltoide lateral",
        exercicios: [
          "Elevação lateral com halteres", "Elevação lateral sentado",
          "Elevação lateral unilateral na polia", "Elevação lateral na máquina",
          "Elevação lateral deitado de lado", "Remada alta com barra",
          "Remada alta com halteres", "Remada alta na polia",
        ],
      },
      {
        id: "posterior",
        nome: "Deltoide posterior",
        exercicios: [
          "Crucifixo inverso com halteres", "Crucifixo inverso na máquina",
          "Crucifixo inverso na polia", "Elevação posterior no banco inclinado",
          "Face pull", "Remada aberta para deltoide posterior",
        ],
      },
      {
        id: "manguito",
        nome: "Manguito rotador",
        exercicios: [
          "Rotação externa com halter (deitado)", "Rotação externa no cabo",
          "Rotação interna no cabo", "Rotação externa com elástico",
          "Elevação no plano da escápula (scaption)",
        ],
      },
    ],
  },
  {
    id: "biceps",
    nome: "Bíceps",
    subgrupos: [
      {
        id: "cabeca-longa",
        nome: "Cabeça longa (porção externa)",
        exercicios: [
          "Rosca inclinada com halteres", "Rosca direta pegada fechada",
          "Rosca Bayesian no cabo", "Rosca arrastada (drag curl)",
        ],
      },
      {
        id: "cabeca-curta",
        nome: "Cabeça curta (porção interna)",
        exercicios: [
          "Rosca Scott com barra W", "Rosca Scott com halteres", "Rosca Scott na máquina",
          "Rosca Scott na polia", "Rosca concentrada", "Rosca spider",
          "Rosca direta pegada aberta",
        ],
      },
      {
        id: "geral",
        nome: "Bíceps geral",
        exercicios: [
          "Rosca direta com barra reta", "Rosca direta com barra W",
          "Rosca alternada com halteres", "Rosca simultânea com halteres",
          "Rosca na polia baixa com barra", "Rosca unilateral na polia",
          "Rosca na máquina", "Rosca 21",
        ],
      },
      {
        id: "braquial",
        nome: "Braquial e braquiorradial",
        exercicios: [
          "Rosca martelo com halteres", "Rosca martelo alternada",
          "Rosca martelo na corda (polia)", "Rosca martelo cruzada",
          "Rosca inversa com barra", "Rosca inversa na polia", "Rosca Zottman",
        ],
      },
    ],
  },
  {
    id: "triceps",
    nome: "Tríceps",
    subgrupos: [
      {
        id: "cabeca-longa",
        nome: "Cabeça longa",
        exercicios: [
          "Tríceps francês com halter", "Tríceps francês unilateral",
          "Tríceps francês com barra W", "Tríceps francês na polia (corda)",
          "Tríceps testa com barra W", "Tríceps testa com halteres",
          "Tríceps testa na polia", "Extensão de tríceps na máquina",
        ],
      },
      {
        id: "cabeca-lateral",
        nome: "Cabeça lateral",
        exercicios: [
          "Tríceps pulley com barra reta", "Tríceps pulley com corda",
          "Tríceps pulley com barra V", "Tríceps pulley unilateral", "Supino fechado",
          "Mergulho no banco", "Mergulho nas paralelas (foco em tríceps)",
          "Mergulho assistido na máquina (foco em tríceps)",
          "Mergulho na máquina (dip machine)", "Flexão diamante",
        ],
      },
      {
        id: "cabeca-medial",
        nome: "Cabeça medial",
        exercicios: [
          "Tríceps pulley pegada supinada", "Tríceps coice com halter",
          "Tríceps coice na polia",
        ],
      },
    ],
  },
  {
    id: "antebraco",
    nome: "Antebraço",
    subgrupos: [
      {
        id: "flexores",
        nome: "Flexores do punho",
        exercicios: [
          "Rosca de punho com barra", "Rosca de punho com halteres",
          "Rosca de punho atrás das costas", "Rosca de punho no cabo",
        ],
      },
      {
        id: "extensores",
        nome: "Extensores do punho",
        exercicios: [
          "Rosca de punho inversa com barra", "Rosca de punho inversa com halteres",
          "Extensão de punho no cabo",
        ],
      },
      {
        id: "pegada",
        nome: "Pegada (grip)",
        exercicios: [
          "Suspensão na barra fixa", "Caminhada do fazendeiro",
          "Rolo de punho (wrist roller)", "Pinça com anilha",
          "Pronação e supinação com halter",
        ],
      },
    ],
  },
  {
    id: "abdomen",
    nome: "Abdômen",
    subgrupos: [
      {
        id: "superior",
        nome: "Reto abdominal superior",
        exercicios: [
          "Abdominal supra (crunch)", "Abdominal na máquina", "Abdominal na polia (ajoelhado)",
          "Abdominal com bola suíça", "Abdominal declinado", "Abdominal com anilha",
          "Abdominal canivete (V-up)",
        ],
      },
      {
        id: "inferior",
        nome: "Reto abdominal inferior",
        exercicios: [
          "Elevação de pernas deitado", "Elevação de pernas na barra fixa",
          "Elevação de joelhos suspenso", "Elevação de joelhos na cadeira romana",
          "Abdominal infra (reverse crunch)", "Tesoura (flutter kicks)",
        ],
      },
      {
        id: "obliquos",
        nome: "Oblíquos",
        exercicios: [
          "Abdominal bicicleta", "Abdominal oblíquo (cruzado)", "Prancha lateral",
          "Rotação russa (Russian twist)", "Lenhador no cabo (woodchop)",
          "Flexão lateral com halter",
        ],
      },
      {
        id: "core",
        nome: "Core e estabilização",
        exercicios: [
          "Prancha frontal", "Prancha com toque no ombro", "Roda abdominal", "Dead bug",
          "Bird dog", "Hollow hold", "Pallof press", "Vacuum abdominal",
        ],
      },
    ],
  },
  {
    id: "cardio",
    nome: "Cardio",
    subgrupos: [
      {
        id: "maquinas",
        nome: "Máquinas aeróbicas",
        exercicios: [
          "Esteira (caminhada)", "Esteira (corrida)", "Esteira inclinada",
          "Esteira intervalada (HIIT)", "Bicicleta ergométrica vertical",
          "Bicicleta ergométrica horizontal", "Spinning (bike indoor)",
          "Elíptico (transport)", "Simulador de escada", "Escada infinita",
          "Remo ergométrico", "Ski erg", "Air bike",
        ],
      },
      {
        id: "hiit",
        nome: "HIIT e funcional",
        exercicios: [
          "Pular corda", "Pular corda dupla", "Burpee", "Polichinelo",
          "Corrida estacionária (joelho alto)", "Mountain climber",
          "Battle rope (cordas navais)", "Salto na caixa (box jump)", "Slam ball",
          "Empurrar trenó", "Puxar trenó", "Shadow boxing", "Saco de pancada",
        ],
      },
      {
        id: "ar-livre",
        nome: "Ao ar livre",
        exercicios: [
          "Caminhada", "Corrida contínua", "Corrida intervalada (tiros)",
          "Subida de ladeira", "Ciclismo", "Natação",
        ],
      },
    ],
  },
];

export function contarExercicios(grupo) {
  return grupo.subgrupos.reduce((total, s) => total + s.exercicios.length, 0);
}

// Tira acentos e deixa minúsculo, para a busca achar "agachamento" e "Agachamento"
export function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}