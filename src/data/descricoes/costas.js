const PUXAR_CORPO = "Expire ao puxar o corpo para cima e inspire ao descer de forma controlada.";
const PUXADA = "Expire ao puxar a barra para baixo e inspire ao retornar com controle.";
const REMADA = "Expire ao puxar em direção ao corpo e inspire ao estender os braços.";

export const DESCRICOES_COSTAS = {
  /* ───────── LARGURA (DORSAIS: PUXADAS) ───────── */
  "Barra fixa pronada": {
    equipamento: "Barra fixa",
    posicao: "Segure a barra com as palmas voltadas para a frente, um pouco mais abertas que a largura dos ombros. Fique pendurado com os braços estendidos, as pernas ligeiramente flexionadas e o abdômen firme.",
    execucao: [
      "Comece o movimento abaixando as escápulas, afastando os ombros das orelhas.",
      "Puxe o corpo para cima levando os cotovelos para baixo e para trás, até o queixo passar da barra.",
      "Desça de forma controlada até estender os braços completamente, sem deixar o corpo balançar.",
    ],
    respiracao: PUXAR_CORPO,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Braquial", "Romboides e trapézio inferior", "Antebraço (pegada)"],
    erros: [
      "Balançar o corpo para ganhar impulso",
      "Fazer repetições curtas, sem estender totalmente os braços",
      "Encolher os ombros em direção às orelhas",
    ],
    dicas: [
      "Pense em puxar os cotovelos para baixo, em vez de puxar o queixo para cima.",
      "Se ainda não completa repetições, use a barra assistida ou um elástico.",
    ],
  },
  "Barra fixa supinada (chin-up)": {
    equipamento: "Barra fixa",
    posicao: "Segure a barra com as palmas voltadas para você, na largura dos ombros. Fique pendurado com os braços estendidos e o abdômen firme.",
    execucao: [
      "Abaixe as escápulas e comece a puxar o corpo para cima.",
      "Leve o peito em direção à barra, mantendo os cotovelos próximos do corpo, até o queixo passar da barra.",
      "Desça de forma controlada até estender os braços.",
    ],
    respiracao: PUXAR_CORPO,
    principais: ["Grande dorsal", "Bíceps braquial"],
    secundarios: ["Braquial", "Redondo maior", "Romboides e trapézio inferior", "Antebraço (pegada)"],
    erros: [
      "Balançar o corpo para subir",
      "Fazer repetições curtas",
      "Subir apenas com o bíceps, sem iniciar o movimento pelas escápulas",
    ],
    dicas: [
      "A pegada supinada costuma ser um pouco mais fácil que a pronada porque o bíceps participa mais.",
      "Mantenha o peito aberto e o corpo alinhado durante todo o movimento.",
    ],
  },
  "Barra fixa pegada neutra": {
    equipamento: "Barra fixa com pegadores paralelos",
    posicao: "Segure os pegadores com as palmas voltadas uma para a outra. Fique pendurado com os braços estendidos, as pernas levemente flexionadas e o abdômen firme.",
    execucao: [
      "Abaixe as escápulas e puxe o corpo para cima, levando os cotovelos para baixo e para trás.",
      "Suba até o queixo ficar na altura dos pegadores ou acima deles.",
      "Desça de forma controlada até estender os braços.",
    ],
    respiracao: PUXAR_CORPO,
    principais: ["Grande dorsal"],
    secundarios: ["Bíceps braquial", "Braquial e braquiorradial", "Redondo maior", "Romboides e trapézio inferior"],
    erros: [
      "Balançar o corpo",
      "Encolher os ombros",
      "Descer sem estender totalmente os braços",
    ],
    dicas: [
      "A pegada neutra costuma ser mais confortável para punhos, cotovelos e ombros.",
      "Mantenha o peito para a frente e o abdômen firme.",
    ],
  },
  "Barra fixa assistida na máquina": {
    equipamento: "Máquina de barra fixa assistida",
    posicao: "Ajuste o contrapeso (quanto mais peso, mais ajuda). Apoie os joelhos ou os pés na plataforma e segure as pegadas, com os braços estendidos.",
    execucao: [
      "Abaixe as escápulas e puxe o corpo para cima, levando os cotovelos para baixo e para trás.",
      "Suba até o queixo ficar na altura das pegadas ou acima delas.",
      "Desça de forma controlada até estender os braços.",
    ],
    respiracao: PUXAR_CORPO,
    principais: ["Grande dorsal"],
    secundarios: ["Bíceps braquial", "Redondo maior", "Romboides e trapézio inferior"],
    erros: [
      "Usar assistência demais e nunca progredir",
      "Balançar o corpo",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Reduza o contrapeso aos poucos, até conseguir fazer a barra fixa livre.",
      "Mantenha o mesmo padrão de movimento da barra fixa tradicional.",
    ],
  },
  "Barra fixa com peso": {
    equipamento: "Barra fixa e cinto de lastro (ou colete com peso)",
    posicao: "Prenda a carga ao cinto, de forma que fique pendurada entre as pernas. Segure a barra com a pegada que preferir, na largura dos ombros ou um pouco mais aberta, e fique com os braços estendidos.",
    execucao: [
      "Abaixe as escápulas e puxe o corpo para cima, com o movimento firme e controlado.",
      "Suba até o queixo passar da barra, sem balançar.",
      "Desça devagar até estender os braços completamente.",
    ],
    respiracao: PUXAR_CORPO,
    principais: ["Grande dorsal"],
    secundarios: ["Bíceps braquial", "Redondo maior", "Romboides e trapézio inferior", "Antebraço (pegada)"],
    erros: [
      "Adicionar carga antes de dominar a barra fixa com o peso do corpo",
      "Balançar o corpo, com a carga se movendo",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Só acrescente peso quando fizer várias repetições completas e limpas com o peso do corpo.",
      "Aumente a carga em passos pequenos.",
    ],
  },
  "Puxada frontal pegada aberta": {
    equipamento: "Polia alta com barra reta",
    posicao: "Sente com as coxas presas sob o apoio e segure a barra com as palmas voltadas para a frente, mais abertas que a largura dos ombros. Incline levemente o tronco para trás e mantenha o peito aberto.",
    execucao: [
      "Abaixe as escápulas e puxe a barra em direção à parte alta do peito, levando os cotovelos para baixo.",
      "Contraia as costas por um instante, sem deixar os ombros irem para a frente.",
      "Retorne devagar até estender os braços, sentindo o alongamento do dorsal.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Romboides e trapézio inferior"],
    erros: [
      "Jogar o tronco para trás para puxar a barra",
      "Puxar a barra além do peito, com os ombros projetados para a frente",
      "Soltar a carga na volta",
    ],
    dicas: [
      "Pense em levar os cotovelos para o bolso de trás, não em puxar a barra com as mãos.",
      "Use uma carga que permita controlar a fase de volta.",
    ],
  },
  "Puxada frontal pegada fechada (triângulo)": {
    equipamento: "Polia alta com pegador triangular",
    posicao: "Sente com as coxas presas sob o apoio e segure o pegador triangular com as palmas voltadas uma para a outra. Incline levemente o tronco para trás e mantenha o peito aberto.",
    execucao: [
      "Abaixe as escápulas e puxe o pegador em direção ao peito, mantendo os cotovelos próximos do corpo.",
      "Contraia as costas por um instante, com o peito aberto.",
      "Retorne devagar até estender os braços, sentindo o alongamento do dorsal.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Braquial", "Romboides"],
    erros: [
      "Usar o balanço do tronco para puxar",
      "Soltar a carga no retorno",
      "Encolher os ombros",
    ],
    dicas: [
      "Os cotovelos passam rente ao tronco, o que ajuda a sentir a parte inferior do dorsal.",
      "Mantenha o movimento controlado nas duas fases.",
    ],
  },
  "Puxada frontal supinada": {
    equipamento: "Polia alta com barra reta",
    posicao: "Sente com as coxas presas sob o apoio e segure a barra com as palmas voltadas para você, na largura dos ombros. Incline levemente o tronco para trás e mantenha o peito aberto.",
    execucao: [
      "Abaixe as escápulas e puxe a barra em direção à parte alta do peito, com os cotovelos próximos do corpo.",
      "Contraia as costas e o bíceps por um instante.",
      "Retorne devagar até estender os braços.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal", "Bíceps braquial"],
    secundarios: ["Redondo maior", "Braquial", "Romboides"],
    erros: [
      "Jogar o tronco para trás",
      "Puxar apenas com os braços",
      "Soltar a carga na volta",
    ],
    dicas: [
      "A pegada supinada envolve mais o bíceps; foque em levar os cotovelos para baixo.",
      "Controle a volta até estender totalmente os braços.",
    ],
  },
  "Puxada frontal pegada neutra": {
    equipamento: "Polia alta com pegadores paralelos",
    posicao: "Sente com as coxas presas sob o apoio e segure os pegadores com as palmas voltadas uma para a outra. Incline levemente o tronco para trás e mantenha o peito aberto.",
    execucao: [
      "Abaixe as escápulas e puxe os pegadores em direção ao peito, levando os cotovelos para baixo.",
      "Contraia as costas por um instante, sem projetar os ombros para a frente.",
      "Retorne devagar até estender os braços.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Braquial", "Romboides"],
    erros: [
      "Usar o impulso do tronco",
      "Soltar a carga na volta",
      "Encolher os ombros",
    ],
    dicas: [
      "A pegada neutra costuma ser confortável para punhos e ombros.",
      "Mantenha o peito aberto durante todo o movimento.",
    ],
  },
  "Puxada unilateral na polia": {
    equipamento: "Polia alta com pegador simples",
    posicao: "Sente (ou fique ajoelhado) de frente para a polia, segure o pegador com uma mão e mantenha a outra apoiada na máquina ou na coxa. O tronco fica ereto, com o braço de trabalho estendido para cima.",
    execucao: [
      "Abaixe a escápula e puxe o pegador para baixo, levando o cotovelo ao lado do corpo.",
      "Contraia o dorsal por um instante, sem girar o tronco.",
      "Retorne devagar até estender o braço, alongando o músculo.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Abdômen (estabilização)"],
    erros: [
      "Girar o tronco para puxar",
      "Elevar o ombro em direção à orelha",
      "Soltar a carga na volta",
    ],
    dicas: [
      "Trabalhar um lado por vez ajuda a perceber diferenças de força entre os lados.",
      "Faça o mesmo número de repetições com os dois braços.",
    ],
  },
  "Puxada atrás da nuca": {
    equipamento: "Polia alta com barra reta",
    posicao: "Sente com as coxas presas e segure a barra com as palmas voltadas para a frente, bem abertas. Incline levemente o tronco para a frente e leve a cabeça um pouco para a frente, para a barra passar atrás da cabeça.",
    execucao: [
      "Abaixe as escápulas e puxe a barra para baixo, até a altura da nuca, com os cotovelos apontando para baixo.",
      "Controle a posição sem forçar os ombros além do conforto.",
      "Retorne devagar até estender os braços.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Trapézio e romboides", "Bíceps braquial"],
    erros: [
      "Usar carga alta e perder o controle",
      "Puxar a barra além da nuca ou com a cabeça projetada para a frente",
      "Fazer o movimento com ombros ou pescoço sem mobilidade",
    ],
    dicas: [
      "Exige boa mobilidade de ombros e de coluna cervical: use carga leve e pare se sentir dor.",
      "Se tiver qualquer limitação nos ombros, prefira a puxada frontal.",
    ],
  },
  "Puxada articulada na máquina": {
    equipamento: "Máquina de puxada articulada (braços independentes)",
    posicao: "Ajuste o assento e o apoio das coxas. Segure as alças com os braços estendidos para cima, com o peito aberto e as costas apoiadas ou levemente inclinadas.",
    execucao: [
      "Abaixe as escápulas e puxe as alças para baixo, levando os cotovelos em direção ao corpo.",
      "Contraia as costas por um instante, com o peito aberto.",
      "Retorne devagar até estender os braços, alongando o dorsal.",
    ],
    respiracao: PUXADA,
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Bíceps braquial", "Romboides e trapézio inferior"],
    erros: [
      "Usar o impulso do tronco",
      "Soltar a carga na volta",
      "Encolher os ombros",
    ],
    dicas: [
      "Cada braço trabalha de forma independente, o que ajuda a perceber diferenças entre os lados.",
      "Ajuste o assento antes de aumentar a carga.",
    ],
  },
  "Pulldown com braços estendidos": {
    equipamento: "Polia alta com barra ou corda",
    posicao: "Em pé, de frente para a polia alta, segure a barra com as palmas para baixo, na largura dos ombros. Incline levemente o tronco para a frente, com os braços quase estendidos e os joelhos levemente flexionados.",
    execucao: [
      "Mantendo os cotovelos levemente flexionados e fixos, puxe a barra em arco, para baixo, até a altura das coxas.",
      "Contraia o dorsal no final do movimento, sem dobrar os cotovelos.",
      "Retorne devagar em arco, alongando o dorsal, até a posição inicial.",
    ],
    respiracao: "Expire ao puxar a barra para baixo e inspire ao retornar.",
    principais: ["Grande dorsal"],
    secundarios: ["Redondo maior", "Tríceps braquial (cabeça longa)", "Abdômen (estabilização)"],
    erros: [
      "Dobrar os cotovelos, transformando o movimento em extensão de tríceps",
      "Usar o impulso do tronco",
      "Usar carga excessiva e perder o arco do movimento",
    ],
    dicas: [
      "O movimento vem dos ombros, com os cotovelos em ângulo constante.",
      "Use uma carga moderada e foque em sentir o dorsal.",
    ],
  },
  "Pullover com halter": {
    equipamento: "Halter e banco",
    posicao: "Deite no banco com os ombros apoiados e os pés no chão (ou deitado ao longo do banco) e segure o halter com as duas mãos, acima do peito, com os braços quase estendidos.",
    execucao: [
      "Mantendo os cotovelos levemente flexionados, desça o halter em arco atrás da cabeça, até sentir o alongamento do peito e do dorsal.",
      "Controle a posição, mantendo as costelas para baixo e o abdômen firme.",
      "Retorne em arco, contraindo as costas e o peito, até o halter ficar sobre o peito.",
    ],
    respiracao: "Inspire ao descer o halter e expire ao trazê-lo de volta.",
    principais: ["Grande dorsal", "Peitoral maior"],
    secundarios: ["Tríceps braquial (cabeça longa)", "Serrátil anterior", "Abdômen (estabilização)"],
    erros: [
      "Arquear demais a lombar na descida",
      "Dobrar os cotovelos a cada repetição",
      "Usar carga excessiva e perder o controle atrás da cabeça",
    ],
    dicas: [
      "Escolha uma carga moderada, pois o ombro fica em uma posição de grande alongamento.",
      "Pare a descida no ponto em que a lombar e as costelas começam a se abrir.",
    ],
  },

  /* ───────── ESPESSURA (REMADAS) ───────── */
  "Remada curvada com barra": {
    equipamento: "Barra",
    posicao: "Em pé, com os pés na largura dos quadris e os joelhos levemente flexionados, incline o tronco para a frente, cerca de 45°, com a coluna neutra. Segure a barra com as palmas voltadas para baixo, na largura dos ombros, com os braços estendidos.",
    execucao: [
      "Contraia o abdômen e puxe a barra em direção à parte baixa do peito ou ao abdômen, levando os cotovelos para trás.",
      "Aproxime as escápulas no final do movimento, sem mexer o tronco.",
      "Desça a barra de forma controlada, até estender os braços.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Arredondar a coluna",
      "Usar o impulso do tronco para puxar a barra",
      "Encolher os ombros ao puxar",
    ],
    dicas: [
      "Mantenha a inclinação do tronco fixa durante toda a série.",
      "Use uma carga que permita manter a coluna neutra do início ao fim.",
    ],
  },
  "Remada curvada supinada": {
    equipamento: "Barra",
    posicao: "Em pé, incline o tronco para a frente, cerca de 45°, com a coluna neutra e os joelhos levemente flexionados. Segure a barra com as palmas voltadas para cima, na largura dos ombros.",
    execucao: [
      "Contraia o abdômen e puxe a barra em direção ao abdômen, mantendo os cotovelos próximos do corpo.",
      "Aproxime as escápulas no final, sem mexer o tronco.",
      "Desça a barra de forma controlada, até estender os braços.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Bíceps braquial"],
    secundarios: ["Romboides", "Trapézio médio", "Deltoide posterior", "Eretores da espinha (estabilização)"],
    erros: [
      "Arredondar a coluna",
      "Usar o impulso do tronco",
      "Puxar a barra alto demais, em direção ao peito",
    ],
    dicas: [
      "A pegada supinada envolve mais o bíceps e favorece a parte inferior do dorsal.",
      "Mantenha os cotovelos junto ao corpo durante a puxada.",
    ],
  },
  "Remada Pendlay": {
    equipamento: "Barra e anilhas",
    posicao: "Com a barra no chão, afaste os pés na largura dos quadris e incline o tronco até ficar quase paralelo ao chão, com a coluna neutra. Segure a barra com pegada pronada, um pouco mais aberta que os ombros.",
    execucao: [
      "Contraia o abdômen e puxe a barra de forma rápida e explosiva em direção à parte baixa do peito.",
      "Mantenha o tronco parado e aproxime as escápulas no final.",
      "Desça a barra até o chão, solte a tensão e reinicie a repetição a partir da posição parada.",
    ],
    respiracao: "Inspire antes de puxar e expire durante a puxada.",
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Levantar o tronco durante a puxada",
      "Arredondar a coluna",
      "Não devolver a barra ao chão em cada repetição",
    ],
    dicas: [
      "Cada repetição começa com a barra parada no chão, o que reduz o uso do impulso.",
      "Comece com carga leve para aprender o padrão.",
    ],
  },
  "Remada cavalinho (T-bar)": {
    equipamento: "Barra T (ou barra apoiada no canto) com pegador em V",
    posicao: "Posicione-se sobre a barra, com os pés na largura dos quadris, o tronco inclinado e a coluna neutra. Segure o pegador com as duas mãos e flexione levemente os joelhos.",
    execucao: [
      "Contraia o abdômen e puxe a barra em direção ao peito, levando os cotovelos para trás.",
      "Aproxime as escápulas no final, sem mexer o tronco.",
      "Desça a barra de forma controlada, até estender os braços.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Arredondar a coluna",
      "Usar o impulso do tronco",
      "Encolher os ombros",
    ],
    dicas: [
      "Mantenha a inclinação do tronco constante durante toda a série.",
      "A versão com apoio no peito reduz a exigência da lombar.",
    ],
  },
  "Remada Meadows (landmine)": {
    equipamento: "Barra presa no suporte landmine e anilhas",
    posicao: "Fique de lado para a barra, com o pé mais próximo dela à frente, e incline o tronco, apoiando a mão livre no joelho. Segure a ponta da barra com a outra mão, com o braço estendido.",
    execucao: [
      "Puxe a ponta da barra em direção ao quadril, levando o cotovelo para trás e para o alto.",
      "Contraia as costas por um instante, sem girar o tronco.",
      "Desça de forma controlada, alongando o dorsal, até estender o braço.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Girar o tronco para levantar a barra",
      "Arredondar a coluna",
      "Soltar a barra na descida",
    ],
    dicas: [
      "Faça o mesmo número de repetições com os dois braços.",
      "A trajetória em arco da barra permite uma amplitude confortável.",
    ],
  },
  "Remada unilateral com halter (serrote)": {
    equipamento: "Halter e banco",
    posicao: "Apoie um joelho e a mão do mesmo lado no banco, com o tronco paralelo ao chão e a coluna neutra. Segure o halter com a outra mão, com o braço estendido.",
    execucao: [
      "Puxe o halter em direção ao quadril, mantendo o cotovelo próximo do corpo.",
      "Aproxime a escápula da coluna no final, sem girar o tronco.",
      "Desça o halter devagar, alongando o dorsal, até estender o braço.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Trapézio médio"],
    erros: [
      "Girar o tronco para levantar o halter",
      "Puxar o halter em direção ao ombro, em vez do quadril",
      "Usar o impulso do tronco",
    ],
    dicas: [
      "Pense em puxar o cotovelo para o teto, com o halter acompanhando.",
      "Mantenha o pescoço alinhado com a coluna.",
    ],
  },
  "Remada baixa no cabo (triângulo)": {
    equipamento: "Polia baixa com pegador triangular",
    posicao: "Sente com os pés apoiados na plataforma e os joelhos levemente flexionados. Segure o pegador triangular com os braços estendidos e mantenha o tronco ereto, com o peito aberto.",
    execucao: [
      "Contraia o abdômen e puxe o pegador em direção ao abdômen, levando os cotovelos para trás, rentes ao corpo.",
      "Aproxime as escápulas no final do movimento, sem inclinar o tronco para trás.",
      "Retorne devagar, estendendo os braços, sem arredondar as costas.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Bíceps braquial", "Deltoide posterior", "Eretores da espinha (estabilização)"],
    erros: [
      "Balançar o tronco para trás ao puxar",
      "Arredondar a coluna ao retornar",
      "Encolher os ombros",
    ],
    dicas: [
      "Mantenha o tronco quase parado: o movimento vem dos cotovelos.",
      "Deixe as escápulas se afastarem de forma controlada no retorno.",
    ],
  },
  "Remada baixa pegada aberta": {
    equipamento: "Polia baixa com barra reta",
    posicao: "Sente com os pés apoiados na plataforma e os joelhos levemente flexionados. Segure a barra com as palmas voltadas para baixo, em pegada mais aberta que os ombros, e mantenha o tronco ereto.",
    execucao: [
      "Contraia o abdômen e puxe a barra em direção à parte alta do abdômen, com os cotovelos apontando para os lados.",
      "Aproxime as escápulas no final do movimento, sem inclinar o tronco.",
      "Retorne devagar, estendendo os braços.",
    ],
    respiracao: REMADA,
    principais: ["Romboides", "Trapézio médio", "Grande dorsal"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Balançar o tronco",
      "Puxar apenas com os braços",
      "Arredondar a coluna ao retornar",
    ],
    dicas: [
      "Com os cotovelos mais abertos, a parte superior das costas costuma ser mais exigida.",
      "Use uma carga que permita manter o tronco parado.",
    ],
  },
  "Remada sentada na máquina": {
    equipamento: "Máquina de remada sentada",
    posicao: "Ajuste o assento e o apoio do peito. Sente com o peito apoiado, os pés firmes e segure as alças com os braços estendidos.",
    execucao: [
      "Puxe as alças em direção ao corpo, levando os cotovelos para trás.",
      "Aproxime as escápulas no final, mantendo o peito apoiado.",
      "Retorne devagar, estendendo os braços, sem soltar a carga.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial"],
    erros: [
      "Tirar o peito do apoio para ganhar impulso",
      "Encolher os ombros",
      "Soltar a carga na volta",
    ],
    dicas: [
      "Ajuste o apoio do peito para que os braços fiquem livres ao final do movimento.",
      "A máquina limita o uso da lombar, o que ajuda a focar nas costas.",
    ],
  },
  "Remada com apoio no peito (chest supported)": {
    equipamento: "Banco inclinado e halteres (ou máquina com apoio no peito)",
    posicao: "Deite de bruços em um banco inclinado, com o peito apoiado e os pés no chão. Segure um haltere em cada mão, com os braços estendidos para baixo.",
    execucao: [
      "Puxe os halteres em direção ao quadril ou ao abdômen, levando os cotovelos para trás.",
      "Aproxime as escápulas no final, sem tirar o peito do banco.",
      "Desça devagar, estendendo os braços.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial"],
    erros: [
      "Levantar o peito do banco",
      "Usar o impulso dos ombros",
      "Descer sem controle",
    ],
    dicas: [
      "O apoio no peito elimina o impulso do tronco e poupa a lombar.",
      "Mantenha o pescoço alinhado, olhando para o chão.",
    ],
  },
  "Remada no Smith": {
    equipamento: "Smith machine",
    posicao: "Em pé, com os pés na largura dos quadris, incline o tronco para a frente, cerca de 45°, e flexione levemente os joelhos. Segure a barra com a pegada pronada, na largura dos ombros, e gire os punhos para destravar.",
    execucao: [
      "Contraia o abdômen e puxe a barra em direção ao abdômen, levando os cotovelos para trás.",
      "Aproxime as escápulas no final, sem mexer o tronco.",
      "Desça a barra de forma controlada e, ao fim da série, trave-a nos ganchos.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Eretores da espinha (estabilização)"],
    erros: [
      "Arredondar a coluna",
      "Usar o impulso do tronco",
      "Esquecer de travar a barra no fim da série",
    ],
    dicas: [
      "A trajetória guiada ajuda no controle, mas mantenha a coluna neutra do mesmo jeito.",
      "Posicione os pés de modo que a barra suba e desça sem esbarrar nas pernas.",
    ],
  },
  "Remada invertida (barra baixa)": {
    equipamento: "Barra fixa baixa (no rack ou no Smith)",
    posicao: "Deite sob a barra, posicionada na altura do quadril ou um pouco acima. Segure-a com pegada pronada, um pouco mais aberta que os ombros, com os braços estendidos e o corpo reto, com os calcanhares no chão.",
    execucao: [
      "Contraia o abdômen e os glúteos e puxe o peito em direção à barra, levando os cotovelos para trás.",
      "Aproxime as escápulas no final, mantendo o corpo em linha reta.",
      "Desça de forma controlada, até estender os braços.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Bíceps braquial", "Deltoide posterior", "Abdômen e glúteos (estabilização)"],
    erros: [
      "Deixar o quadril cair",
      "Puxar apenas com os braços, sem aproximar as escápulas",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Quanto mais baixa a barra e mais horizontal o corpo, mais difícil o exercício.",
      "Dobre os joelhos e apoie os pés para facilitar.",
    ],
  },
  "Remada no TRX": {
    equipamento: "Sistema de suspensão (TRX)",
    posicao: "Segure as alças do TRX, incline o corpo para trás, com os braços estendidos e os pés no chão. Mantenha o corpo reto, dos calcanhares à cabeça, com o abdômen firme.",
    execucao: [
      "Puxe o peito em direção às alças, levando os cotovelos para trás e rentes ao corpo.",
      "Aproxime as escápulas no final do movimento, mantendo o corpo alinhado.",
      "Estenda os braços devagar, voltando à posição inicial.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides", "Trapézio médio"],
    secundarios: ["Bíceps braquial", "Deltoide posterior", "Abdômen (estabilização)"],
    erros: [
      "Deixar o quadril cair",
      "Encolher os ombros ao puxar",
      "Balançar o corpo para ganhar impulso",
    ],
    dicas: [
      "Quanto mais horizontal o corpo, mais difícil; ajuste a posição dos pés para regular a dificuldade.",
      "Mantenha as alças estáveis durante o movimento.",
    ],
  },
  "Remada unilateral na polia": {
    equipamento: "Polia baixa (ou média) com pegador simples",
    posicao: "Fique em pé (ou sentado) de frente para a polia, com um pé à frente para estabilidade e o tronco levemente inclinado. Segure o pegador com uma mão, com o braço estendido.",
    execucao: [
      "Puxe o pegador em direção ao quadril, levando o cotovelo para trás e rente ao corpo.",
      "Aproxime a escápula da coluna no final, sem girar o tronco.",
      "Retorne devagar, estendendo o braço, sem deixar o cabo puxar o ombro para a frente.",
    ],
    respiracao: REMADA,
    principais: ["Grande dorsal", "Romboides"],
    secundarios: ["Deltoide posterior", "Bíceps braquial", "Abdômen (estabilização)"],
    erros: [
      "Girar o tronco para puxar",
      "Deixar o ombro ir para a frente na volta",
      "Usar o impulso do corpo",
    ],
    dicas: [
      "Mantenha o tronco estável e o abdômen firme.",
      "Faça o mesmo número de repetições nos dois lados.",
    ],
  },

  /* ───────── TRAPÉZIO E ROMBOIDES ───────── */
  "Encolhimento com barra": {
    equipamento: "Barra",
    posicao: "Em pé, com os pés na largura dos ombros, segure a barra à frente das coxas com pegada pronada, na largura dos ombros e com os braços estendidos. Mantenha o peito aberto e os ombros relaxados.",
    execucao: [
      "Eleve os ombros em direção às orelhas, de forma reta, sem dobrar os cotovelos.",
      "Faça uma pausa curta no topo, contraindo o trapézio.",
      "Desça os ombros devagar até a posição inicial.",
    ],
    respiracao: "Expire ao subir os ombros e inspire ao descer.",
    principais: ["Trapézio superior"],
    secundarios: ["Levantador da escápula", "Antebraço (pegada)"],
    erros: [
      "Rodar os ombros em círculos",
      "Dobrar os cotovelos para ajudar",
      "Projetar a cabeça para a frente",
    ],
    dicas: [
      "O movimento é reto, para cima e para baixo.",
      "Use correias de pulso se a pegada limitar a série.",
    ],
  },
  "Encolhimento com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé, segure um haltere em cada mão, ao lado do corpo, com os braços estendidos e as palmas voltadas para as coxas. Mantenha o peito aberto e os ombros relaxados.",
    execucao: [
      "Eleve os ombros em direção às orelhas, de forma reta, sem dobrar os cotovelos.",
      "Faça uma pausa curta no topo, contraindo o trapézio.",
      "Desça devagar até a posição inicial.",
    ],
    respiracao: "Expire ao subir os ombros e inspire ao descer.",
    principais: ["Trapézio superior"],
    secundarios: ["Levantador da escápula", "Antebraço (pegada)"],
    erros: [
      "Rodar os ombros em círculos",
      "Dobrar os cotovelos",
      "Projetar a cabeça para a frente",
    ],
    dicas: [
      "Com os halteres ao lado do corpo, os ombros têm mais liberdade de movimento do que com a barra.",
      "Mantenha o pescoço alinhado com a coluna.",
    ],
  },
  "Encolhimento no Smith": {
    equipamento: "Smith machine",
    posicao: "Em pé, segure a barra à frente das coxas, com pegada pronada na largura dos ombros e os braços estendidos. Gire os punhos para destravar a barra.",
    execucao: [
      "Eleve os ombros em direção às orelhas, de forma reta, sem dobrar os cotovelos.",
      "Faça uma pausa curta no topo, contraindo o trapézio.",
      "Desça devagar e, ao fim da série, trave a barra nos ganchos.",
    ],
    respiracao: "Expire ao subir os ombros e inspire ao descer.",
    principais: ["Trapézio superior"],
    secundarios: ["Levantador da escápula", "Antebraço (pegada)"],
    erros: [
      "Dobrar os cotovelos para ajudar",
      "Projetar a cabeça para a frente",
      "Esquecer de travar a barra no fim da série",
    ],
    dicas: [
      "A barra guiada mantém o movimento reto, o que facilita o controle.",
      "Fique um pouco atrás da barra para não esbarrar nas coxas.",
    ],
  },
  "Encolhimento na máquina": {
    equipamento: "Máquina de encolhimento",
    posicao: "Posicione-se na máquina e segure as alças com os braços estendidos ao lado do corpo. Mantenha o peito aberto e os ombros relaxados.",
    execucao: [
      "Posicione-se na máquina e segure as alças, ajustando a carga de modo que os braços fiquem estendidos ao lado do corpo.",
      "Eleve os ombros em direção às orelhas, empurrando a alavanca de forma reta, e contraia o trapézio no topo.",
      "Desça devagar, deixando os ombros relaxarem, sem soltar o peso.",
    ],
    respiracao: "Expire ao subir os ombros e inspire ao descer.",
    principais: ["Trapézio superior"],
    secundarios: ["Levantador da escápula", "Antebraço (pegada)"],
    erros: [
      "Rodar os ombros",
      "Dobrar os cotovelos",
      "Usar carga excessiva e fazer meia amplitude",
    ],
    dicas: [
      "Ajuste a altura da máquina antes de começar.",
      "Mantenha o pescoço alinhado, sem projetá-lo para a frente.",
    ],
  },
  "Rack pull": {
    equipamento: "Barra e rack com suportes na altura do joelho",
    posicao: "Posicione a barra nos suportes do rack, na altura do joelho ou um pouco abaixo. Afaste os pés na largura dos quadris, segure a barra com pegada pronada, na largura dos ombros, mantendo a coluna neutra.",
    execucao: [
      "Contraia o abdômen e empurre o chão com os pés, estendendo quadril e joelhos, com a barra subindo rente às pernas.",
      "Termine em pé, com os glúteos contraídos e os ombros para trás, sem hiperestender a lombar.",
      "Desça a barra de forma controlada até os suportes.",
    ],
    respiracao: "Inspire e contraia o abdômen antes de puxar; expire ao final da subida.",
    principais: ["Eretores da espinha", "Trapézio", "Glúteo máximo"],
    secundarios: ["Posterior de coxa", "Romboides", "Antebraço (pegada)"],
    erros: [
      "Arredondar a coluna",
      "Hiperestender a lombar no topo",
      "Deixar a barra se afastar das pernas",
    ],
    dicas: [
      "Como o percurso é menor que o do terra, é possível trabalhar com cargas altas, então mantenha a técnica rigorosa.",
      "Ajuste a altura dos suportes conforme sua mobilidade.",
    ],
  },
  "Elevação em Y (decúbito)": {
    equipamento: "Banco inclinado (ou chão) e halteres leves",
    posicao: "Deite de bruços em um banco inclinado, com o peito apoiado, ou no chão. Estenda os braços para a frente e para cima, formando um Y, com os polegares voltados para cima.",
    execucao: [
      "Eleve os braços, mantendo-os estendidos e em Y, até a altura do tronco ou um pouco acima.",
      "Contraia a parte inferior do trapézio e as escápulas por um instante.",
      "Desça devagar, controlando o movimento.",
    ],
    respiracao: "Expire ao elevar os braços e inspire ao descer.",
    principais: ["Trapézio inferior"],
    secundarios: ["Deltoide posterior", "Romboides", "Manguito rotador"],
    erros: [
      "Usar carga excessiva e perder a posição",
      "Encolher os ombros em direção às orelhas",
      "Arquear a lombar para levantar mais",
    ],
    dicas: [
      "Use cargas bem leves ou nenhuma: o foco é o controle das escápulas.",
      "Mantenha o pescoço neutro, olhando para o chão.",
    ],
  },
  "Elevação em T (decúbito)": {
    equipamento: "Banco inclinado (ou chão) e halteres leves",
    posicao: "Deite de bruços em um banco inclinado, com o peito apoiado, ou no chão. Estenda os braços para os lados, formando um T, com os polegares voltados para cima.",
    execucao: [
      "Eleve os braços para os lados, mantendo-os estendidos, aproximando as escápulas.",
      "Contraia os romboides e o trapézio médio por um instante, no topo.",
      "Desça devagar, controlando o movimento.",
    ],
    respiracao: "Expire ao elevar os braços e inspire ao descer.",
    principais: ["Romboides", "Trapézio médio"],
    secundarios: ["Deltoide posterior", "Manguito rotador"],
    erros: [
      "Usar carga excessiva",
      "Encolher os ombros em direção às orelhas",
      "Arquear a lombar ou usar impulso",
    ],
    dicas: [
      "Use cargas leves e foque em aproximar as escápulas.",
      "Mantenha o pescoço alinhado com a coluna.",
    ],
  },
  "Retração escapular na barra fixa": {
    equipamento: "Barra fixa",
    posicao: "Segure a barra com pegada pronada, na largura dos ombros, e fique pendurado com os braços estendidos. Deixe os ombros subirem de forma passiva, em direção às orelhas.",
    execucao: [
      "Sem dobrar os cotovelos, abaixe e aproxime as escápulas, afastando os ombros das orelhas, e eleve o corpo alguns centímetros.",
      "Segure por um instante, com o peito aberto.",
      "Volte devagar para a posição inicial, deixando as escápulas subirem de forma controlada.",
    ],
    respiracao: "Expire ao elevar o corpo e inspire ao descer.",
    principais: ["Trapézio inferior", "Grande dorsal"],
    secundarios: ["Romboides", "Serrátil anterior", "Antebraço (pegada)"],
    erros: [
      "Dobrar os cotovelos para subir",
      "Balançar o corpo",
      "Fazer o movimento rápido, sem controle",
    ],
    dicas: [
      "É o primeiro passo da barra fixa: aprenda a movimentar as escápulas antes de dobrar os cotovelos.",
      "O movimento é pequeno, então foque na qualidade.",
    ],
  },

  /* ───────── LOMBAR (ERETORES DA ESPINHA) ───────── */
  "Hiperextensão no banco romano": {
    equipamento: "Banco romano (cadeira romana)",
    posicao: "Posicione-se com os pés presos e o quadril apoiado na almofada, de forma que o tronco fique livre para descer. Cruze os braços sobre o peito, com o corpo reto da cabeça aos pés.",
    execucao: [
      "Desça o tronco de forma controlada, dobrando o quadril, mantendo a coluna reta.",
      "Desça até sentir o alongamento do posterior de coxa, sem arredondar as costas.",
      "Eleve o tronco, estendendo o quadril, até o corpo ficar alinhado.",
    ],
    respiracao: "Inspire ao descer e expire ao subir.",
    principais: ["Eretores da espinha", "Glúteo máximo"],
    secundarios: ["Posterior de coxa"],
    erros: [
      "Hiperestender a lombar no topo",
      "Arredondar a coluna ao descer",
      "Usar o impulso para subir",
    ],
    dicas: [
      "Suba só até o corpo ficar alinhado: subir mais não aumenta o trabalho e pode sobrecarregar a lombar.",
      "Comece com o peso do corpo antes de acrescentar carga.",
    ],
  },
  "Hiperextensão a 45°": {
    equipamento: "Máquina de hiperextensão a 45°",
    posicao: "Posicione-se na máquina com os pés presos e o quadril apoiado na almofada, de forma que o tronco fique livre para descer. Mantenha o corpo reto e os braços cruzados no peito.",
    execucao: [
      "Ajuste a almofada na altura do quadril, prenda os calcanhares no apoio e mantenha o corpo estendido, com os braços cruzados no peito.",
      "Flexione o quadril, descendo o tronco com a coluna reta, até sentir o alongamento atrás das coxas.",
      "Estenda o quadril contraindo glúteos e lombar, até o corpo ficar alinhado, sem hiperestender.",
    ],
    respiracao: "Inspire ao descer e expire ao subir.",
    principais: ["Eretores da espinha", "Glúteo máximo"],
    secundarios: ["Posterior de coxa"],
    erros: [
      "Hiperestender a lombar no topo",
      "Arredondar a coluna ao descer",
      "Fazer o movimento rápido, com impulso",
    ],
    dicas: [
      "A inclinação de 45° costuma ser mais confortável que a horizontal para quem está começando.",
      "Ajuste a almofada para que o quadril fique livre para dobrar.",
    ],
  },
  "Hiperextensão reversa": {
    equipamento: "Máquina de hiperextensão reversa (ou banco com as pernas livres)",
    posicao: "Deite de bruços na máquina, com o tronco apoiado e o quadril na borda. Segure nas alças e deixe as pernas penduradas, com os pés presos ao braço de alavanca, se houver.",
    execucao: [
      "Eleve as pernas estendidas, estendendo o quadril, até ficarem alinhadas com o tronco.",
      "Contraia os glúteos e a lombar por um instante, sem hiperestender.",
      "Desça as pernas de forma controlada, sem deixar o peso balançar.",
    ],
    respiracao: "Expire ao subir as pernas e inspire ao descer.",
    principais: ["Glúteo máximo", "Eretores da espinha"],
    secundarios: ["Posterior de coxa"],
    erros: [
      "Levantar as pernas além do alinhamento, arqueando a lombar",
      "Usar o impulso do balanço",
      "Descer sem controle",
    ],
    dicas: [
      "Controle o movimento nas duas fases, sem usar impulso.",
      "Comece com carga leve ou sem peso.",
    ],
  },
  "Extensão lombar na máquina": {
    equipamento: "Máquina de extensão lombar",
    posicao: "Sente na máquina e ajuste o apoio das costas na altura da região lombar. Prenda os pés e posicione o apoio das coxas, mantendo o quadril firme no assento.",
    execucao: [
      "Empurre o apoio para trás, estendendo o tronco, até o corpo ficar alinhado.",
      "Contraia a lombar por um instante, sem hiperestender.",
      "Retorne devagar, controlando o peso.",
    ],
    respiracao: "Expire ao estender o tronco e inspire ao retornar.",
    principais: ["Eretores da espinha"],
    secundarios: ["Glúteo máximo", "Posterior de coxa"],
    erros: [
      "Hiperestender a lombar",
      "Usar o impulso do tronco",
      "Escolher uma carga muito alta, perdendo o controle",
    ],
    dicas: [
      "Use cargas moderadas e movimentos lentos.",
      "Ajuste o apoio com cuidado, pois uma regulagem errada pode sobrecarregar a coluna.",
    ],
  },
  "Superman (peso corporal)": {
    equipamento: "Peso corporal e um tapete",
    posicao: "Deite de bruços em um tapete, com os braços estendidos à frente e as pernas estendidas. Mantenha o pescoço neutro, olhando para o chão.",
    execucao: [
      "Eleve ao mesmo tempo os braços e as pernas do chão, contraindo glúteos e lombar.",
      "Segure por 1 a 2 segundos no topo, sem forçar o pescoço.",
      "Desça devagar até a posição inicial.",
    ],
    respiracao: "Expire ao elevar braços e pernas e inspire ao descer.",
    principais: ["Eretores da espinha", "Glúteo máximo"],
    secundarios: ["Deltoide posterior", "Posterior de coxa"],
    erros: [
      "Levantar a cabeça além da linha da coluna",
      "Arquear a lombar de forma exagerada",
      "Fazer o movimento rápido, com impulso",
    ],
    dicas: [
      "Eleve só até onde conseguir manter o pescoço alinhado e sem dor na lombar.",
      "Para facilitar, eleve braços e pernas alternadamente (braço e perna opostos).",
    ],
  },
};