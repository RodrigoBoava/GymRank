const CONTRAIR = "Expire ao contrair o abdômen e inspire ao retornar de forma controlada.";
const SUSTENTAR = "Respire de forma contínua e controlada, sem prender o ar durante a sustentação.";

export const DESCRICOES_ABDOMEN = {
  /* ───────── RETO ABDOMINAL SUPERIOR ───────── */
  "Abdominal supra (crunch)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com os joelhos flexionados e os pés apoiados no chão. Coloque as mãos atrás da cabeça, sem entrelaçar os dedos, ou cruze os braços sobre o peito.",
    execucao: [
      "Contraia o abdômen e eleve a cabeça e os ombros do chão, aproximando as costelas do quadril.",
      "Faça uma breve pausa no topo, com a lombar apoiada no chão.",
      "Desça devagar, controlando o movimento, até os ombros tocarem de leve o chão.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção superior)"],
    secundarios: ["Oblíquos"],
    erros: [
      "Puxar o pescoço com as mãos",
      "Subir o tronco inteiro, em vez de apenas os ombros",
      "Fazer o movimento rápido, com impulso",
    ],
    dicas: [
      "Imagine que as costelas se aproximam do quadril, sem puxar o pescoço.",
      "Mantenha o queixo afastado do peito, como se segurasse uma laranja.",
    ],
  },
  "Abdominal na máquina": {
    equipamento: "Máquina de abdominal",
    posicao: "Ajuste o assento e sente com as costas apoiadas e os pés firmes. Segure as alças ou posicione os braços no apoio, conforme a máquina, com o tronco ereto.",
    execucao: [
      "Contraia o abdômen e flexione o tronco para a frente, aproximando as costelas do quadril.",
      "Faça uma breve pausa com o abdômen contraído.",
      "Retorne devagar, controlando o peso, até a posição inicial.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal"],
    secundarios: ["Oblíquos"],
    erros: [
      "Empurrar com os braços ou com as pernas",
      "Usar o impulso do tronco",
      "Soltar o peso no retorno",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "O movimento vem da flexão da coluna, não do quadril.",
    ],
  },
  "Abdominal na polia (ajoelhado)": {
    equipamento: "Polia alta e corda",
    posicao: "Ajoelhe-se de frente para a polia alta, segure a corda com as duas mãos e leve-a para perto da cabeça, com os cotovelos apontando para baixo. Mantenha o quadril alinhado sobre os joelhos.",
    execucao: [
      "Contraia o abdômen e flexione o tronco para baixo, arredondando a coluna e levando os cotovelos em direção aos joelhos.",
      "Faça uma breve pausa com o abdômen contraído, sem mover o quadril.",
      "Retorne devagar, controlando a tensão do cabo, até a posição inicial.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal"],
    secundarios: ["Oblíquos"],
    erros: [
      "Puxar a corda com os braços, em vez de flexionar o tronco",
      "Mover o quadril para trás, como em um agachamento",
      "Usar carga excessiva",
    ],
    dicas: [
      "Mantenha as mãos fixas ao lado da cabeça: o movimento vem do abdômen.",
      "Use uma carga que permita controlar a volta.",
    ],
  },
  "Abdominal com bola suíça": {
    equipamento: "Bola suíça",
    posicao: "Sente na bola suíça e deslize os pés para a frente até a parte baixa das costas ficar apoiada na bola, com os joelhos flexionados e os pés no chão. Coloque as mãos atrás da cabeça ou cruzadas no peito.",
    execucao: [
      "Contraia o abdômen e eleve os ombros, aproximando as costelas do quadril.",
      "Faça uma breve pausa no topo, mantendo o quadril estável.",
      "Desça devagar, deixando as costas acompanharem a curva da bola, até sentir o alongamento do abdômen.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal"],
    secundarios: ["Oblíquos", "Músculos estabilizadores do tronco"],
    erros: [
      "Puxar o pescoço com as mãos",
      "Deixar a bola rolar sem controle",
      "Usar o impulso das pernas",
    ],
    dicas: [
      "Mantenha os pés bem apoiados e afastados para ter mais estabilidade.",
      "A bola permite uma amplitude maior que o chão.",
    ],
  },
  "Abdominal declinado": {
    equipamento: "Banco declinado",
    posicao: "Deite no banco declinado, com os pés presos no apoio e os joelhos flexionados. Cruze os braços sobre o peito ou coloque as mãos atrás da cabeça.",
    execucao: [
      "Contraia o abdômen e eleve o tronco, aproximando as costelas do quadril.",
      "Suba até a lombar deixar de apoiar o banco, sem levantar o tronco inteiro.",
      "Desça devagar, controlando o movimento.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal"],
    secundarios: ["Oblíquos", "Flexores do quadril"],
    erros: [
      "Subir demais, deixando os flexores do quadril fazerem o trabalho",
      "Puxar o pescoço com as mãos",
      "Usar o impulso do corpo",
    ],
    dicas: [
      "Quanto maior a inclinação do banco, mais difícil o exercício.",
      "Interrompa se sentir dor na lombar.",
    ],
  },
  "Abdominal com anilha": {
    equipamento: "Anilha e um tapete",
    posicao: "Deite de costas, com os joelhos flexionados e os pés apoiados no chão. Segure uma anilha junto ao peito (ou acima da cabeça, para aumentar a dificuldade).",
    execucao: [
      "Contraia o abdômen e eleve a cabeça e os ombros do chão, aproximando as costelas do quadril.",
      "Faça uma breve pausa no topo, com a lombar apoiada no chão.",
      "Desça devagar, controlando o movimento.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção superior)"],
    secundarios: ["Oblíquos"],
    erros: [
      "Puxar o pescoço com a anilha",
      "Subir o tronco inteiro",
      "Usar o impulso do corpo",
    ],
    dicas: [
      "Comece com uma anilha leve e aumente a carga aos poucos.",
      "Mantenha a anilha junto ao peito, para facilitar o movimento.",
    ],
  },
  "Abdominal canivete (V-up)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com as pernas estendidas e os braços estendidos acima da cabeça. Mantenha a lombar apoiada no chão.",
    execucao: [
      "Contraia o abdômen e eleve ao mesmo tempo o tronco e as pernas estendidas, formando um V.",
      "Leve as mãos em direção aos pés, sem dobrar os joelhos.",
      "Desça devagar, controlando o movimento, até quase tocar o chão, e repita.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal"],
    secundarios: ["Flexores do quadril", "Oblíquos"],
    erros: [
      "Arquear a lombar ao descer",
      "Usar o impulso dos braços",
      "Dobrar os joelhos demais",
    ],
    dicas: [
      "É um exercício avançado: comece com os joelhos flexionados (versão em tuck).",
      "Mantenha o movimento controlado, sem balançar.",
    ],
  },

  /* ───────── RETO ABDOMINAL INFERIOR ───────── */
  "Elevação de pernas deitado": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com as pernas estendidas e as mãos ao lado do corpo (ou sob os glúteos). Pressione a lombar contra o chão.",
    execucao: [
      "Contraia o abdômen e eleve as pernas, juntas e estendidas, até formar cerca de 90° com o tronco.",
      "Mantenha a lombar apoiada no chão durante todo o movimento.",
      "Desça devagar, controlando o movimento, até as pernas ficarem perto do chão, sem tocá-lo.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Flexores do quadril", "Oblíquos"],
    erros: [
      "Arquear a lombar na descida",
      "Descer as pernas rápido demais",
      "Dobrar demais os joelhos",
    ],
    dicas: [
      "Se a lombar descolar do chão, reduza a amplitude da descida.",
      "Flexione levemente os joelhos para facilitar.",
    ],
  },
  "Elevação de pernas na barra fixa": {
    equipamento: "Barra fixa",
    posicao: "Segure a barra com pegada pronada e fique pendurado, com os braços estendidos e as pernas juntas. Mantenha os ombros ativos e o abdômen firme.",
    execucao: [
      "Contraia o abdômen e eleve as pernas, juntas e estendidas, até a altura do quadril ou mais.",
      "Incline levemente o quadril para cima no final, para trabalhar o abdômen.",
      "Desça devagar, controlando o movimento, sem balançar.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Flexores do quadril", "Oblíquos", "Antebraço (pegada)"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Deixar os ombros subirem em direção às orelhas",
      "Descer as pernas sem controle",
    ],
    dicas: [
      "É um exercício avançado: comece com os joelhos flexionados.",
      "Pense em levar o quadril para cima, não só as pernas.",
    ],
  },
  "Elevação de joelhos suspenso": {
    equipamento: "Barra fixa ou suporte de elevação de joelhos",
    posicao: "Segure a barra com pegada pronada (ou apoie-se nos antebraços do suporte) e fique pendurado, com as pernas juntas e os braços estendidos. Mantenha o abdômen firme.",
    execucao: [
      "Contraia o abdômen e eleve os joelhos em direção ao peito.",
      "Incline levemente o quadril para cima no final, para trabalhar o abdômen.",
      "Desça devagar, controlando o movimento, sem balançar.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Flexores do quadril", "Oblíquos", "Antebraço (pegada)"],
    erros: [
      "Balançar o corpo",
      "Deixar os ombros subirem em direção às orelhas",
      "Descer os joelhos rápido demais",
    ],
    dicas: [
      "É uma versão mais acessível que a elevação de pernas estendidas.",
      "Mantenha o movimento lento e controlado.",
    ],
  },
  "Elevação de joelhos na cadeira romana": {
    equipamento: "Cadeira romana (apoio de antebraços)",
    posicao: "Apoie as costas no encosto e os antebraços nas almofadas, segurando as alças, com o corpo suspenso, as pernas juntas e o abdômen firme.",
    execucao: [
      "Contraia o abdômen e eleve os joelhos em direção ao peito.",
      "Incline levemente o quadril para cima no final.",
      "Desça devagar, controlando o movimento, sem balançar.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Flexores do quadril", "Oblíquos"],
    erros: [
      "Balançar o corpo",
      "Tirar as costas do encosto",
      "Descer os joelhos rápido demais",
    ],
    dicas: [
      "O encosto dá estabilidade e dispensa a força de pegada da barra fixa.",
      "Estenda as pernas para aumentar a dificuldade, quando dominar o movimento.",
    ],
  },
  "Abdominal infra (reverse crunch)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com as mãos ao lado do corpo, os joelhos flexionados a 90° e as pernas elevadas, com as coxas apontando para cima.",
    execucao: [
      "Contraia o abdômen e eleve o quadril do chão, aproximando os joelhos do peito.",
      "Faça uma breve pausa no topo, com o quadril levemente elevado.",
      "Desça devagar, controlando o movimento, até o quadril tocar o chão.",
    ],
    respiracao: CONTRAIR,
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Oblíquos", "Flexores do quadril"],
    erros: [
      "Usar o impulso das pernas, balançando",
      "Elevar o quadril com os braços",
      "Descer o quadril sem controle",
    ],
    dicas: [
      "O movimento é pequeno: pense em levar o quadril em direção ao peito.",
      "Mantenha os braços relaxados no chão.",
    ],
  },
  "Tesoura (flutter kicks)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com as pernas estendidas e as mãos ao lado do corpo (ou sob os glúteos). Pressione a lombar contra o chão e eleve as pernas poucos centímetros.",
    execucao: [
      "Contraia o abdômen e mantenha a lombar apoiada no chão.",
      "Alterne as pernas, subindo uma e descendo a outra, em movimentos curtos e controlados.",
      "Continue alternando pelo tempo ou número de repetições planejado, mantendo o abdômen firme.",
    ],
    respiracao: "Respire de forma contínua e controlada, sem prender o ar.",
    principais: ["Reto abdominal (porção inferior)"],
    secundarios: ["Flexores do quadril", "Oblíquos"],
    erros: [
      "Arquear a lombar",
      "Fazer os movimentos amplos e sem controle",
      "Segurar a respiração",
    ],
    dicas: [
      "Se a lombar descolar do chão, eleve um pouco mais as pernas.",
      "Mantenha o pescoço relaxado.",
    ],
  },

  /* ───────── OBLÍQUOS ───────── */
  "Abdominal bicicleta": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com as mãos atrás da cabeça, os joelhos flexionados e as pernas elevadas. Mantenha a lombar apoiada no chão.",
    execucao: [
      "Leve o cotovelo direito em direção ao joelho esquerdo, enquanto estende a perna direita.",
      "Alterne o movimento, levando o cotovelo esquerdo ao joelho direito e estendendo a perna esquerda, como em uma pedalada.",
      "Continue alternando, de forma controlada, girando o tronco e não apenas os cotovelos.",
    ],
    respiracao: "Expire ao girar o tronco para cada lado e inspire ao alternar.",
    principais: ["Oblíquos", "Reto abdominal"],
    secundarios: ["Flexores do quadril"],
    erros: [
      "Puxar o pescoço com as mãos",
      "Fazer o movimento rápido, sem girar o tronco",
      "Arquear a lombar",
    ],
    dicas: [
      "O giro deve vir do tronco: leve o ombro em direção ao joelho oposto.",
      "Faça o movimento lento para sentir os oblíquos.",
    ],
  },
  "Abdominal oblíquo (cruzado)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com os joelhos flexionados e os pés apoiados no chão. Coloque uma mão atrás da cabeça e a outra ao lado do corpo.",
    execucao: [
      "Contraia o abdômen e eleve o ombro, girando o tronco em direção ao joelho oposto.",
      "Faça uma breve pausa no topo, com o oblíquo contraído.",
      "Desça devagar, controlando o movimento, e repita antes de trocar de lado.",
    ],
    respiracao: CONTRAIR,
    principais: ["Oblíquos"],
    secundarios: ["Reto abdominal"],
    erros: [
      "Puxar o pescoço com a mão",
      "Subir o tronco inteiro, sem girar",
      "Usar o impulso do corpo",
    ],
    dicas: [
      "Pense em levar a axila em direção ao joelho oposto.",
      "Faça todas as repetições de um lado antes de trocar.",
    ],
  },
  "Prancha lateral": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de lado, com o antebraço apoiado no chão, sob o ombro, e as pernas estendidas, com os pés empilhados (ou um à frente do outro).",
    execucao: [
      "Contraia o abdômen e eleve o quadril do chão, formando uma linha reta dos pés à cabeça.",
      "Mantenha a posição, sem deixar o quadril cair nem girar.",
      "Desça devagar e repita do outro lado.",
    ],
    respiracao: SUSTENTAR,
    principais: ["Oblíquos", "Quadrado lombar"],
    secundarios: ["Glúteo médio", "Ombro (estabilização)"],
    erros: [
      "Deixar o quadril cair",
      "Girar o tronco para a frente ou para trás",
      "Segurar a respiração",
    ],
    dicas: [
      "Para facilitar, apoie os joelhos no chão.",
      "Para aumentar a dificuldade, eleve a perna de cima.",
    ],
  },
  "Rotação russa (Russian twist)": {
    equipamento: "Anilha, halter ou bola medicinal (opcional)",
    posicao: "Sente no chão, com os joelhos flexionados e os pés apoiados (ou elevados, para aumentar a dificuldade). Incline o tronco para trás, cerca de 45°, com a coluna reta, e segure o peso com as duas mãos, à frente do peito.",
    execucao: [
      "Gire o tronco para um lado, levando o peso ao lado do quadril.",
      "Gire para o lado oposto, de forma controlada, sem mover as pernas.",
      "Continue alternando, mantendo a coluna reta e o abdômen firme.",
    ],
    respiracao: "Expire ao girar para cada lado e inspire ao passar pelo centro.",
    principais: ["Oblíquos"],
    secundarios: ["Reto abdominal", "Flexores do quadril"],
    erros: [
      "Arredondar a coluna",
      "Mover apenas os braços, sem girar o tronco",
      "Usar carga excessiva e perder o controle",
    ],
    dicas: [
      "Mantenha os pés apoiados para facilitar o movimento.",
      "Olhe para o peso e deixe o tronco acompanhar.",
    ],
  },
  "Lenhador no cabo (woodchop)": {
    equipamento: "Polia alta (ou baixa) e pegador",
    posicao: "Em pé, de lado para a polia ajustada na altura alta, segure o pegador com as duas mãos, com os braços estendidos acima do ombro mais próximo da máquina. Mantenha os pés na largura dos ombros e os joelhos levemente flexionados.",
    execucao: [
      "Contraia o abdômen e puxe o cabo em diagonal, de cima para baixo, girando o tronco para o lado oposto, com os braços estendidos.",
      "Gire também os pés e o quadril, como em um golpe de machado.",
      "Retorne devagar, controlando a tensão do cabo.",
    ],
    respiracao: "Expire ao puxar o cabo e inspire ao retornar.",
    principais: ["Oblíquos"],
    secundarios: ["Reto abdominal", "Glúteos", "Ombros (estabilização)"],
    erros: [
      "Mover apenas os braços, sem girar o tronco",
      "Usar o impulso do corpo",
      "Soltar o cabo no retorno",
    ],
    dicas: [
      "Use cargas moderadas e foque no giro controlado do tronco.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },
  "Flexão lateral com halter": {
    equipamento: "Halter",
    posicao: "Em pé, com os pés na largura dos ombros, segure um haltere em uma das mãos, ao lado do corpo, e coloque a outra mão atrás da cabeça. Mantenha o tronco ereto.",
    execucao: [
      "Incline o tronco lateralmente, em direção ao lado do haltere, sem girar nem inclinar para a frente.",
      "Desça até sentir o alongamento do oblíquo do lado oposto.",
      "Contraia o oblíquo do lado oposto e retorne à posição inicial.",
    ],
    respiracao: "Inspire ao descer e expire ao subir.",
    principais: ["Oblíquos", "Quadrado lombar"],
    secundarios: ["Reto abdominal"],
    erros: [
      "Inclinar o tronco para a frente ou para trás",
      "Usar carga excessiva",
      "Balançar o corpo",
    ],
    dicas: [
      "Use cargas leves a moderadas e faça o movimento controlado.",
      "Trabalhe um lado de cada vez e faça o mesmo número de repetições nos dois.",
    ],
  },

  /* ───────── CORE E ESTABILIZAÇÃO ───────── */
  "Prancha frontal": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Apoie os antebraços no chão, com os cotovelos sob os ombros, e as pontas dos pés. Mantenha o corpo reto, da cabeça aos calcanhares.",
    execucao: [
      "Contraia o abdômen e os glúteos, mantendo o quadril alinhado com o tronco.",
      "Mantenha a posição pelo tempo planejado, com o pescoço neutro, olhando para o chão.",
      "Desça devagar, apoiando os joelhos, ao final.",
    ],
    respiracao: SUSTENTAR,
    principais: ["Reto abdominal", "Transverso do abdômen"],
    secundarios: ["Oblíquos", "Glúteos", "Ombros (estabilização)"],
    erros: [
      "Deixar o quadril cair ou subir demais",
      "Deixar os ombros se aproximarem das orelhas",
      "Segurar a respiração",
    ],
    dicas: [
      "Mantenha o corpo em uma linha reta e interrompa a série quando a postura perder a qualidade.",
      "Para facilitar, apoie os joelhos.",
    ],
  },
  "Prancha com toque no ombro": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Em prancha alta, com as mãos sob os ombros e os pés um pouco afastados, mantenha o corpo reto, da cabeça aos calcanhares, e o abdômen firme.",
    execucao: [
      "Eleve uma mão do chão e toque o ombro oposto, sem girar o quadril.",
      "Devolva a mão ao chão, mantendo o corpo estável.",
      "Alterne com a outra mão, controlando o quadril durante todo o movimento.",
    ],
    respiracao: "Respire de forma contínua e controlada, sem prender o ar.",
    principais: ["Transverso do abdômen", "Oblíquos", "Reto abdominal"],
    secundarios: ["Ombros (estabilização)", "Glúteos"],
    erros: [
      "Balançar o quadril de um lado para o outro",
      "Deixar o quadril subir",
      "Fazer o movimento rápido, sem controle",
    ],
    dicas: [
      "Afaste mais os pés para ter mais estabilidade.",
      "Imagine um copo de água apoiado nas costas, que não pode cair.",
    ],
  },
  "Roda abdominal": {
    equipamento: "Roda abdominal e um tapete",
    posicao: "Ajoelhe-se sobre um tapete e segure a roda com as duas mãos, sob os ombros. Mantenha o abdômen contraído e a coluna neutra.",
    execucao: [
      "Contraia o abdômen e role a roda para a frente, estendendo o corpo, sem deixar o quadril cair.",
      "Vá até onde conseguir manter a lombar neutra, sem arquear.",
      "Contraia o abdômen e puxe a roda de volta, até a posição inicial.",
    ],
    respiracao: "Inspire ao rolar para a frente e expire ao voltar.",
    principais: ["Reto abdominal", "Transverso do abdômen"],
    secundarios: ["Oblíquos", "Dorsais", "Ombros (estabilização)"],
    erros: [
      "Arquear a lombar ao estender o corpo",
      "Estender além do ponto em que a postura se mantém",
      "Voltar com o quadril, em vez de usar o abdômen",
    ],
    dicas: [
      "Comece com amplitude curta e aumente aos poucos.",
      "Para facilitar, role a roda contra uma parede, que limita a distância.",
    ],
  },
  "Dead bug": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com os braços estendidos acima do peito e os quadris e joelhos flexionados a 90°. Pressione a lombar contra o chão.",
    execucao: [
      "Estenda lentamente o braço direito acima da cabeça e a perna esquerda à frente, sem descolar a lombar do chão.",
      "Retorne à posição inicial, de forma controlada.",
      "Alterne, estendendo o braço esquerdo e a perna direita.",
    ],
    respiracao: "Expire ao estender o braço e a perna e inspire ao retornar.",
    principais: ["Transverso do abdômen", "Reto abdominal"],
    secundarios: ["Oblíquos", "Flexores do quadril"],
    erros: [
      "Arquear a lombar ao estender os membros",
      "Mover os braços e as pernas rápido demais",
      "Prender a respiração",
    ],
    dicas: [
      "Estenda os membros apenas até onde conseguir manter a lombar no chão.",
      "O movimento lento é o que torna o exercício eficaz.",
    ],
  },
  "Bird dog": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Apoie as mãos e os joelhos no chão, com as mãos sob os ombros e os joelhos sob o quadril. Mantenha a coluna neutra e o abdômen firme.",
    execucao: [
      "Estenda o braço direito à frente e a perna esquerda para trás, até ficarem alinhados com o tronco.",
      "Mantenha o quadril nivelado e o corpo estável por 1 a 2 segundos.",
      "Retorne devagar à posição inicial e alterne os lados.",
    ],
    respiracao: "Expire ao estender o braço e a perna e inspire ao retornar.",
    principais: ["Eretores da espinha", "Transverso do abdômen", "Glúteo máximo"],
    secundarios: ["Deltoide posterior", "Oblíquos"],
    erros: [
      "Girar o quadril ao elevar a perna",
      "Arquear a lombar",
      "Levantar a perna acima da linha do tronco",
    ],
    dicas: [
      "Eleve os membros apenas até a linha do tronco.",
      "Mantenha o pescoço alinhado com a coluna, olhando para o chão.",
    ],
  },
  "Hollow hold": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de costas, com os braços estendidos acima da cabeça e as pernas estendidas. Pressione a lombar contra o chão.",
    execucao: [
      "Contraia o abdômen e eleve os ombros, os braços e as pernas do chão, formando uma curva, como uma banana.",
      "Mantenha a lombar apoiada no chão e o abdômen firme.",
      "Sustente a posição pelo tempo planejado e desça devagar.",
    ],
    respiracao: SUSTENTAR,
    principais: ["Reto abdominal", "Transverso do abdômen"],
    secundarios: ["Flexores do quadril", "Oblíquos"],
    erros: [
      "Arquear a lombar",
      "Segurar a respiração",
      "Levantar as pernas mais alto do que o abdômen consegue controlar",
    ],
    dicas: [
      "Se a lombar descolar do chão, eleve mais as pernas ou dobre os joelhos.",
      "Para facilitar, mantenha os braços junto ao corpo.",
    ],
  },
  "Pallof press": {
    equipamento: "Polia na altura do peito (ou faixa elástica)",
    posicao: "Em pé, de lado para a polia, ajustada na altura do peito, segure o pegador com as duas mãos junto ao peito. Afaste os pés na largura dos ombros, com os joelhos levemente flexionados.",
    execucao: [
      "Contraia o abdômen e estenda os braços à frente, empurrando o pegador, sem deixar o tronco girar.",
      "Mantenha a posição por 1 a 2 segundos, resistindo à tração do cabo.",
      "Retorne devagar, com o pegador junto ao peito, mantendo o tronco estável.",
    ],
    respiracao: "Expire ao estender os braços e inspire ao retornar.",
    principais: ["Oblíquos", "Transverso do abdômen"],
    secundarios: ["Ombros (estabilização)", "Glúteos"],
    erros: [
      "Deixar o tronco girar na direção da polia",
      "Usar carga excessiva",
      "Inclinar o corpo para o lado oposto",
    ],
    dicas: [
      "É um exercício de anti-rotação: o objetivo é resistir ao giro.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },
  "Vacuum abdominal": {
    equipamento: "Peso corporal",
    posicao: "Fique em pé (ou em quatro apoios, ou deitado de costas com os joelhos flexionados), com o tronco ereto e as mãos na cintura. Respire normalmente.",
    execucao: [
      "Expire todo o ar, de forma lenta, esvaziando os pulmões.",
      "Sem inspirar, puxe o umbigo para dentro, em direção à coluna, contraindo o abdômen profundo.",
      "Mantenha a contração por alguns segundos, respirando de forma superficial, e relaxe.",
    ],
    respiracao: "Expire completamente antes de contrair e mantenha a contração com uma respiração curta e superficial.",
    principais: ["Transverso do abdômen"],
    secundarios: ["Oblíquos", "Diafragma", "Assoalho pélvico"],
    erros: [
      "Contrair os ombros ou o peito",
      "Fazer o exercício logo após uma refeição",
      "Manter a contração por mais tempo do que o conforto permite",
    ],
    dicas: [
      "Faça com o estômago vazio e interrompa se sentir tontura.",
      "Comece com poucos segundos de contração e aumente aos poucos.",
    ],
  },
};