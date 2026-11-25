const DESCER_SUBIR = "Inspire durante a descida e expire durante a subida.";
const ABRIR_FECHAR = "Inspire ao abrir os braços e expire ao fechá-los.";

export const DESCRICOES_PEITO = {
  /* ───────── PEITORAL SUPERIOR ───────── */
  "Supino inclinado com barra": {
    equipamento: "Barra e banco inclinado",
    posicao: "Ajuste o banco entre 30° e 45°. Deite com os pés firmes no chão, as escápulas aproximadas e apoiadas no banco, e segure a barra com pegada um pouco mais aberta que a largura dos ombros.",
    execucao: [
      "Retire a barra do suporte e leve-a até a altura da parte alta do peito, com os cotovelos quase estendidos.",
      "Desça a barra de forma controlada até tocar de leve a parte superior do peito, mantendo os antebraços próximos da vertical.",
      "Empurre a barra para cima até quase estender os cotovelos, sem travá-los, mantendo as escápulas fixas no banco.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Inclinar o banco além de 45°, o que transfere a carga para os ombros",
      "Tirar os glúteos do banco e arquear demais a lombar",
      "Descer a barra em direção ao pescoço ou abrir demais os cotovelos",
    ],
    dicas: [
      "Faça a descida em cerca de 2 a 3 segundos para manter o controle.",
      "Use um parceiro de treino ou as travas do suporte ao trabalhar com cargas altas.",
    ],
  },
  "Supino inclinado com halteres": {
    equipamento: "Halteres e banco inclinado",
    posicao: "Com o banco entre 30° e 45°, sente com os halteres apoiados nas coxas, deite-se e leve-os à altura dos ombros, com as palmas voltadas para a frente e as escápulas apoiadas no banco.",
    execucao: [
      "Empurre os halteres para cima até quase estender os cotovelos, aproximando-os levemente no alto.",
      "Faça uma breve pausa no topo, sem bater um haltere no outro.",
      "Desça de forma controlada até que os cotovelos fiquem um pouco abaixo da linha do peito, sentindo o alongamento do peitoral.",
    ],
    respiracao: "Inspire na descida e expire ao empurrar os halteres.",
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Bater os halteres no topo do movimento",
      "Descer além do ponto confortável para o ombro",
      "Deixar os punhos dobrados para trás, fora do alinhamento com os antebraços",
    ],
    dicas: [
      "Mantenha os punhos sobre os cotovelos durante todo o movimento.",
      "Para colocar e retirar os halteres, apoie-os nas coxas e use o impulso das pernas.",
    ],
  },
  "Supino inclinado no Smith": {
    equipamento: "Smith machine e banco inclinado",
    posicao: "Posicione o banco inclinado (30° a 45°) de modo que a barra desça sobre a parte alta do peito. Deite com os pés firmes no chão, as escápulas apoiadas e pegada um pouco mais aberta que os ombros.",
    execucao: [
      "Gire os punhos para destravar a barra e deixe-a sobre a parte alta do peito, com os cotovelos quase estendidos.",
      "Desça a barra de forma controlada até quase tocar o peito.",
      "Empurre até quase estender os cotovelos e, ao terminar a série, trave a barra nos ganchos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Colocar o banco muito à frente ou atrás, fazendo a barra descer no pescoço ou no abdômen",
      "Esquecer de travar a barra nos ganchos ao fim da série",
      "Deixar os ombros subirem em direção às orelhas",
    ],
    dicas: [
      "Teste a trajetória com carga leve: no ponto mais baixo, os antebraços devem ficar quase verticais.",
      "Ajuste as travas de segurança na altura do peito.",
    ],
  },
  "Supino inclinado na máquina": {
    equipamento: "Máquina de supino inclinado",
    posicao: "Ajuste o assento para que as pegadas fiquem na altura da parte alta do peito. Sente com costas e cabeça apoiadas no encosto, pés no chão e escápulas aproximadas.",
    execucao: [
      "Segure as pegadas com os punhos alinhados aos antebraços.",
      "Empurre as pegadas para a frente e para cima até quase estender os cotovelos.",
      "Retorne devagar até sentir o alongamento do peitoral, sem deixar os pesos descansarem.",
    ],
    respiracao: "Expire ao empurrar e inspire ao retornar.",
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Elevar os ombros em direção às orelhas",
      "Descolar as costas do encosto para ganhar impulso",
      "Soltar a carga no retorno em vez de controlá-lo",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga; um ajuste errado sobrecarrega o ombro.",
      "Mantenha a mesma velocidade na ida e na volta.",
    ],
  },
  "Crucifixo inclinado com halteres": {
    equipamento: "Halteres e banco inclinado (cerca de 30°)",
    posicao: "Deite no banco com inclinação de cerca de 30°, escápulas apoiadas. Segure os halteres acima do peito, com as palmas voltadas uma para a outra e os cotovelos levemente flexionados.",
    execucao: [
      "Mantendo a leve flexão dos cotovelos, abra os braços em arco até sentir o alongamento no peito.",
      "Pare quando os cotovelos estiverem aproximadamente na altura do peito.",
      "Retorne em arco, como se abraçasse uma árvore, até aproximar os halteres acima do peito.",
    ],
    respiracao: ABRIR_FECHAR,
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Bíceps braquial (estabilização)"],
    erros: [
      "Dobrar e esticar os cotovelos, transformando o movimento em um supino",
      "Descer demais, sobrecarregando a articulação do ombro",
      "Usar cargas altas demais e perder o controle da abertura",
    ],
    dicas: [
      "O ângulo dos cotovelos deve permanecer o mesmo do início ao fim.",
      "Prefira cargas moderadas e foque no alongamento controlado.",
    ],
  },
  "Crucifixo inclinado no cabo": {
    equipamento: "Polias (cabos) na posição baixa e banco inclinado",
    posicao: "Posicione o banco inclinado entre as duas polias, reguladas na posição baixa. Deite com as escápulas apoiadas e segure os pegadores com as palmas voltadas para cima ou para dentro, cotovelos levemente flexionados.",
    execucao: [
      "Com os braços abertos ao lado do corpo, mantenha a leve flexão dos cotovelos.",
      "Traga as mãos em arco para cima, aproximando-as acima da parte alta do peito.",
      "Retorne devagar, abrindo os braços até sentir o alongamento do peitoral.",
    ],
    respiracao: "Expire ao fechar os braços e inspire ao abri-los.",
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Usar o impulso do tronco para levantar a carga",
      "Flexionar os cotovelos a cada repetição, transformando o movimento em um supino",
      "Deixar os cabos puxarem os ombros para a frente no retorno",
    ],
    dicas: [
      "A tensão constante do cabo funciona melhor com carga moderada e movimento lento.",
      "Mantenha o peito aberto e os ombros para baixo durante todo o movimento.",
    ],
  },
  "Crossover polia baixa (baixo para cima)": {
    equipamento: "Cabos (polia dupla) na posição baixa",
    posicao: "Em pé entre as polias, com os pegadores nas mãos, um pé à frente para estabilidade, o tronco levemente inclinado e os cotovelos levemente flexionados.",
    execucao: [
      "Com os braços abertos ao lado e ligeiramente abaixo do quadril, inicie o movimento.",
      "Eleve as mãos em arco até a altura do peito alto ou do rosto, aproximando-as à frente.",
      "Retorne de forma controlada até sentir o alongamento do peito.",
    ],
    respiracao: "Expire ao subir as mãos e inspire ao voltar.",
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Puxar com o impulso do tronco",
      "Encolher os ombros durante a subida",
      "Flexionar e estender os cotovelos em vez de manter o arco",
    ],
    dicas: [
      "Mantenha o peito aberto e o abdômen firme durante todo o movimento.",
      "Escolha uma carga que permita controlar a volta, sem deixar os cabos puxarem os braços.",
    ],
  },

  /* ───────── PEITORAL MÉDIO ───────── */
  "Supino reto com barra": {
    equipamento: "Barra e banco reto",
    posicao: "Deite no banco com os olhos alinhados à barra, pés firmes no chão, escápulas aproximadas e apoiadas, e pegada um pouco mais aberta que a largura dos ombros.",
    execucao: [
      "Retire a barra do suporte e estabilize-a sobre o peito, com os cotovelos quase estendidos.",
      "Desça a barra de forma controlada até a região média do peito, com os punhos alinhados aos antebraços.",
      "Empurre a barra para cima até quase estender os cotovelos, sem travá-los.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Tirar os pés do chão",
      "Quicar a barra no peito",
      "Abrir os cotovelos em excesso",
      "Perder o controle da descida",
    ],
    dicas: [
      "Mantenha as escápulas estabilizadas no banco durante toda a série.",
      "Use um parceiro de treino ou as travas de segurança em séries pesadas.",
    ],
  },
  "Supino reto com halteres": {
    equipamento: "Halteres e banco reto",
    posicao: "Sente com os halteres nas coxas, deite-se e leve-os à altura do peito, com as palmas voltadas para os pés (ou levemente para dentro) e as escápulas apoiadas no banco.",
    execucao: [
      "Empurre os halteres para cima até quase estender os cotovelos, aproximando-os levemente no alto.",
      "Mantenha os punhos alinhados com os cotovelos durante a subida.",
      "Desça de forma controlada até que os cotovelos passem um pouco da linha do peito, sentindo o alongamento do peitoral.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Descer rápido demais e perder o controle",
      "Deixar os halteres se afastarem demais para os lados",
      "Bater os halteres no topo",
    ],
    dicas: [
      "A amplitude costuma ser maior que a da barra; escolha uma carga que você controle ao longo de todo o trajeto.",
      "Na fase final, alinhe os halteres sobre a linha do peito.",
    ],
  },
  "Supino reto no Smith": {
    equipamento: "Smith machine e banco reto",
    posicao: "Posicione o banco de modo que a barra desça sobre a linha do peito médio. Deite com os pés firmes no chão, as escápulas apoiadas e pegada um pouco mais aberta que os ombros.",
    execucao: [
      "Gire os punhos para destravar a barra e estabilize-a sobre o peito.",
      "Desça de forma controlada até quase tocar o peito.",
      "Empurre até quase estender os cotovelos e, ao fim da série, trave a barra nos ganchos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Banco mal posicionado, fazendo a barra descer fora da linha do peito",
      "Arquear excessivamente a lombar",
      "Esquecer de travar a barra no fim da série",
    ],
    dicas: [
      "Use as travas de segurança na altura do peito.",
      "Como a trajetória da barra é fixa, ajuste o banco e os pés até o movimento ficar confortável para os ombros.",
    ],
  },
  "Supino reto na máquina (chest press)": {
    equipamento: "Máquina de supino sentada (chest press)",
    posicao: "Ajuste o assento para que as pegadas fiquem na altura do meio do peito. Sente com costas e cabeça apoiadas, pés no chão e escápulas aproximadas.",
    execucao: [
      "Segure as pegadas com os punhos alinhados aos antebraços.",
      "Empurre as pegadas para a frente até quase estender os cotovelos.",
      "Retorne devagar até sentir o alongamento do peito, sem deixar os pesos descansarem.",
    ],
    respiracao: "Expire ao empurrar e inspire ao retornar.",
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Descolar as costas do encosto",
      "Elevar os ombros",
      "Travar os cotovelos com força no final",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "A trajetória guiada ajuda a aprender o padrão do movimento e dispensa parceiro de treino.",
    ],
  },
  "Supino articulado (convergente)": {
    equipamento: "Máquina de supino com braços articulados (trajetória convergente)",
    posicao: "Regule o assento para que as pegadas fiquem alinhadas ao meio do peito. Sente com as costas apoiadas e segure as pegadas com os punhos em posição neutra.",
    execucao: [
      "Empurre os braços da máquina para a frente; eles se aproximam em arco.",
      "No final, aproxime as mãos sem bater uma pegada na outra e sem travar os cotovelos.",
      "Volte devagar, abrindo os braços até sentir o alongamento do peitoral.",
    ],
    respiracao: "Expire ao empurrar e inspire ao voltar.",
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Usar as costas para empurrar, descolando-as do encosto",
      "Soltar a carga no retorno",
      "Usar o assento muito alto ou muito baixo, o que sobrecarrega o ombro",
    ],
    dicas: [
      "A trajetória em arco permite aproximar as mãos no final, o que facilita uma contração mais marcada do peito.",
      "Faça uma pausa curta ao final e controle a volta.",
    ],
  },
  "Supino no chão (floor press)": {
    equipamento: "Barra ou halteres e o chão",
    posicao: "Deite no chão com os joelhos flexionados e os pés apoiados. Segure a barra ou os halteres sobre o peito, com os cotovelos em cerca de 45° em relação ao tronco.",
    execucao: [
      "Desça o peso de forma controlada até que a parte de trás dos braços toque o chão.",
      "Faça uma breve pausa, sem relaxar a musculatura, com os ombros firmes.",
      "Empurre o peso para cima até quase estender os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior", "Tríceps braquial"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Deixar os cotovelos caírem pesados no chão",
      "Abrir os cotovelos demais",
      "Perder a tensão na pausa e usar impulso para subir",
    ],
    dicas: [
      "Como o chão limita a descida, o movimento costuma ser mais confortável para os ombros e dá ênfase à fase final da subida.",
      "Mantenha as escápulas firmes e os punhos alinhados.",
    ],
  },
  "Supino com pegada neutra (halteres)": {
    equipamento: "Halteres e banco reto",
    posicao: "Deite no banco, segure os halteres com as palmas voltadas uma para a outra (pegada neutra) e leve-os à altura do peito, com os cotovelos mais próximos do tronco.",
    execucao: [
      "Empurre os halteres para cima mantendo as palmas voltadas uma para a outra.",
      "Mantenha os cotovelos em cerca de 45° em relação ao tronco durante todo o movimento.",
      "Desça de forma controlada até a altura do peito.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Abrir os cotovelos como no supino tradicional",
      "Girar os punhos ao longo do movimento",
      "Descer rápido demais",
    ],
    dicas: [
      "Com os cotovelos mais próximos do corpo, o tríceps participa mais e muitos praticantes sentem menos desconforto nos ombros.",
      "Mantenha os halteres alinhados sobre a linha do peito.",
    ],
  },
  "Svend press": {
    equipamento: "Duas anilhas (ou um halter leve)",
    posicao: "Em pé ou sentado, junte duas anilhas lado a lado entre as palmas, na altura do peito, com os cotovelos flexionados e pressionando uma anilha contra a outra.",
    execucao: [
      "Mantendo a pressão constante entre as palmas, estenda os braços à frente na altura do peito.",
      "Faça uma breve pausa com os braços estendidos, sem travar os cotovelos.",
      "Retorne devagar até o peito, sem aliviar a pressão entre as anilhas.",
    ],
    respiracao: "Expire ao estender os braços e inspire ao retornar.",
    principais: ["Peitoral maior (contração de adução)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Aliviar a pressão entre as anilhas durante o movimento",
      "Usar carga pesada e perder a postura",
      "Elevar os ombros",
    ],
    dicas: [
      "É um exercício de contração: use carga leve e foque em apertar o peito.",
      "Mantenha o tronco firme e as costelas para baixo.",
    ],
  },
  "Crucifixo reto com halteres": {
    equipamento: "Halteres e banco reto",
    posicao: "Deite no banco reto com os halteres acima do peito, palmas voltadas uma para a outra, cotovelos levemente flexionados e escápulas apoiadas.",
    execucao: [
      "Abra os braços em arco até sentir o alongamento no peito.",
      "Pare quando os cotovelos estiverem aproximadamente na altura do peito.",
      "Retorne em arco até aproximar os halteres acima do peito.",
    ],
    respiracao: ABRIR_FECHAR,
    principais: ["Peitoral maior (porção esternal)"],
    secundarios: ["Deltoide anterior", "Bíceps braquial (estabilização)"],
    erros: [
      "Flexionar e estender os cotovelos a cada repetição",
      "Descer além do conforto do ombro",
      "Usar cargas altas e perder o arco do movimento",
    ],
    dicas: [
      "Pense em abraçar uma árvore grande: o arco é o que trabalha o peito.",
      "Use cargas menores que as do supino.",
    ],
  },
  "Crucifixo na máquina (peck deck)": {
    equipamento: "Máquina peck deck (voador)",
    posicao: "Ajuste o assento para que os braços fiquem na altura do peito. Sente com as costas apoiadas, antebraços nas almofadas (ou mãos nas pegadas) e cotovelos levemente flexionados.",
    execucao: [
      "Aproxime os braços à frente do peito, em arco, sem encolher os ombros.",
      "Faça uma breve pausa com o peito contraído.",
      "Retorne devagar até sentir alongamento no peito, sem passar da linha dos ombros.",
    ],
    respiracao: "Expire ao fechar os braços e inspire ao abri-los.",
    principais: ["Peitoral maior"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Deixar os ombros irem para a frente no retorno",
      "Usar impulso das costas",
      "Soltar a carga na volta",
    ],
    dicas: [
      "Mantenha o peito aberto e as escápulas apoiadas no encosto.",
      "Ajuste a amplitude inicial da máquina se sentir desconforto no ombro.",
    ],
  },
  "Crossover polia média": {
    equipamento: "Cabos (polia dupla) na altura do peito ou dos ombros",
    posicao: "Em pé entre as polias, reguladas na altura dos ombros ou do peito, com um pé à frente, o tronco levemente inclinado e os cotovelos levemente flexionados.",
    execucao: [
      "Com os braços abertos na altura do peito, inicie o movimento.",
      "Traga as mãos em arco, na horizontal, até encontrá-las à frente do peito.",
      "Retorne devagar até sentir o alongamento do peitoral.",
    ],
    respiracao: "Expire ao juntar as mãos e inspire ao abrir os braços.",
    principais: ["Peitoral maior (porção esternal)"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Usar o impulso do tronco",
      "Dobrar os cotovelos a cada repetição",
      "Encolher os ombros",
    ],
    dicas: [
      "Mantenha o tronco estável e o abdômen firme.",
      "Cruze levemente as mãos no final para reforçar a contração, se for confortável.",
    ],
  },

  /* ───────── PEITORAL INFERIOR ───────── */
  "Supino declinado com barra": {
    equipamento: "Barra e banco declinado",
    posicao: "Deite no banco declinado (cerca de 15° a 30°) com as pernas presas no apoio. Aproxime as escápulas e segure a barra com pegada um pouco mais aberta que os ombros.",
    execucao: [
      "Retire a barra do suporte e estabilize-a sobre a parte baixa do peito.",
      "Desça de forma controlada até tocar de leve a parte inferior do peito.",
      "Empurre até quase estender os cotovelos, sem travá-los.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Usar inclinação exagerada do banco, o que aumenta a pressão na cabeça e dificulta o controle",
      "Quicar a barra no peito",
      "Retirar ou recolocar a barra sem apoio de segurança",
    ],
    dicas: [
      "Faça este exercício com parceiro de treino ou trava de segurança, pois a posição dificulta resgatar a barra.",
      "Quem tem pressão alta ou problema ocular deve consultar um profissional antes de usar bancos declinados.",
    ],
  },
  "Supino declinado com halteres": {
    equipamento: "Halteres e banco declinado",
    posicao: "Com o banco declinado e os pés presos, posicione os halteres na altura da parte baixa do peito, com as palmas voltadas para a frente ou para dentro e as escápulas apoiadas.",
    execucao: [
      "Empurre os halteres para cima até quase estender os cotovelos.",
      "Aproxime-os levemente no topo, sem bater um no outro.",
      "Desça de forma controlada até a altura da parte baixa do peito.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Descer rápido e perder o controle dos halteres",
      "Deixar os punhos dobrarem",
      "Usar impulso exagerado para posicionar os halteres",
    ],
    dicas: [
      "Peça ajuda para entregar e receber os halteres nas cargas altas.",
      "Mantenha as escápulas fixas no banco.",
    ],
  },
  "Supino declinado no Smith": {
    equipamento: "Smith machine e banco declinado",
    posicao: "Posicione o banco declinado de modo que a barra desça sobre a parte baixa do peito. Prenda os pés no apoio e segure a barra com pegada um pouco mais aberta que os ombros.",
    execucao: [
      "Gire os punhos para destravar a barra.",
      "Desça de forma controlada até quase tocar a parte baixa do peito.",
      "Empurre até quase estender os cotovelos e trave a barra nos ganchos ao final.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Posicionar o banco de modo que a barra desça fora da linha do peito",
      "Esquecer de travar a barra no fim da série",
      "Tirar a lombar do banco ao empurrar",
    ],
    dicas: [
      "Use as travas de segurança.",
      "Teste a trajetória com carga leve antes de progredir.",
    ],
  },
  "Supino declinado na máquina": {
    equipamento: "Máquina de supino declinado",
    posicao: "Ajuste o assento para que as pegadas fiquem na linha da parte baixa do peito, com as costas apoiadas e os pés no chão ou no apoio.",
    execucao: [
      "Segure as pegadas com os punhos alinhados aos antebraços.",
      "Empurre para a frente e levemente para baixo até quase estender os cotovelos.",
      "Retorne devagar, sem deixar os pesos descansarem.",
    ],
    respiracao: "Expire ao empurrar e inspire ao retornar.",
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Elevar os ombros",
      "Descolar as costas do encosto",
      "Soltar a carga no retorno",
    ],
    dicas: [
      "Ajuste o assento antes de aumentar a carga.",
      "É uma alternativa mais estável quando não há parceiro de treino.",
    ],
  },
  "Crucifixo declinado com halteres": {
    equipamento: "Halteres e banco declinado",
    posicao: "Deite no banco declinado com os pés presos, halteres acima do peito, palmas voltadas uma para a outra e cotovelos levemente flexionados.",
    execucao: [
      "Abra os braços em arco até sentir o alongamento no peito.",
      "Pare com os cotovelos aproximadamente na altura do peito.",
      "Retorne em arco até aproximar os halteres acima da parte baixa do peito.",
    ],
    respiracao: ABRIR_FECHAR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Deltoide anterior", "Bíceps braquial (estabilização)"],
    erros: [
      "Flexionar e estender os cotovelos",
      "Descer demais",
      "Usar cargas altas que tiram o controle do arco",
    ],
    dicas: [
      "Use cargas leves a moderadas: o braço de alavanca é longo.",
      "Peça ajuda para posicionar os halteres, se necessário.",
    ],
  },
  "Crossover polia alta (cima para baixo)": {
    equipamento: "Cabos (polia dupla) na posição alta",
    posicao: "Em pé entre as polias altas, com os pegadores nas mãos, um pé à frente, o tronco levemente inclinado para a frente e os cotovelos levemente flexionados.",
    execucao: [
      "Com os braços abertos acima da linha dos ombros, inicie o movimento.",
      "Traga as mãos em arco para baixo até se encontrarem à frente do abdômen ou do quadril.",
      "Retorne devagar até sentir o alongamento do peito.",
    ],
    respiracao: "Expire ao trazer as mãos para baixo e inspire ao voltar.",
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Deltoide anterior"],
    erros: [
      "Usar o impulso do tronco",
      "Dobrar os cotovelos a cada repetição",
      "Elevar os ombros",
    ],
    dicas: [
      "Mantenha o peito aberto durante todo o movimento.",
      "Controle a volta para manter a tensão no peito.",
    ],
  },
  "Mergulho nas paralelas (foco em peito)": {
    equipamento: "Barras paralelas",
    posicao: "Apoie-se nas barras com os braços estendidos, incline o tronco para a frente (cerca de 30°) e cruze os pés atrás do corpo.",
    execucao: [
      "Flexione os cotovelos, mantendo-os ligeiramente abertos, e desça o corpo de forma controlada.",
      "Desça até cerca de 90° de flexão nos cotovelos, ou até onde o ombro estiver confortável.",
      "Empurre as barras para subir, mantendo o tronco inclinado, até quase estender os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Descer demais, deixando os ombros ultrapassarem muito a linha das mãos",
      "Manter o tronco vertical, o que desloca o trabalho para o tríceps",
      "Balançar o corpo para ganhar impulso",
    ],
    dicas: [
      "Se ainda não consegue fazer repetições completas, use a versão assistida na máquina.",
      "Interrompa o exercício se sentir dor na parte da frente do ombro.",
    ],
  },
  "Mergulho assistido na máquina (foco em peito)": {
    equipamento: "Máquina de mergulho assistido",
    posicao: "Ajuste o contrapeso (quanto maior, mais ajuda), apoie os joelhos ou os pés na plataforma, segure as pegadas e incline o tronco ligeiramente para a frente.",
    execucao: [
      "Flexione os cotovelos de forma controlada, mantendo o tronco inclinado.",
      "Desça até cerca de 90° nos cotovelos ou até onde o ombro estiver confortável.",
      "Empurre as pegadas para baixo até quase estender os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior"],
    erros: [
      "Usar muita assistência por muito tempo, sem progredir",
      "Elevar os ombros em direção às orelhas",
      "Manter o tronco ereto, o que desloca o trabalho para o tríceps",
    ],
    dicas: [
      "Diminua a assistência gradualmente à medida que ganhar força.",
      "Mantenha o peito aberto e os ombros para baixo.",
    ],
  },

  /* ───────── FLEXÕES E PESO CORPORAL ───────── */
  "Flexão de braço tradicional": {
    equipamento: "Peso corporal",
    posicao: "Em posição de prancha alta, com as mãos um pouco mais abertas que os ombros, os braços estendidos e o corpo alinhado da cabeça aos calcanhares.",
    execucao: [
      "Flexione os cotovelos, mantendo-os em cerca de 45° em relação ao tronco, e desça o peito em direção ao chão.",
      "Desça até o peito ficar a poucos centímetros do chão, mantendo abdômen e glúteos contraídos.",
      "Empurre o chão até estender os braços, sem travar os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen (estabilização)"],
    erros: [
      "Deixar o quadril cair ou subir",
      "Abrir os cotovelos a 90° em relação ao tronco",
      "Fazer repetições curtas, sem descer o suficiente",
    ],
    dicas: [
      "Se estiver difícil, comece com as mãos apoiadas em um banco ou com os joelhos no chão.",
      "Mantenha o pescoço neutro, olhando um ponto no chão à frente das mãos.",
    ],
  },
  "Flexão com pés elevados": {
    equipamento: "Banco ou step e peso corporal",
    posicao: "Apoie os pés em um banco ou step e as mãos no chão, um pouco mais abertas que os ombros, com o corpo alinhado da cabeça aos calcanhares.",
    execucao: [
      "Flexione os cotovelos, a cerca de 45° do tronco, e desça o peito em direção ao chão.",
      "Mantenha abdômen e glúteos contraídos para não deixar o quadril cair.",
      "Empurre o chão até estender os braços, sem travar os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção clavicular)"],
    secundarios: ["Deltoide anterior", "Tríceps braquial", "Abdômen (estabilização)"],
    erros: [
      "Elevar demais os pés, sobrecarregando os ombros",
      "Deixar a lombar afundar",
      "Descer apenas parte do movimento",
    ],
    dicas: [
      "Quanto mais alto o apoio dos pés, maior a carga sobre a parte alta do peito e os ombros; aumente gradualmente.",
      "Domine a flexão tradicional antes de elevar os pés.",
    ],
  },
  "Flexão com mãos elevadas": {
    equipamento: "Banco, barra no rack ou degrau",
    posicao: "Apoie as mãos em um banco ou barra na altura do quadril ou do peito, um pouco mais abertas que os ombros, com os pés no chão e o corpo reto.",
    execucao: [
      "Flexione os cotovelos e leve o peito em direção ao apoio.",
      "Desça de forma controlada, mantendo o corpo em linha reta.",
      "Empurre o apoio até estender os braços.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior (porção inferior)"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen (estabilização)"],
    erros: [
      "Deixar o quadril cair",
      "Usar um apoio instável",
      "Fazer movimentos curtos",
    ],
    dicas: [
      "Quanto mais alto o apoio, mais leve o exercício; abaixe-o aos poucos até chegar ao chão.",
      "É uma boa porta de entrada para quem ainda não faz a flexão tradicional.",
    ],
  },
  "Flexão aberta": {
    equipamento: "Peso corporal",
    posicao: "Em prancha alta, com as mãos bem mais abertas que os ombros (cerca de 1,5 vez a largura deles), dedos apontados para a frente ou levemente para fora e o corpo alinhado.",
    execucao: [
      "Flexione os cotovelos e desça o peito em direção ao chão, com os cotovelos mais abertos que na flexão tradicional.",
      "Controle a descida até o peito ficar próximo do chão, sem deixar os ombros caírem para a frente.",
      "Empurre o chão e estenda os braços.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Deltoide anterior", "Tríceps braquial"],
    erros: [
      "Abrir demais as mãos, o que sobrecarrega os ombros",
      "Deixar os ombros se projetarem para a frente",
      "Deixar o quadril cair",
    ],
    dicas: [
      "Abra as mãos só até onde o ombro estiver confortável.",
      "Comece com poucas repetições, pois a posição pode ser mais exigente para os ombros.",
    ],
  },
  "Flexão archer": {
    equipamento: "Peso corporal",
    posicao: "Em prancha alta, com as mãos bem afastadas (bem mais que a largura dos ombros) e o corpo alinhado da cabeça aos calcanhares.",
    execucao: [
      "Flexione um cotovelo e desça o corpo em direção a esse lado, mantendo o outro braço estendido.",
      "Desça até o peito ficar próximo do chão do lado que flexiona.",
      "Empurre para voltar ao centro e alterne o lado na repetição seguinte.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen (estabilização)"],
    erros: [
      "Girar o tronco em vez de deslocar o peso para o lado",
      "Flexionar o braço que deveria ficar estendido",
      "Deixar o quadril cair",
    ],
    dicas: [
      "É um exercício avançado: domine a flexão tradicional e a aberta antes.",
      "Comece com amplitude menor e aumente aos poucos.",
    ],
  },
  "Flexão com palmas": {
    equipamento: "Peso corporal",
    posicao: "Em prancha alta, com as mãos um pouco mais abertas que os ombros e o corpo alinhado. Faça em uma superfície firme e antiderrapante.",
    execucao: [
      "Desça o peito em direção ao chão com controle.",
      "Empurre o chão com força explosiva até as mãos saírem do chão e bata as palmas rapidamente.",
      "Receba o corpo com os cotovelos levemente flexionados para amortecer o impacto e repita.",
    ],
    respiracao: "Inspire na descida e expire no impulso.",
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen (estabilização)"],
    erros: [
      "Cair com os cotovelos travados",
      "Perder o alinhamento do corpo",
      "Executar com fadiga, quando o controle já está ruim",
    ],
    dicas: [
      "É um movimento pliométrico e avançado; faça poucas repetições de boa qualidade.",
      "Antes, domine a flexão tradicional e treine o impulso sem bater palmas.",
    ],
  },
  "Flexão no TRX": {
    equipamento: "Sistema de suspensão (TRX)",
    posicao: "Segure as alças do TRX, incline o corpo para a frente com os braços estendidos à frente dos ombros e os pés no chão, com o corpo reto da cabeça aos calcanhares.",
    execucao: [
      "Flexione os cotovelos, mantendo-os em cerca de 45° em relação ao tronco, e desça o peito entre as alças.",
      "Mantenha as alças estáveis e o abdômen contraído.",
      "Empurre as alças para a frente e para baixo até estender os braços.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen (estabilização)"],
    erros: [
      "Deixar as alças balançarem",
      "Deixar o quadril cair",
      "Abrir os cotovelos demais",
    ],
    dicas: [
      "Quanto mais horizontal o corpo, maior a dificuldade; ajuste a inclinação conforme sua força.",
      "Mantenha os punhos alinhados e os ombros longe das orelhas.",
    ],
  },
  "Flexão com instabilidade (bola/bosu)": {
    equipamento: "Bola suíça ou bosu",
    posicao: "Apoie as mãos na bola suíça (ou no bosu, com a parte redonda para cima), um pouco mais abertas que os ombros, com o corpo alinhado e os pés no chão.",
    execucao: [
      "Flexione os cotovelos e desça o peito em direção ao apoio instável, mantendo o corpo reto.",
      "Contraia abdômen e glúteos para controlar a oscilação.",
      "Empurre o apoio para estender os braços, sem travar os cotovelos.",
    ],
    respiracao: DESCER_SUBIR,
    principais: ["Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Abdômen e estabilizadores do ombro"],
    erros: [
      "Escolher uma instabilidade acima do seu nível",
      "Deixar o apoio escapar para os lados",
      "Deixar o quadril cair",
    ],
    dicas: [
      "Domine a flexão no chão antes; comece com uma bola mais firme.",
      "Execute mais devagar do que faria no chão para manter o controle.",
    ],
  },
};