const EMPURRAR_CIMA = "Inspire antes de empurrar, expire ao levar o peso para cima e inspire ao descer.";
const ELEVAR = "Expire ao elevar e inspire ao descer de forma controlada.";

export const DESCRICOES_OMBRO = {
  /* ───────── DELTOIDE ANTERIOR ───────── */
  "Desenvolvimento militar em pé com barra": {
    equipamento: "Barra e rack",
    posicao: "Em pé, com os pés na largura dos quadris, apoie a barra na frente dos ombros, perto da clavícula, com pegada pronada um pouco mais aberta que os ombros. Mantenha os cotovelos levemente à frente da barra, o abdômen firme e os glúteos contraídos.",
    execucao: [
      "Empurre a barra para cima, em linha reta, e desloque a cabeça ligeiramente para trás para a barra passar rente ao rosto.",
      "Termine com os braços estendidos acima da cabeça, com a barra alinhada sobre o meio dos pés.",
      "Desça a barra de forma controlada até a posição inicial, na frente dos ombros.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior", "Serrátil anterior", "Abdômen (estabilização)"],
    erros: [
      "Arquear excessivamente a lombar",
      "Empurrar com impulso das pernas (isso passa a ser o push press)",
      "Deixar a barra se afastar do corpo",
    ],
    dicas: [
      "Mantenha os glúteos e o abdômen contraídos para proteger a lombar.",
      "Comece com carga leve, pois exige boa mobilidade de ombros e de coluna torácica.",
    ],
  },
  "Desenvolvimento sentado com barra": {
    equipamento: "Barra, rack e banco com encosto",
    posicao: "Sente no banco com as costas apoiadas e os pés firmes no chão. Segure a barra com pegada pronada, um pouco mais aberta que os ombros, e apoie-a na frente dos ombros.",
    execucao: [
      "Empurre a barra para cima, em linha reta, passando rente ao rosto.",
      "Termine com os braços estendidos acima da cabeça, sem travar os cotovelos com força.",
      "Desça a barra de forma controlada até a altura do queixo ou da clavícula.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior", "Serrátil anterior"],
    erros: [
      "Arquear a lombar ou tirar as costas do encosto",
      "Deixar a barra à frente da cabeça no topo",
      "Descer a barra de forma descontrolada",
    ],
    dicas: [
      "Use as travas do rack e, se possível, um parceiro de treino para entregar e retirar a barra.",
      "O encosto estabiliza o corpo e permite focar nos ombros.",
    ],
  },
  "Desenvolvimento com halteres sentado": {
    equipamento: "Halteres e banco com encosto",
    posicao: "Sente com as costas apoiadas e os pés firmes no chão. Segure os halteres na altura dos ombros, com as palmas voltadas para a frente e os cotovelos em cerca de 90°.",
    execucao: [
      "Empurre os halteres para cima, aproximando-os levemente no topo.",
      "Termine com os braços estendidos acima da cabeça, sem bater os halteres.",
      "Desça de forma controlada até os cotovelos ficarem em cerca de 90°.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior", "Serrátil anterior"],
    erros: [
      "Arquear a lombar para empurrar o peso",
      "Bater os halteres no topo",
      "Descer os halteres além do que o ombro tolera",
    ],
    dicas: [
      "Mantenha os punhos alinhados sobre os cotovelos durante todo o movimento.",
      "Para posicionar os halteres, apoie-os nas coxas e use o impulso das pernas.",
    ],
  },
  "Desenvolvimento Arnold": {
    equipamento: "Halteres e banco com encosto",
    posicao: "Sente com as costas apoiadas e segure os halteres na frente do peito, com as palmas voltadas para você e os cotovelos flexionados e à frente do corpo.",
    execucao: [
      "Empurre os halteres para cima, girando os punhos e abrindo os cotovelos, até as palmas ficarem voltadas para a frente no topo.",
      "Termine com os braços estendidos acima da cabeça.",
      "Desça girando os punhos no sentido contrário, até voltar à posição inicial.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior", "Serrátil anterior"],
    erros: [
      "Fazer o giro de forma brusca",
      "Arquear a lombar",
      "Usar carga excessiva e perder o controle da rotação",
    ],
    dicas: [
      "A rotação é contínua e suave, acompanhando a subida e a descida.",
      "Use halteres mais leves que no desenvolvimento tradicional.",
    ],
  },
  "Desenvolvimento na máquina": {
    equipamento: "Máquina de desenvolvimento (shoulder press)",
    posicao: "Ajuste o assento para que as alças fiquem na altura dos ombros. Sente com as costas apoiadas e os pés no chão, segurando as alças.",
    execucao: [
      "Empurre as alças para cima até quase estender os cotovelos.",
      "Faça uma breve pausa no topo, sem travar as articulações.",
      "Desça devagar, controlando o peso, até as alças ficarem na altura dos ombros.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior"],
    erros: [
      "Tirar as costas do encosto",
      "Elevar os ombros em direção às orelhas",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "A trajetória guiada permite focar em empurrar com controle.",
    ],
  },
  "Desenvolvimento no Smith": {
    equipamento: "Smith machine e banco com encosto",
    posicao: "Posicione o banco no centro do Smith, de forma que a barra desça à frente do rosto. Sente com as costas apoiadas e segure a barra com pegada pronada, um pouco mais aberta que os ombros. Gire os punhos para destravar.",
    execucao: [
      "Empurre a barra para cima, em linha reta, até quase estender os cotovelos.",
      "Faça uma breve pausa no topo, sem travar as articulações.",
      "Desça a barra devagar até a altura do queixo ou da clavícula e, ao fim da série, trave-a nos ganchos.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Deltoide lateral"],
    secundarios: ["Tríceps braquial", "Trapézio superior"],
    erros: [
      "Posicionar o banco de forma que a barra desça atrás ou muito à frente da cabeça",
      "Arquear a lombar",
      "Esquecer de travar a barra no fim da série",
    ],
    dicas: [
      "Teste a trajetória com carga leve e ajuste o banco antes de aumentar o peso.",
      "Regule as travas de segurança na altura dos ombros.",
    ],
  },
  "Push press": {
    equipamento: "Barra e rack",
    posicao: "Em pé, apoie a barra na frente dos ombros, com pegada pronada um pouco mais aberta que os ombros. Mantenha os cotovelos levemente à frente, o abdômen firme e os pés na largura dos quadris.",
    execucao: [
      "Flexione levemente joelhos e quadril, sem inclinar o tronco, em um movimento curto e rápido.",
      "Estenda quadril e joelhos de forma explosiva e empurre a barra para cima, terminando o movimento com os braços.",
      "Receba a barra na frente dos ombros, absorvendo o peso com as pernas, e reinicie.",
    ],
    respiracao: "Inspire e contraia o abdômen antes do impulso; expire ao final do empurrão.",
    principais: ["Deltoide anterior", "Deltoide lateral", "Tríceps braquial"],
    secundarios: ["Quadríceps e glúteos (impulso)", "Trapézio superior", "Abdômen (estabilização)"],
    erros: [
      "Inclinar o tronco para a frente durante o impulso",
      "Empurrar com os braços antes de estender as pernas",
      "Deixar a barra se afastar do corpo",
    ],
    dicas: [
      "O impulso das pernas permite usar mais carga que no desenvolvimento estrito.",
      "Mantenha o movimento curto e vertical.",
    ],
  },
  "Landmine press": {
    equipamento: "Barra presa no suporte landmine e anilhas",
    posicao: "Em pé, em posição de afundo ou com os pés na largura dos ombros, segure a ponta da barra na altura do ombro, com uma mão. Mantenha o cotovelo à frente e o abdômen firme.",
    execucao: [
      "Empurre a ponta da barra para a frente e para cima, em arco, estendendo o braço.",
      "Termine com o braço estendido, com a escápula livre para acompanhar o movimento.",
      "Desça de forma controlada até o ombro.",
    ],
    respiracao: EMPURRAR_CIMA,
    principais: ["Deltoide anterior", "Peitoral maior (porção clavicular)"],
    secundarios: ["Tríceps braquial", "Serrátil anterior", "Abdômen (estabilização)"],
    erros: [
      "Inclinar o tronco para o lado",
      "Girar o corpo para ajudar",
      "Usar carga excessiva e perder o controle",
    ],
    dicas: [
      "A trajetória em arco costuma ser mais confortável para os ombros do que o desenvolvimento vertical.",
      "Faça o mesmo número de repetições com cada braço.",
    ],
  },
  "Elevação frontal com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé, segure um haltere em cada mão à frente das coxas, com as palmas voltadas para o corpo (ou para baixo) e os cotovelos levemente flexionados.",
    execucao: [
      "Eleve um braço à frente, em linha reta, até a altura dos ombros.",
      "Faça uma breve pausa no topo, sem inclinar o tronco para trás.",
      "Desça devagar até a posição inicial e alterne os braços ou eleve os dois ao mesmo tempo.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide anterior"],
    secundarios: ["Peitoral maior (porção clavicular)", "Serrátil anterior"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Elevar os braços acima da altura dos ombros",
      "Usar carga excessiva",
    ],
    dicas: [
      "Use cargas moderadas e controle a descida.",
      "O deltoide anterior já é bastante exigido nos exercícios de supino e de desenvolvimento, então esse isolado não precisa de muito volume.",
    ],
  },
  "Elevação frontal com barra": {
    equipamento: "Barra reta ou barra W",
    posicao: "Em pé, segure a barra à frente das coxas, com pegada pronada na largura dos ombros e os cotovelos levemente flexionados.",
    execucao: [
      "Eleve a barra à frente, em linha reta, até a altura dos ombros.",
      "Faça uma breve pausa no topo, sem inclinar o tronco para trás.",
      "Desça devagar até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide anterior"],
    secundarios: ["Peitoral maior (porção clavicular)", "Serrátil anterior"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Elevar a barra acima da altura dos ombros",
      "Flexionar os cotovelos demais",
    ],
    dicas: [
      "Mantenha o abdômen firme para evitar o balanço do tronco.",
      "Controle a descida da barra.",
    ],
  },
  "Elevação frontal com anilha": {
    equipamento: "Anilha",
    posicao: "Em pé, segure a anilha com as duas mãos, nas laterais (como se segurasse um volante), à frente das coxas, com os cotovelos levemente flexionados.",
    execucao: [
      "Eleve a anilha à frente, em arco, até a altura dos olhos ou dos ombros.",
      "Faça uma breve pausa no topo, sem inclinar o tronco para trás.",
      "Desça devagar até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide anterior"],
    secundarios: ["Peitoral maior (porção clavicular)", "Serrátil anterior", "Antebraço (pegada)"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Usar uma anilha pesada demais",
      "Elevar a anilha com os cotovelos muito flexionados",
    ],
    dicas: [
      "Mantenha os braços quase estendidos durante todo o movimento.",
      "Controle a descida para manter a tensão no ombro.",
    ],
  },
  "Elevação frontal na polia": {
    equipamento: "Polia baixa com pegador ou barra",
    posicao: "Em pé, de costas para a polia baixa, segure o pegador com o cabo passando entre as pernas. Mantenha um pé à frente para estabilidade, o tronco firme e o cotovelo levemente flexionado.",
    execucao: [
      "Eleve o braço à frente, em linha reta, até a altura dos ombros.",
      "Faça uma breve pausa no topo, sem inclinar o tronco para trás.",
      "Desça devagar, controlando a tensão do cabo.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide anterior"],
    secundarios: ["Peitoral maior (porção clavicular)", "Serrátil anterior"],
    erros: [
      "Inclinar o tronco para trás",
      "Usar o impulso do corpo",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão durante todo o movimento, inclusive na parte baixa.",
      "Use cargas moderadas e foque no controle.",
    ],
  },
  "Flexão em parada de mão": {
    equipamento: "Parede e um tapete (ou apoio para a cabeça)",
    posicao: "Posicione as mãos no chão, na largura dos ombros, e suba os pés pela parede, ficando de cabeça para baixo, com o corpo reto e o abdômen firme. Coloque um tapete ou uma almofada sob a cabeça.",
    execucao: [
      "Flexione os cotovelos e desça o corpo de forma controlada, até a cabeça chegar perto do apoio.",
      "Mantenha os cotovelos em cerca de 45° em relação ao tronco, sem abri-los demais.",
      "Empurre o chão para estender os braços e voltar à posição inicial.",
    ],
    respiracao: "Inspire ao descer e expire ao empurrar.",
    principais: ["Deltoide anterior", "Tríceps braquial"],
    secundarios: ["Trapézio superior", "Serrátil anterior", "Abdômen (estabilização)"],
    erros: [
      "Arquear a lombar ou deixar o corpo se afastar da parede",
      "Abrir os cotovelos demais",
      "Descer sem controle até o chão",
    ],
    dicas: [
      "É um exercício avançado: comece com a versão pike (quadril elevado, pés no chão ou em um banco).",
      "Interrompa em caso de tontura ou de dor no pescoço.",
    ],
  },

  /* ───────── DELTOIDE LATERAL ───────── */
  "Elevação lateral com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé, segure um haltere em cada mão ao lado do corpo, com os cotovelos levemente flexionados e o tronco levemente inclinado para a frente. Mantenha o abdômen firme.",
    execucao: [
      "Eleve os braços para os lados, em arco, com os cotovelos guiando o movimento.",
      "Suba até a altura dos ombros, sem elevar os ombros em direção às orelhas.",
      "Desça devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral"],
    secundarios: ["Supraespinhal", "Trapézio superior"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Encolher os ombros em direção às orelhas",
      "Elevar os braços acima da altura dos ombros usando o trapézio",
    ],
    dicas: [
      "Pense em levar os cotovelos para os lados, e não os halteres para cima.",
      "Use cargas leves a moderadas: o deltoide lateral é um músculo pequeno.",
    ],
  },
  "Elevação lateral sentado": {
    equipamento: "Halteres e banco com encosto",
    posicao: "Sente no banco com as costas apoiadas e segure um haltere em cada mão ao lado do corpo, com os cotovelos levemente flexionados.",
    execucao: [
      "Eleve os braços para os lados, em arco, com os cotovelos guiando o movimento.",
      "Suba até a altura dos ombros, sem encolhê-los.",
      "Desça devagar, controlando o peso.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral"],
    secundarios: ["Supraespinhal", "Trapézio superior"],
    erros: [
      "Balançar o tronco para ajudar",
      "Encolher os ombros",
      "Usar uma carga que force o impulso",
    ],
    dicas: [
      "Sentado, o corpo fica mais estável, o que reduz o impulso e facilita sentir o ombro.",
      "Mantenha o pescoço relaxado.",
    ],
  },
  "Elevação lateral unilateral na polia": {
    equipamento: "Polia baixa e pegador simples",
    posicao: "Em pé, de lado para a polia baixa, segure o pegador com a mão mais afastada da máquina, com o cabo passando à frente do corpo. Apoie a outra mão na máquina para estabilidade.",
    execucao: [
      "Eleve o braço para o lado, em arco, até a altura do ombro, com o cotovelo levemente flexionado.",
      "Faça uma breve pausa no topo, sem inclinar o tronco.",
      "Desça devagar, controlando a tensão do cabo.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral"],
    secundarios: ["Supraespinhal", "Trapézio superior"],
    erros: [
      "Inclinar o tronco para o lado oposto",
      "Encolher o ombro",
      "Usar o impulso do corpo",
    ],
    dicas: [
      "O cabo mantém a tensão na parte baixa do movimento, onde o haltere quase não exige o músculo.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },
  "Elevação lateral na máquina": {
    equipamento: "Máquina de elevação lateral",
    posicao: "Ajuste o assento para que os cotovelos fiquem alinhados ao eixo da máquina. Sente com as costas apoiadas e posicione os antebraços (ou cotovelos) nas almofadas.",
    execucao: [
      "Eleve os braços para os lados, empurrando as almofadas com os cotovelos, até a altura dos ombros.",
      "Faça uma breve pausa no topo, sem encolher os ombros.",
      "Desça devagar, controlando o peso.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral"],
    secundarios: ["Supraespinhal", "Trapézio superior"],
    erros: [
      "Encolher os ombros",
      "Usar impulso do tronco",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Empurre com os cotovelos, não com as mãos.",
      "Ajuste o assento antes de aumentar a carga.",
    ],
  },
  "Elevação lateral deitado de lado": {
    equipamento: "Halter e banco (ou colchonete)",
    posicao: "Deite de lado em um banco ou colchonete, com a cabeça apoiada, e segure o haltere com o braço de cima, ao longo do corpo, com o cotovelo levemente flexionado.",
    execucao: [
      "Eleve o braço em arco, até a posição quase vertical.",
      "Faça uma breve pausa no topo, sem girar o tronco.",
      "Desça devagar, controlando o peso, até o haltere quase tocar o corpo.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral"],
    secundarios: ["Supraespinhal", "Trapézio superior"],
    erros: [
      "Girar o tronco para levantar o peso",
      "Usar carga excessiva",
      "Fazer o movimento rápido",
    ],
    dicas: [
      "Nessa posição, o ombro trabalha com tensão em uma parte do movimento diferente da elevação em pé.",
      "Use cargas leves e movimentos lentos.",
    ],
  },
  "Remada alta com barra": {
    equipamento: "Barra reta ou barra W",
    posicao: "Em pé, segure a barra à frente das coxas, com pegada pronada na largura dos ombros (ou um pouco mais aberta) e os braços estendidos. Mantenha o tronco ereto e o abdômen firme.",
    execucao: [
      "Puxe a barra para cima, rente ao corpo, levando os cotovelos para os lados e para cima.",
      "Suba até a altura do peito, mantendo os cotovelos mais altos que os punhos.",
      "Desça devagar até estender os braços.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral", "Trapézio superior"],
    secundarios: ["Bíceps braquial", "Braquial", "Deltoide anterior"],
    erros: [
      "Elevar a barra acima da linha do peito, com os ombros rodados para dentro",
      "Usar o impulso do tronco",
      "Deixar a barra se afastar do corpo",
    ],
    dicas: [
      "Uma pegada um pouco mais aberta costuma ser mais confortável para os ombros.",
      "Pare a subida na altura do peito se sentir desconforto nos ombros.",
    ],
  },
  "Remada alta com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé, segure um haltere em cada mão à frente das coxas, com as palmas voltadas para o corpo e os braços estendidos. Mantenha o tronco ereto.",
    execucao: [
      "Puxe os halteres para cima, rente ao corpo, levando os cotovelos para os lados e para cima.",
      "Suba até a altura do peito, mantendo os cotovelos mais altos que os punhos.",
      "Desça devagar até estender os braços.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral", "Trapézio superior"],
    secundarios: ["Bíceps braquial", "Braquial", "Deltoide anterior"],
    erros: [
      "Elevar os halteres acima do peito",
      "Usar o impulso do tronco",
      "Deixar os halteres se afastarem do corpo",
    ],
    dicas: [
      "Os halteres permitem que as mãos sigam uma trajetória mais natural do que a barra.",
      "Mantenha o pescoço relaxado.",
    ],
  },
  "Remada alta na polia": {
    equipamento: "Polia baixa com barra reta ou corda",
    posicao: "Em pé, de frente para a polia baixa, segure a barra (ou a corda) à frente das coxas, com os braços estendidos. Mantenha o tronco ereto e um pé um pouco à frente para estabilidade.",
    execucao: [
      "Puxe a barra para cima, rente ao corpo, levando os cotovelos para os lados e para cima.",
      "Suba até a altura do peito, mantendo os cotovelos mais altos que os punhos.",
      "Desça devagar, controlando a tensão do cabo, até estender os braços.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide lateral", "Trapézio superior"],
    secundarios: ["Bíceps braquial", "Braquial", "Deltoide anterior"],
    erros: [
      "Elevar a barra acima da linha do peito",
      "Usar o impulso do tronco",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão durante toda a descida.",
      "Use uma carga que permita controlar o movimento.",
    ],
  },

  /* ───────── DELTOIDE POSTERIOR ───────── */
  "Crucifixo inverso com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé, com os pés na largura dos quadris e os joelhos levemente flexionados, incline o tronco para a frente, quase paralelo ao chão, com a coluna neutra. Deixe os halteres pendurados à frente, com os cotovelos levemente flexionados.",
    execucao: [
      "Abra os braços para os lados, em arco, levando os cotovelos para cima e aproximando as escápulas.",
      "Suba até a altura do tronco, sem elevar os ombros em direção às orelhas.",
      "Desça devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide posterior"],
    secundarios: ["Romboides", "Trapézio médio", "Infraespinhal e redondo menor"],
    erros: [
      "Usar o impulso do tronco para levantar os halteres",
      "Arredondar a coluna",
      "Flexionar e estender os cotovelos, transformando o movimento em uma remada",
    ],
    dicas: [
      "Use cargas leves: o deltoide posterior é um músculo pequeno.",
      "Mantenha o pescoço alinhado com a coluna, olhando para o chão.",
    ],
  },
  "Crucifixo inverso na máquina": {
    equipamento: "Máquina peck deck (usada no sentido inverso)",
    posicao: "Sente de frente para o encosto, com o peito apoiado, e ajuste o assento para que as alças fiquem na altura dos ombros. Segure as alças com os braços à frente, com os cotovelos levemente flexionados.",
    execucao: [
      "Abra os braços para trás, em arco, aproximando as escápulas.",
      "Contraia a parte de trás dos ombros por um instante, sem encolhê-los.",
      "Retorne devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: "Expire ao abrir os braços e inspire ao retornar.",
    principais: ["Deltoide posterior"],
    secundarios: ["Romboides", "Trapézio médio", "Infraespinhal e redondo menor"],
    erros: [
      "Tirar o peito do apoio",
      "Usar impulso do tronco",
      "Soltar o peso ao retornar",
    ],
    dicas: [
      "Mantenha o peito apoiado e os ombros longe das orelhas.",
      "Ajuste a altura do assento antes de aumentar a carga.",
    ],
  },
  "Crucifixo inverso na polia": {
    equipamento: "Cabos (polia dupla) na altura dos ombros",
    posicao: "Em pé, entre as duas polias, regulados na altura dos ombros, segure com a mão direita o cabo da polia esquerda e com a esquerda o cabo da direita, cruzando os cabos. Mantenha os cotovelos levemente flexionados.",
    execucao: [
      "Abra os braços para os lados, em arco, levando as mãos para trás e aproximando as escápulas.",
      "Contraia a parte de trás dos ombros por um instante.",
      "Retorne devagar, controlando a tensão dos cabos, até a posição inicial.",
    ],
    respiracao: "Expire ao abrir os braços e inspire ao retornar.",
    principais: ["Deltoide posterior"],
    secundarios: ["Romboides", "Trapézio médio", "Infraespinhal e redondo menor"],
    erros: [
      "Inclinar o tronco para trás ao puxar",
      "Flexionar os cotovelos demais",
      "Usar carga excessiva e perder o arco",
    ],
    dicas: [
      "O cabo mantém a tensão durante todo o movimento.",
      "Mantenha o tronco firme e os braços na altura dos ombros.",
    ],
  },
  "Elevação posterior no banco inclinado": {
    equipamento: "Banco inclinado e halteres",
    posicao: "Deite de bruços em um banco inclinado (30° a 45°), com o peito apoiado e os pés no chão. Segure um haltere em cada mão, com os braços pendurados à frente e os cotovelos levemente flexionados.",
    execucao: [
      "Abra os braços para os lados, em arco, levando os cotovelos para cima.",
      "Suba até a altura do tronco, aproximando as escápulas, sem encolher os ombros.",
      "Desça devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Deltoide posterior"],
    secundarios: ["Romboides", "Trapézio médio", "Infraespinhal e redondo menor"],
    erros: [
      "Levantar o peito do banco para ganhar impulso",
      "Usar carga excessiva e perder o controle",
      "Flexionar os cotovelos demais",
    ],
    dicas: [
      "O apoio no banco elimina o impulso do tronco e ajuda a isolar o ombro.",
      "Use cargas leves e movimentos lentos.",
    ],
  },
  "Face pull": {
    equipamento: "Polia alta com corda",
    posicao: "Em pé, de frente para a polia posicionada na altura do rosto, segure a corda com as palmas voltadas uma para a outra e dê um passo para trás. Mantenha os braços estendidos à frente, o tronco ereto e o abdômen firme.",
    execucao: [
      "Puxe a corda em direção ao rosto, abrindo as mãos para os lados e levando os cotovelos para cima e para trás.",
      "No final, rotacione os ombros para fora, com as mãos na altura das orelhas e as escápulas aproximadas.",
      "Retorne devagar, controlando a tensão do cabo, até estender os braços.",
    ],
    respiracao: "Expire ao puxar a corda e inspire ao retornar.",
    principais: ["Deltoide posterior", "Infraespinhal e redondo menor"],
    secundarios: ["Romboides", "Trapézio médio"],
    erros: [
      "Usar carga excessiva e inclinar o tronco para trás",
      "Puxar a corda para o pescoço, em vez de para o rosto",
      "Deixar os cotovelos caírem abaixo das mãos",
    ],
    dicas: [
      "Use uma carga leve a moderada e foque na rotação externa dos ombros.",
      "Mantenha os cotovelos na altura das mãos ou mais altos.",
    ],
  },
  "Remada aberta para deltoide posterior": {
    equipamento: "Halteres ou barra",
    posicao: "Em pé, com os joelhos levemente flexionados, incline o tronco para a frente, cerca de 45° a 60°, com a coluna neutra. Segure os halteres (ou a barra) com pegada pronada e os braços estendidos.",
    execucao: [
      "Puxe os pesos em direção ao peito, mantendo os cotovelos abertos e na altura do tronco, a cerca de 90° em relação a ele.",
      "Aproxime as escápulas no final, sem encolher os ombros.",
      "Desça devagar, até estender os braços.",
    ],
    respiracao: "Expire ao puxar os pesos em direção ao peito e inspire ao estender os braços.",
    principais: ["Deltoide posterior", "Romboides"],
    secundarios: ["Trapézio médio", "Grande dorsal", "Bíceps braquial"],
    erros: [
      "Manter os cotovelos rentes ao corpo, como em uma remada comum",
      "Arredondar a coluna",
      "Usar o impulso do tronco",
    ],
    dicas: [
      "Os cotovelos abertos deslocam o trabalho para a parte de trás dos ombros.",
      "Use cargas mais leves que em uma remada comum.",
    ],
  },

  /* ───────── MANGUITO ROTADOR ───────── */
  "Rotação externa com halter (deitado)": {
    equipamento: "Halter leve e colchonete (ou banco)",
    posicao: "Deite de lado, com o cotovelo do braço de cima flexionado a 90° e apoiado junto ao tronco (pode colocar uma toalha entre o cotovelo e o corpo). Segure o halter leve, com o antebraço apontando para a frente.",
    execucao: [
      "Mantendo o cotovelo junto ao corpo, gire o antebraço para cima, afastando a mão do abdômen.",
      "Suba até onde o ombro permitir, sem mover o cotovelo.",
      "Desça devagar, controlando o peso.",
    ],
    respiracao: "Expire ao girar o antebraço para cima e inspire ao descer.",
    principais: ["Infraespinhal", "Redondo menor"],
    secundarios: ["Deltoide posterior"],
    erros: [
      "Afastar o cotovelo do corpo",
      "Usar carga excessiva",
      "Girar o tronco para ajudar",
    ],
    dicas: [
      "Use cargas bem leves (1 a 3 kg costumam ser suficientes) e repetições mais altas.",
      "A toalha sob o cotovelo ajuda a manter a posição correta.",
    ],
  },
  "Rotação externa no cabo": {
    equipamento: "Polia na altura do cotovelo e pegador simples",
    posicao: "Em pé, de lado para a polia ajustada na altura do cotovelo, segure o pegador com a mão mais afastada da máquina. Mantenha o cotovelo flexionado a 90° e junto ao tronco (uma toalha entre o cotovelo e o corpo ajuda).",
    execucao: [
      "Mantendo o cotovelo junto ao corpo, gire o antebraço para fora, afastando a mão do abdômen.",
      "Gire até cerca de 90° em relação ao tronco, ou até onde o ombro permitir.",
      "Retorne devagar, controlando a tensão do cabo.",
    ],
    respiracao: "Expire ao girar o antebraço para fora e inspire ao retornar.",
    principais: ["Infraespinhal", "Redondo menor"],
    secundarios: ["Deltoide posterior"],
    erros: [
      "Afastar o cotovelo do corpo",
      "Usar carga excessiva",
      "Girar o tronco para ajudar",
    ],
    dicas: [
      "Use cargas leves e movimentos lentos, com foco no controle.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },
  "Rotação interna no cabo": {
    equipamento: "Polia na altura do cotovelo e pegador simples",
    posicao: "Em pé, de lado para a polia ajustada na altura do cotovelo, segure o pegador com a mão mais próxima da máquina. Mantenha o cotovelo flexionado a 90° e junto ao tronco (uma toalha entre o cotovelo e o corpo ajuda).",
    execucao: [
      "Mantendo o cotovelo junto ao corpo, gire o antebraço para dentro, aproximando a mão do abdômen.",
      "Gire até a mão chegar à frente do abdômen, sem mover o cotovelo.",
      "Retorne devagar, controlando a tensão do cabo.",
    ],
    respiracao: "Expire ao girar o antebraço para dentro e inspire ao retornar.",
    principais: ["Subescapular"],
    secundarios: ["Peitoral maior", "Grande dorsal", "Redondo maior"],
    erros: [
      "Afastar o cotovelo do corpo",
      "Girar o tronco para ajudar",
      "Usar carga excessiva",
    ],
    dicas: [
      "Use cargas leves e controle a volta.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },
  "Rotação externa com elástico": {
    equipamento: "Faixa elástica",
    posicao: "Prenda a faixa em um ponto fixo, na altura do cotovelo, e fique de lado para ele. Segure a faixa com a mão mais afastada do ponto fixo, com o cotovelo flexionado a 90° e junto ao tronco (uma toalha entre o cotovelo e o corpo ajuda).",
    execucao: [
      "Mantendo o cotovelo junto ao corpo, gire o antebraço para fora, afastando a mão do abdômen.",
      "Gire até onde o ombro permitir, sem mover o cotovelo.",
      "Retorne devagar, controlando a tensão da faixa.",
    ],
    respiracao: "Expire ao girar o antebraço para fora e inspire ao retornar.",
    principais: ["Infraespinhal", "Redondo menor"],
    secundarios: ["Deltoide posterior"],
    erros: [
      "Afastar o cotovelo do corpo",
      "Soltar a faixa na volta",
      "Girar o tronco para ajudar",
    ],
    dicas: [
      "É uma opção prática para aquecer o ombro antes do treino.",
      "Escolha uma faixa leve e faça mais repetições.",
    ],
  },
  "Elevação no plano da escápula (scaption)": {
    equipamento: "Halteres leves",
    posicao: "Em pé, segure um haltere leve em cada mão ao lado do corpo, com os polegares voltados para cima e os cotovelos levemente flexionados. Mantenha o tronco ereto e o abdômen firme.",
    execucao: [
      "Eleve os braços à frente e levemente para fora, formando um ângulo de cerca de 30° com o plano do corpo, em direção a uma letra V.",
      "Suba até a altura dos ombros, sem encolhê-los.",
      "Desça devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: ELEVAR,
    principais: ["Supraespinhal", "Deltoide anterior e lateral"],
    secundarios: ["Trapézio superior e inferior", "Serrátil anterior"],
    erros: [
      "Usar carga excessiva e encolher os ombros",
      "Balançar o corpo para ganhar impulso",
      "Elevar os braços acima da altura dos ombros",
    ],
    dicas: [
      "Use cargas leves e foque no controle do movimento.",
      "A elevação nesse plano costuma ser mais confortável para os ombros que a elevação lateral pura.",
    ],
  },
};