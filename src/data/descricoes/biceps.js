const ROSCA = "Expire ao flexionar os cotovelos e inspire ao descer de forma controlada.";

export const DESCRICOES_BICEPS = {
  /* ───────── CABEÇA LONGA (PORÇÃO EXTERNA) ───────── */
  "Rosca inclinada com halteres": {
    equipamento: "Halteres e banco inclinado (cerca de 45° a 60°)",
    posicao: "Sente no banco inclinado com as costas e a cabeça apoiadas. Deixe os braços pendurados, ligeiramente atrás do tronco, segurando um haltere em cada mão com as palmas voltadas para a frente.",
    execucao: [
      "Flexione os cotovelos, levando os halteres em direção aos ombros, sem mover os cotovelos para a frente.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até estender quase totalmente os braços, sentindo o alongamento do bíceps.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça longa)"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Deixar os cotovelos irem para a frente",
      "Levantar as costas do banco",
      "Usar carga excessiva e perder o controle da descida",
    ],
    dicas: [
      "Com os braços atrás do tronco, o bíceps trabalha com maior alongamento.",
      "Use cargas moderadas e desça de forma lenta.",
    ],
  },
  "Rosca direta pegada fechada": {
    equipamento: "Barra reta ou barra W",
    posicao: "Em pé, segure a barra com as palmas voltadas para cima, com as mãos mais próximas que a largura dos ombros. Mantenha os cotovelos rentes ao corpo e o tronco ereto.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, sem mover os cotovelos para a frente.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até estender quase totalmente os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça longa)"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco para levantar a barra",
      "Deixar os cotovelos se afastarem do corpo",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Mantenha os punhos neutros, sem dobrá-los para trás.",
      "Mantenha o abdômen firme para evitar o balanço.",
    ],
  },
  "Rosca Bayesian no cabo": {
    equipamento: "Polia baixa e pegador simples",
    posicao: "De costas para a polia baixa, segure o pegador com uma mão, com o braço estendido atrás do corpo. Dê um passo à frente, incline levemente o tronco e mantenha o ombro estável.",
    execucao: [
      "Flexione o cotovelo, levando o pegador em direção ao ombro, mantendo o braço atrás do corpo.",
      "Contraia o bíceps no topo, sem mover o cotovelo para a frente.",
      "Desça devagar, controlando a tensão do cabo, até estender o braço.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça longa)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Trazer o cotovelo para a frente do corpo",
      "Girar o tronco para ajudar",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão no bíceps mesmo quando o braço está estendido, parte em que os halteres pouco exigem.",
      "Faça o mesmo número de repetições nos dois braços.",
    ],
  },
  "Rosca arrastada (drag curl)": {
    equipamento: "Barra reta",
    posicao: "Em pé, segure a barra com as palmas voltadas para cima, na largura dos ombros. Mantenha o tronco ereto e a barra junto às coxas.",
    execucao: [
      "Flexione os cotovelos, levando-os para trás, enquanto a barra desliza rente ao tronco.",
      "Suba até a barra chegar à altura do peito, com os cotovelos atrás do corpo.",
      "Desça devagar, mantendo a barra junto ao corpo, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça longa)"],
    secundarios: ["Braquial", "Deltoide posterior", "Antebraço (pegada)"],
    erros: [
      "Afastar a barra do corpo",
      "Inclinar o tronco para trás",
      "Usar carga excessiva",
    ],
    dicas: [
      "Use cargas mais leves que na rosca direta: o foco é manter o cotovelo para trás.",
      "Mantenha o peito aberto e os ombros para baixo.",
    ],
  },

  /* ───────── CABEÇA CURTA (PORÇÃO INTERNA) ───────── */
  "Rosca Scott com barra W": {
    equipamento: "Banco Scott e barra W",
    posicao: "Sente no banco Scott com a parte de trás dos braços apoiada na almofada e o peito junto ao apoio. Segure a barra W com as palmas voltadas para cima e os braços quase estendidos.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, sem tirar os braços da almofada.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando o peso, até quase estender os braços, sem travá-los.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Estender completamente os cotovelos com carga, o que sobrecarrega o tendão do bíceps",
      "Levantar o quadril ou o tronco para subir a barra",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Pare a descida um pouco antes de estender totalmente os cotovelos.",
      "Use cargas moderadas e movimento controlado.",
    ],
  },
  "Rosca Scott com halteres": {
    equipamento: "Banco Scott e haltere",
    posicao: "Sente no banco Scott com a parte de trás de um braço apoiada na almofada e o peito junto ao apoio. Segure o haltere com a palma voltada para cima e o braço quase estendido.",
    execucao: [
      "Flexione o cotovelo, levando o haltere em direção ao ombro, sem tirar o braço da almofada.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até quase estender o braço, sem travá-lo.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Estender completamente o cotovelo com carga",
      "Levantar o ombro ou o tronco para subir o peso",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Trabalhar um braço por vez ajuda a equilibrar a força dos dois lados.",
      "Mantenha o punho alinhado com o antebraço.",
    ],
  },
  "Rosca Scott na máquina": {
    equipamento: "Máquina de rosca Scott",
    posicao: "Ajuste o assento para que os braços fiquem apoiados na almofada, com as axilas na altura da borda, e os cotovelos alinhados ao eixo da máquina. Segure as alças com as palmas voltadas para cima.",
    execucao: [
      "Flexione os cotovelos, levando as alças em direção aos ombros.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até quase estender os braços, sem travá-los.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Tirar os braços da almofada",
      "Usar impulso do tronco",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "Controle a descida: é onde o bíceps trabalha em alongamento.",
    ],
  },
  "Rosca Scott na polia": {
    equipamento: "Banco Scott, polia baixa e barra reta (ou barra W)",
    posicao: "Posicione o banco Scott de frente para a polia baixa e apoie a parte de trás dos braços na almofada. Segure a barra com as palmas voltadas para cima e os braços quase estendidos.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, sem tirar os braços da almofada.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando a tensão do cabo, até quase estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Levantar o tronco para subir a barra",
      "Estender completamente os cotovelos com carga",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão no bíceps durante todo o movimento.",
      "Use uma carga que permita controlar a descida.",
    ],
  },
  "Rosca concentrada": {
    equipamento: "Haltere e banco",
    posicao: "Sente no banco, com as pernas abertas, e apoie o cotovelo na parte interna da coxa. Segure o haltere com a palma voltada para cima e o braço estendido, sem tocar o chão.",
    execucao: [
      "Flexione o cotovelo, levando o haltere em direção ao ombro, sem mover o braço.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até quase estender o braço.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Balançar o tronco para ajudar",
      "Tirar o cotovelo do apoio",
      "Usar carga excessiva",
    ],
    dicas: [
      "É um exercício de isolamento: use cargas moderadas e foque na contração.",
      "Faça o mesmo número de repetições nos dois braços.",
    ],
  },
  "Rosca spider": {
    equipamento: "Banco inclinado, barra W ou halteres",
    posicao: "Deite de bruços em um banco inclinado (cerca de 45°), com o peito apoiado e os braços pendurados à frente do banco. Segure a barra (ou os halteres) com as palmas voltadas para cima.",
    execucao: [
      "Flexione os cotovelos, levando o peso em direção aos ombros, sem mover os braços.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até quase estender os braços, sem travá-los.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Mover os braços para trás para ajudar a subir",
      "Estender completamente os cotovelos com carga",
      "Soltar o peso na descida",
    ],
    dicas: [
      "O apoio do corpo elimina o impulso e ajuda a isolar o bíceps.",
      "Use cargas moderadas e foque no controle.",
    ],
  },
  "Rosca direta pegada aberta": {
    equipamento: "Barra reta",
    posicao: "Em pé, segure a barra com as palmas voltadas para cima, com as mãos um pouco mais abertas que a largura dos ombros. Mantenha os cotovelos junto ao corpo e o tronco ereto.",
    execucao: [
      "Segure a barra com as mãos um pouco além da largura dos ombros e mantenha os cotovelos rentes ao corpo, sem abri-los.",
      "Flexione os cotovelos, levando a barra aos ombros, e contraia o bíceps no topo por um instante.",
      "Desça de forma lenta até estender quase totalmente os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial (cabeça curta)"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Dobrar os punhos para trás",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Se a pegada aberta incomodar os punhos, volte a uma largura mais confortável.",
      "Mantenha o abdômen firme.",
    ],
  },

  /* ───────── BÍCEPS GERAL ───────── */
  "Rosca direta com barra reta": {
    equipamento: "Barra reta",
    posicao: "Em pé, com os pés na largura dos ombros, segure a barra com as palmas voltadas para cima, na largura dos ombros, e os braços estendidos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, mantendo os cotovelos junto ao corpo.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar até estender os braços, controlando o peso.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco para levantar a barra",
      "Deixar os cotovelos irem para a frente",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Mantenha os punhos retos e o abdômen firme.",
      "Se o balanço aparecer, reduza a carga.",
    ],
  },
  "Rosca direta com barra W": {
    equipamento: "Barra W",
    posicao: "Em pé, segure a barra W nas curvas, com as palmas voltadas para cima e inclinadas, e os braços estendidos junto ao corpo.",
    execucao: [
      "Segure as curvas da barra W, com as palmas inclinadas para cima, e mantenha os cotovelos junto às costelas.",
      "Flexione os cotovelos até a barra chegar à altura dos ombros e contraia o bíceps no topo.",
      "Desça devagar até estender os braços, sem balançar o tronco.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar os cotovelos irem para a frente",
      "Fazer repetições curtas",
    ],
    dicas: [
      "A barra W costuma ser mais confortável para os punhos que a barra reta.",
      "Mantenha o abdômen firme e o tronco parado.",
    ],
  },
  "Rosca alternada com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé (ou sentado), segure um haltere em cada mão, ao lado do corpo, com as palmas voltadas para as coxas. Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione um cotovelo, girando o punho para cima durante a subida, até a palma ficar voltada para o ombro.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, girando o punho de volta, e repita com o outro braço.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar o cotovelo ir para a frente",
      "Descer o haltere rápido",
    ],
    dicas: [
      "A rotação do punho (supinação) durante a subida aumenta a participação do bíceps.",
      "Fixe o braço que não está trabalhando junto ao corpo.",
    ],
  },
  "Rosca simultânea com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé (ou sentado), segure um haltere em cada mão, ao lado do corpo, com as palmas voltadas para a frente. Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione os dois cotovelos ao mesmo tempo, levando os halteres em direção aos ombros.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando o peso, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar os cotovelos irem para a frente",
      "Fazer repetições curtas",
    ],
    dicas: [
      "Fazer os dois braços juntos poupa tempo, mas exige mais atenção ao balanço do tronco.",
      "Mantenha o abdômen firme.",
    ],
  },
  "Rosca na polia baixa com barra": {
    equipamento: "Polia baixa e barra reta (ou barra W)",
    posicao: "Em pé, de frente para a polia baixa, segure a barra com as palmas voltadas para cima, na largura dos ombros, e os braços estendidos. Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, mantendo os cotovelos junto ao corpo.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando a tensão do cabo, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar os cotovelos irem para a frente",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão em todo o movimento, inclusive na parte baixa.",
      "Mantenha o abdômen firme.",
    ],
  },
  "Rosca unilateral na polia": {
    equipamento: "Polia baixa e pegador simples",
    posicao: "Em pé, de frente (ou de lado) para a polia baixa, segure o pegador com uma mão, com a palma voltada para cima e o braço estendido. Mantenha o cotovelo junto ao corpo.",
    execucao: [
      "Flexione o cotovelo, levando o pegador em direção ao ombro, mantendo o cotovelo junto ao corpo.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando a tensão do cabo, até estender o braço.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Inclinar o tronco para o lado",
      "Deixar o cotovelo ir para a frente",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "Trabalhar um braço por vez ajuda a equilibrar a força dos dois lados.",
      "Faça o mesmo número de repetições nos dois braços.",
    ],
  },
  "Rosca na máquina": {
    equipamento: "Máquina de rosca de bíceps",
    posicao: "Ajuste o assento para que os cotovelos fiquem alinhados ao eixo da máquina e os braços apoiados na almofada. Segure as alças com as palmas voltadas para cima.",
    execucao: [
      "Flexione os cotovelos, levando as alças em direção aos ombros.",
      "Contraia o bíceps no topo, por um instante.",
      "Desça devagar, controlando o peso, até quase estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial"],
    erros: [
      "Tirar os braços da almofada",
      "Usar impulso do tronco",
      "Soltar o peso na descida",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "A máquina limita o balanço, o que ajuda a manter o foco no bíceps.",
    ],
  },
  "Rosca 21": {
    equipamento: "Barra reta ou barra W",
    posicao: "Em pé, segure a barra com as palmas voltadas para cima, na largura dos ombros, e os braços estendidos junto ao corpo. Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Faça 7 repetições na metade inferior do movimento, da extensão até cerca de 90° de flexão dos cotovelos.",
      "Sem parar, faça 7 repetições na metade superior, de 90° até a flexão completa.",
      "Finalize com 7 repetições completas, da extensão total à flexão total, o que fecha as 21 repetições.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial"],
    secundarios: ["Braquial", "Braquiorradial", "Antebraço (pegada)"],
    erros: [
      "Usar carga alta demais e balançar o tronco",
      "Deixar de completar as amplitudes de cada etapa",
      "Deixar os cotovelos irem para a frente",
    ],
    dicas: [
      "Use uma carga bem menor que a da rosca direta comum.",
      "É uma técnica intensa: use no fim do treino de bíceps.",
    ],
  },

  /* ───────── BRAQUIAL E BRAQUIORRADIAL ───────── */
  "Rosca martelo com halteres": {
    equipamento: "Halteres",
    posicao: "Em pé (ou sentado), segure um haltere em cada mão, ao lado do corpo, com as palmas voltadas uma para a outra (pegada neutra). Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando os halteres em direção aos ombros, sem girar os punhos.",
      "Contraia o braço no topo, por um instante.",
      "Desça devagar, controlando o peso, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Braquial", "Braquiorradial"],
    secundarios: ["Bíceps braquial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Girar os punhos durante o movimento",
      "Deixar os cotovelos irem para a frente",
    ],
    dicas: [
      "A pegada neutra aumenta a participação do braquial e do braquiorradial.",
      "Mantenha o abdômen firme e os cotovelos junto ao corpo.",
    ],
  },
  "Rosca martelo alternada": {
    equipamento: "Halteres",
    posicao: "Em pé (ou sentado), segure um haltere em cada mão, ao lado do corpo, com as palmas voltadas uma para a outra. Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione um cotovelo, levando o haltere em direção ao ombro, sem girar o punho.",
      "Contraia o braço no topo e desça devagar.",
      "Repita com o outro braço, alternando a cada repetição.",
    ],
    respiracao: ROSCA,
    principais: ["Braquial", "Braquiorradial"],
    secundarios: ["Bíceps braquial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar o cotovelo ir para a frente",
      "Descer o haltere rápido",
    ],
    dicas: [
      "Fixe o braço parado junto ao corpo enquanto o outro trabalha.",
      "Mantenha o ritmo constante e controlado.",
    ],
  },
  "Rosca martelo na corda (polia)": {
    equipamento: "Polia baixa e corda",
    posicao: "Em pé, de frente para a polia baixa, segure a corda com as duas mãos, com as palmas voltadas uma para a outra, e os braços estendidos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando a corda em direção aos ombros, mantendo os cotovelos junto ao corpo.",
      "Contraia os braços no topo, por um instante.",
      "Desça devagar, controlando a tensão do cabo, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Braquial", "Braquiorradial"],
    secundarios: ["Bíceps braquial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Deixar os cotovelos irem para a frente",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão durante todo o movimento.",
      "Mantenha os punhos retos e o peito aberto.",
    ],
  },
  "Rosca martelo cruzada": {
    equipamento: "Halteres",
    posicao: "Em pé, com os pés na largura dos ombros, segure um haltere em cada mão, com as palmas voltadas para as coxas (pegada neutra). Mantenha o tronco ereto e os cotovelos rentes ao corpo, sem encostar os halteres no quadril.",
    execucao: [
      "Flexione um cotovelo, levando o haltere em direção ao ombro oposto, cruzando à frente do peito.",
      "Contraia o braço no topo, por um instante.",
      "Desça devagar até a posição inicial e alterne os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Braquial", "Braquiorradial"],
    secundarios: ["Bíceps braquial", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Girar o tronco para acompanhar o haltere",
      "Deixar o cotovelo se afastar do corpo",
    ],
    dicas: [
      "O cotovelo permanece junto ao corpo, e o haltere cruza o peito.",
      "Mantenha o abdômen firme.",
    ],
  },
  "Rosca inversa com barra": {
    equipamento: "Barra reta ou barra W",
    posicao: "Em pé, segure a barra com as palmas voltadas para baixo (pegada pronada), na largura dos ombros, e os braços estendidos junto ao corpo. Mantenha os punhos retos.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, sem dobrar os punhos.",
      "Contraia os antebraços no topo, por um instante.",
      "Desça devagar até estender os braços, controlando o peso.",
    ],
    respiracao: ROSCA,
    principais: ["Braquiorradial", "Braquial"],
    secundarios: ["Extensores do punho", "Bíceps braquial"],
    erros: [
      "Dobrar os punhos para baixo durante a subida",
      "Balançar o tronco",
      "Usar carga excessiva",
    ],
    dicas: [
      "Use cargas menores que na rosca direta: a pegada pronada limita a força.",
      "Mantenha os punhos alinhados com os antebraços.",
    ],
  },
  "Rosca inversa na polia": {
    equipamento: "Polia baixa e barra reta",
    posicao: "Em pé, de frente para a polia baixa, segure a barra com as palmas voltadas para baixo (pegada pronada), na largura dos ombros, e os braços estendidos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando a barra em direção aos ombros, sem dobrar os punhos.",
      "Contraia os antebraços no topo, por um instante.",
      "Desça devagar, controlando a tensão do cabo, até estender os braços.",
    ],
    respiracao: ROSCA,
    principais: ["Braquiorradial", "Braquial"],
    secundarios: ["Extensores do punho", "Bíceps braquial"],
    erros: [
      "Dobrar os punhos",
      "Balançar o tronco",
      "Soltar o cabo na descida",
    ],
    dicas: [
      "O cabo mantém a tensão nos antebraços durante todo o movimento.",
      "Use uma carga que permita manter os punhos retos.",
    ],
  },
  "Rosca Zottman": {
    equipamento: "Halteres",
    posicao: "Em pé, segure um haltere em cada mão, ao lado do corpo, com as palmas voltadas para a frente (pegada supinada). Mantenha os cotovelos junto ao corpo.",
    execucao: [
      "Flexione os cotovelos, levando os halteres em direção aos ombros, com as palmas voltadas para cima.",
      "No topo, gire os punhos para que as palmas fiquem voltadas para baixo.",
      "Desça devagar, com as palmas para baixo, até estender os braços, e gire os punhos de volta antes da próxima repetição.",
    ],
    respiracao: ROSCA,
    principais: ["Bíceps braquial", "Braquiorradial"],
    secundarios: ["Braquial", "Extensores do punho", "Antebraço (pegada)"],
    erros: [
      "Balançar o tronco",
      "Fazer o giro dos punhos de forma brusca",
      "Usar carga excessiva na fase de descida com a pegada pronada",
    ],
    dicas: [
      "A fase de descida é mais difícil, porque o antebraço trabalha com a pegada pronada; use cargas leves.",
      "Faça os giros de punho de forma lenta e controlada.",
    ],
  },
};