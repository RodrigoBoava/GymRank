const RITMO = "Respire de forma contínua e rítmica, em um ritmo que permita falar frases curtas.";
const INTENSO = "Respire de forma profunda e rítmica; nos momentos de maior esforço, o ritmo fica mais acelerado, e na recuperação volta a desacelerar.";

export const DESCRICOES_CARDIO = {
  /* ───────── MÁQUINAS AERÓBICAS ───────── */
  "Esteira (caminhada)": {
    equipamento: "Esteira",
    posicao: "Suba na esteira parada, prenda o clipe de segurança na roupa e fique em pé com o tronco ereto, o olhar à frente e os pés sobre as laterais.",
    execucao: [
      "Inicie a esteira em uma velocidade baixa e aumente aos poucos, até um ritmo de caminhada confortável (em geral entre 4 e 6 km/h).",
      "Caminhe com passos naturais, pisando do calcanhar para a ponta do pé, e balance os braços de forma solta.",
      "Ao terminar, reduza a velocidade aos poucos e só desça quando a esteira parar.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Panturrilha"],
    secundarios: ["Glúteos", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Segurar nas barras laterais durante todo o exercício",
      "Olhar para os pés ou para baixo o tempo todo",
      "Deixar de usar o clipe de segurança",
    ],
    dicas: [
      "Mantenha a postura ereta e os ombros relaxados.",
      "Comece com uns minutos mais leves para aquecer.",
    ],
  },
  "Esteira (corrida)": {
    equipamento: "Esteira",
    posicao: "Suba na esteira parada, prenda o clipe de segurança e fique com o tronco ereto, o olhar à frente e os pés sobre as laterais.",
    execucao: [
      "Comece caminhando e aumente a velocidade aos poucos, até um trote confortável.",
      "Corra com passadas curtas e rápidas, aterrissando com o pé sob o corpo e mantendo o tronco ereto e os braços dobrados em cerca de 90°.",
      "Ao terminar, reduza a velocidade aos poucos, caminhe por alguns minutos e só desça quando a esteira parar.",
    ],
    respiracao: "Mantenha um ritmo de respiração regular, inspirando pelo nariz e pela boca, em sincronia com as passadas.",
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Panturrilha"],
    secundarios: ["Glúteos", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Dar passadas longas demais, com o pé aterrissando muito à frente do corpo",
      "Segurar nas barras laterais",
      "Aumentar a velocidade bruscamente",
    ],
    dicas: [
      "Uma inclinação de 1% costuma deixar o esforço mais próximo da corrida ao ar livre.",
      "Use tênis adequado e aqueça antes das velocidades mais altas.",
    ],
  },
  "Esteira inclinada": {
    equipamento: "Esteira com inclinação",
    posicao: "Suba na esteira parada, prenda o clipe de segurança e programe a inclinação inicial em torno de 3% a 5%, com os pés sobre as laterais e o tronco ereto.",
    execucao: [
      "Inicie em baixa velocidade e aumente a inclinação aos poucos, em geral entre 5% e 12%.",
      "Caminhe com passos firmes, com o tronco ereto ou levemente inclinado a partir dos tornozelos, sem se apoiar nas barras.",
      "Ao terminar, reduza a inclinação e a velocidade aos poucos, e só desça quando a esteira parar.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Glúteo máximo", "Panturrilha"],
    secundarios: ["Quadríceps", "Posterior de coxa"],
    erros: [
      "Segurar nas barras e inclinar o corpo para trás",
      "Aumentar a inclinação além do que a postura permite",
      "Fazer passos longos demais",
    ],
    dicas: [
      "A inclinação aumenta o esforço sem a necessidade de aumentar muito a velocidade.",
      "Comece com inclinações menores e progrida aos poucos.",
    ],
  },
  "Esteira intervalada (HIIT)": {
    equipamento: "Esteira",
    posicao: "Suba na esteira parada e prenda o clipe de segurança. Faça cerca de 5 minutos de aquecimento caminhando ou trotando de forma leve.",
    execucao: [
      "Aumente a velocidade para um ritmo intenso e mantenha por um tempo curto, em geral entre 30 e 60 segundos.",
      "Reduza para uma caminhada ou um trote leve e recupere por um tempo maior, em geral entre 60 e 120 segundos.",
      "Repita os ciclos pelo número planejado e termine com alguns minutos de desaquecimento.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteos"],
    secundarios: ["Panturrilha", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Começar sem aquecimento",
      "Fazer intervalos intensos demais para o seu condicionamento",
      "Deixar de usar o clipe de segurança nas velocidades altas",
    ],
    dicas: [
      "Comece com poucos ciclos e aumente aos poucos.",
      "Se tiver problemas cardíacos ou de pressão, consulte um médico antes de fazer treinos intervalados.",
    ],
  },
  "Bicicleta ergométrica vertical": {
    equipamento: "Bicicleta ergométrica vertical",
    posicao: "Ajuste o selim de modo que o joelho fique levemente flexionado no ponto mais baixo do pedal. Sente com o tronco ereto, as mãos no guidão e os pés firmes nos pedais.",
    execucao: [
      "Comece a pedalar em uma resistência baixa e aumente aos poucos.",
      "Pedale em uma cadência constante, em geral entre 70 e 90 rotações por minuto, com o tronco estável.",
      "Ao terminar, reduza a resistência e pedale devagar por alguns minutos.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps"],
    secundarios: ["Glúteos", "Posterior de coxa", "Panturrilha"],
    erros: [
      "Selim baixo demais, o que sobrecarrega os joelhos",
      "Apoiar o peso do corpo nas mãos",
      "Usar uma resistência tão alta que a cadência fica muito baixa",
    ],
    dicas: [
      "Ajuste o selim antes de começar.",
      "Mantenha os joelhos alinhados com os pés ao pedalar.",
    ],
  },
  "Bicicleta ergométrica horizontal": {
    equipamento: "Bicicleta ergométrica horizontal (reclinada)",
    posicao: "Ajuste o assento para que as pernas fiquem levemente flexionadas quando os pedais estiverem na posição mais distante. Apoie as costas no encosto e segure nas alças.",
    execucao: [
      "Comece a pedalar em uma resistência baixa e aumente aos poucos.",
      "Pedale em uma cadência constante, com as costas apoiadas e o tronco estável.",
      "Ao terminar, reduza a resistência e pedale devagar por alguns minutos.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps"],
    secundarios: ["Glúteos", "Posterior de coxa", "Panturrilha"],
    erros: [
      "Assento mal ajustado, o que força os joelhos",
      "Tirar as costas do encosto",
      "Pedalar com resistência alta demais, perdendo a cadência",
    ],
    dicas: [
      "O encosto dá apoio à coluna, então é uma boa opção para quem tem desconforto lombar.",
      "Mantenha a cadência constante.",
    ],
  },
  "Spinning (bike indoor)": {
    equipamento: "Bicicleta de spinning",
    posicao: "Ajuste a altura do selim na altura do quadril e a distância do guidão. Calce os pés nos pedais (com presilhas ou clipes) e segure no guidão, com o tronco levemente inclinado.",
    execucao: [
      "Pedale em uma resistência leve para aquecer e aumente a carga conforme o treino.",
      "Alterne entre pedalar sentado e em pé, mantendo o abdômen firme e o peso distribuído entre os pedais.",
      "Ao terminar, reduza a resistência e pedale devagar para desaquecer.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteos"],
    secundarios: ["Posterior de coxa", "Panturrilha", "Abdômen (estabilização)"],
    erros: [
      "Selim ou guidão mal ajustados",
      "Apoiar o peso do corpo no guidão",
      "Pedalar em pé com resistência baixa, perdendo o controle",
    ],
    dicas: [
      "Mantenha uma garrafa de água por perto: o esforço é intenso.",
      "Peça ajuda ao instrutor para ajustar a bicicleta na primeira aula.",
    ],
  },
  "Elíptico (transport)": {
    equipamento: "Aparelho elíptico",
    posicao: "Suba no aparelho, apoie os pés nas plataformas e segure as alças móveis com as mãos. Mantenha o tronco ereto e o olhar à frente.",
    execucao: [
      "Comece o movimento, empurrando as plataformas para a frente e para trás, em um movimento suave.",
      "Empurre e puxe as alças de forma alternada, acompanhando o movimento das pernas.",
      "Ao terminar, reduza o ritmo e a resistência aos poucos.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteos"],
    secundarios: ["Posterior de coxa", "Panturrilha", "Braços e ombros"],
    erros: [
      "Inclinar o corpo para a frente, apoiando-se nas alças",
      "Levantar os calcanhares das plataformas",
      "Fazer o movimento com os pés muito à frente",
    ],
    dicas: [
      "O movimento tem baixo impacto nas articulações.",
      "Em muitos aparelhos, é possível inverter o sentido para variar o estímulo.",
    ],
  },
  "Simulador de escada": {
    equipamento: "Simulador de escada (stair climber)",
    posicao: "Suba nos pedais, segure levemente nos apoios laterais e fique com o tronco ereto, o olhar à frente e os pés apoiados por inteiro nos degraus.",
    execucao: [
      "Comece a subir devagar, alternando os passos, com o pé inteiro apoiado em cada degrau.",
      "Mantenha o tronco ereto e o abdômen firme, com as mãos apenas para equilíbrio.",
      "Aumente o ritmo aos poucos e, ao terminar, reduza a velocidade antes de descer.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Glúteo máximo", "Quadríceps"],
    secundarios: ["Panturrilha", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Apoiar o peso do corpo nas mãos ou nos braços",
      "Inclinar o corpo para a frente",
      "Pisar apenas com a ponta dos pés",
    ],
    dicas: [
      "Apoie os pés por inteiro nos degraus para trabalhar os glúteos.",
      "Comece com um ritmo moderado: o esforço aumenta rápido.",
    ],
  },
  "Escada infinita": {
    equipamento: "Escada infinita (stairmill)",
    posicao: "Suba no degrau da escada em movimento, com o tronco ereto e o olhar à frente. Segure levemente no corrimão, só para equilíbrio.",
    execucao: [
      "Comece em uma velocidade baixa e suba os degraus alternando as pernas, com o pé inteiro apoiado.",
      "Mantenha a postura ereta e o ritmo constante, sem se apoiar nos braços.",
      "Ao terminar, reduza a velocidade aos poucos e só desça quando a escada parar.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Glúteo máximo", "Quadríceps"],
    secundarios: ["Panturrilha", "Posterior de coxa"],
    erros: [
      "Apoiar o corpo nos corrimãos",
      "Aumentar a velocidade bruscamente",
      "Olhar para os pés, inclinando o corpo para a frente",
    ],
    dicas: [
      "Comece com ritmos baixos para se adaptar ao movimento.",
      "Mantenha o clipe de segurança preso, se houver.",
    ],
  },
  "Remo ergométrico": {
    equipamento: "Remo ergométrico",
    posicao: "Sente no assento, prenda os pés nos apoios e segure a alça com as duas mãos, com os braços estendidos e os joelhos flexionados, com o tronco levemente inclinado para a frente.",
    execucao: [
      "Empurre com as pernas, estendendo os joelhos, e só depois incline o tronco levemente para trás.",
      "Puxe a alça em direção ao abdômen, com os cotovelos para trás.",
      "Estenda os braços, incline o tronco para a frente e flexione os joelhos para voltar, na ordem inversa.",
    ],
    respiracao: "Expire durante a puxada e inspire na volta, em um ritmo constante.",
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteo máximo", "Grande dorsal"],
    secundarios: ["Eretores da espinha", "Bíceps braquial", "Abdômen"],
    erros: [
      "Puxar com os braços antes de usar as pernas",
      "Arredondar as costas",
      "Inclinar o tronco muito para trás no final da puxada",
    ],
    dicas: [
      "A sequência é pernas, tronco e braços na puxada, e braços, tronco e pernas na volta.",
      "A maior parte da força vem das pernas.",
    ],
  },
  "Ski erg": {
    equipamento: "Ski erg",
    posicao: "Em pé, de frente para o aparelho, com os pés na largura dos ombros, segure as alças com os braços estendidos acima da cabeça, com os cotovelos levemente flexionados.",
    execucao: [
      "Puxe as alças para baixo, em direção ao quadril, estendendo os braços e flexionando levemente o tronco e os joelhos.",
      "Use o abdômen e o quadril para ajudar a puxar, terminando com as mãos ao lado das coxas.",
      "Deixe os braços voltarem para cima, estendendo o tronco e os joelhos, e repita.",
    ],
    respiracao: "Expire na puxada e inspire na volta, em um ritmo constante.",
    principais: ["Sistema cardiorrespiratório", "Grande dorsal", "Tríceps braquial"],
    secundarios: ["Abdômen", "Quadríceps e glúteos", "Ombros"],
    erros: [
      "Puxar apenas com os braços",
      "Arredondar as costas",
      "Fazer o movimento sem coordenar o tronco e as pernas",
    ],
    dicas: [
      "Use todo o corpo na puxada, e não apenas os braços.",
      "Comece com uma resistência baixa para aprender o movimento.",
    ],
  },
  "Air bike": {
    equipamento: "Air bike",
    posicao: "Sente no selim, ajustado para que o joelho fique levemente flexionado no ponto mais baixo do pedal, e apoie os pés nos pedais. Segure nas alças móveis, com o tronco ereto.",
    execucao: [
      "Pedale e empurre e puxe as alças ao mesmo tempo, coordenando braços e pernas.",
      "A resistência aumenta conforme você acelera, pois vem do ar em movimento.",
      "Mantenha o ritmo planejado e, ao terminar, reduza aos poucos e pedale devagar para desaquecer.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteos"],
    secundarios: ["Posterior de coxa", "Braços e ombros", "Abdômen"],
    erros: [
      "Começar forte demais, sem aquecer",
      "Usar apenas as pernas e ignorar as alças",
      "Manter um ritmo tão alto que a técnica se perde",
    ],
    dicas: [
      "É muito exigente: use intervalos curtos e recupere entre eles.",
      "Quanto mais forte você pedala, mais difícil fica.",
    ],
  },

  /* ───────── HIIT E FUNCIONAL ───────── */
  "Pular corda": {
    equipamento: "Corda de pular",
    posicao: "Em pé, com o tronco ereto, segure as alças da corda com as mãos ao lado do quadril, com os cotovelos junto ao corpo. A corda deve alcançar as axilas quando você pisa no meio dela.",
    execucao: [
      "Gire a corda com os punhos, e não com os braços inteiros.",
      "Salte pouco, o suficiente para a corda passar, aterrissando nas pontas dos pés com os joelhos levemente flexionados.",
      "Mantenha o ritmo constante, com o tronco ereto e o olhar à frente.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Panturrilha"],
    secundarios: ["Quadríceps", "Antebraço", "Ombros", "Abdômen"],
    erros: [
      "Saltar alto demais",
      "Girar a corda com os braços, abrindo os cotovelos",
      "Aterrissar com os calcanhares",
    ],
    dicas: [
      "Comece com intervalos curtos, de 20 a 30 segundos, e aumente aos poucos.",
      "Use uma superfície que amorteça o impacto.",
    ],
  },
  "Pular corda dupla": {
    equipamento: "Corda de pular (de preferência de velocidade)",
    posicao: "Em pé, com o tronco ereto, segure as alças da corda com as mãos ao lado do quadril. Faça antes um aquecimento com saltos simples.",
    execucao: [
      "Salte um pouco mais alto que no pulo simples e gire a corda mais rápido, com os punhos, para ela passar duas vezes sob os pés.",
      "Mantenha o corpo reto, o olhar à frente e os cotovelos junto ao corpo.",
      "Aterrisse nas pontas dos pés, com os joelhos levemente flexionados, e repita.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Panturrilha"],
    secundarios: ["Quadríceps", "Antebraço", "Ombros", "Abdômen"],
    erros: [
      "Dobrar os joelhos para trás, em vez de manter o corpo reto",
      "Girar a corda com os braços, e não com os punhos",
      "Tentar o movimento sem dominar o pulo simples",
    ],
    dicas: [
      "Domine o pulo simples antes de tentar o duplo.",
      "Use uma corda leve e de velocidade para facilitar.",
    ],
  },
  "Burpee": {
    equipamento: "Peso corporal",
    posicao: "Em pé, com os pés na largura dos ombros e os braços ao lado do corpo.",
    execucao: [
      "Agache, apoie as mãos no chão à frente dos pés e salte (ou dê um passo) com os pés para trás, ficando em prancha alta.",
      "Se quiser, faça uma flexão de braço e depois traga os pés de volta, para perto das mãos.",
      "Salte para cima, estendendo o corpo e levando os braços acima da cabeça, e repita.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Peitoral maior"],
    secundarios: ["Tríceps braquial", "Deltoide anterior", "Glúteos", "Abdômen"],
    erros: [
      "Deixar o quadril cair na posição de prancha",
      "Arredondar a lombar ao agachar",
      "Fazer o movimento rápido demais, perdendo a técnica",
    ],
    dicas: [
      "Para facilitar, troque o salto por passos e retire a flexão.",
      "Mantenha o abdômen firme na posição de prancha.",
    ],
  },
  "Polichinelo": {
    equipamento: "Peso corporal",
    posicao: "Em pé, com os pés juntos e os braços ao lado do corpo.",
    execucao: [
      "Salte, abrindo as pernas para os lados e elevando os braços acima da cabeça.",
      "Salte novamente, fechando as pernas e trazendo os braços de volta ao lado do corpo.",
      "Repita em um ritmo constante, aterrissando de forma suave.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Panturrilha"],
    secundarios: ["Quadríceps", "Glúteo médio", "Ombros"],
    erros: [
      "Aterrissar com os joelhos travados",
      "Fazer o movimento sem coordenar braços e pernas",
      "Saltar com o corpo inclinado",
    ],
    dicas: [
      "Para reduzir o impacto, alterne passos laterais em vez de saltos.",
      "Mantenha o abdômen firme.",
    ],
  },
  "Corrida estacionária (joelho alto)": {
    equipamento: "Peso corporal",
    posicao: "Em pé, com o tronco ereto, os pés na largura dos quadris e os braços dobrados em cerca de 90°.",
    execucao: [
      "Eleve um joelho até a altura do quadril, enquanto o braço oposto vai à frente.",
      "Alterne rapidamente as pernas, como em uma corrida no lugar, com os joelhos altos.",
      "Mantenha o tronco ereto e aterrisse nas pontas dos pés, de forma suave.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Flexores do quadril"],
    secundarios: ["Panturrilha", "Glúteos", "Abdômen"],
    erros: [
      "Inclinar o tronco para trás",
      "Levantar pouco os joelhos",
      "Aterrissar com os calcanhares",
    ],
    dicas: [
      "Comece com intervalos curtos, de 20 a 30 segundos.",
      "Mantenha o abdômen firme e os braços acompanhando as pernas.",
    ],
  },
  "Mountain climber": {
    equipamento: "Peso corporal",
    posicao: "Em prancha alta, com as mãos sob os ombros e o corpo reto, da cabeça aos calcanhares. Mantenha o abdômen firme.",
    execucao: [
      "Leve um joelho em direção ao peito, sem mover o quadril.",
      "Volte a perna e leve a outra, alternando rapidamente, como em uma corrida na posição de prancha.",
      "Mantenha o quadril estável e os ombros sobre as mãos.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Abdômen", "Flexores do quadril"],
    secundarios: ["Ombros (estabilização)", "Quadríceps", "Peitoral maior"],
    erros: [
      "Levantar o quadril demais",
      "Deixar o quadril cair",
      "Mover os ombros para trás da linha das mãos",
    ],
    dicas: [
      "Comece em um ritmo mais lento, para manter a postura.",
      "Mantenha o corpo em uma linha reta.",
    ],
  },
  "Battle rope (cordas navais)": {
    equipamento: "Cordas navais (battle ropes)",
    posicao: "Fique em pé, de frente para o ponto de fixação das cordas, com os pés na largura dos ombros, os joelhos flexionados e o tronco levemente inclinado. Segure uma ponta de corda em cada mão.",
    execucao: [
      "Eleve e abaixe os braços de forma alternada, criando ondas nas cordas.",
      "Mantenha o abdômen firme e os joelhos flexionados, com o movimento vindo dos braços e dos ombros.",
      "Continue o movimento pelo tempo planejado, mantendo o ritmo e a postura.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Deltoides", "Grande dorsal"],
    secundarios: ["Bíceps braquial", "Antebraço", "Abdômen", "Quadríceps e glúteos"],
    erros: [
      "Arredondar as costas",
      "Ficar com as pernas retas",
      "Fazer ondas pequenas, com os braços sem amplitude",
    ],
    dicas: [
      "Faça séries curtas, de 20 a 30 segundos, com descanso entre elas.",
      "Mantenha o semiagachamento durante todo o exercício.",
    ],
  },
  "Salto na caixa (box jump)": {
    equipamento: "Caixa de salto (plyo box)",
    posicao: "Em pé, de frente para a caixa, a uma curta distância, com os pés na largura dos ombros. Escolha uma altura que consiga dominar.",
    execucao: [
      "Flexione os joelhos e leve o quadril para trás, balançando os braços para trás.",
      "Salte com força, estendendo quadril, joelhos e tornozelos, e leve os braços à frente, aterrissando sobre a caixa, com os dois pés.",
      "Fique em pé sobre a caixa e desça com cuidado, dando um passo para trás, e repita.",
    ],
    respiracao: "Inspire ao se agachar e expire no salto.",
    principais: ["Quadríceps", "Glúteo máximo"],
    secundarios: ["Panturrilha", "Posterior de coxa", "Abdômen"],
    erros: [
      "Escolher uma caixa alta demais",
      "Descer da caixa saltando para trás, o que sobrecarrega os tendões",
      "Aterrissar com os joelhos caindo para dentro",
    ],
    dicas: [
      "Comece com uma caixa baixa e aumente a altura aos poucos.",
      "Desça andando ou dando passos, em vez de saltar.",
    ],
  },
  "Slam ball": {
    equipamento: "Bola de arremesso (slam ball)",
    posicao: "Em pé, com os pés na largura dos ombros, segure a bola com as duas mãos, à frente do peito.",
    execucao: [
      "Eleve a bola acima da cabeça, estendendo o corpo e ficando na ponta dos pés.",
      "Arremesse a bola com força para o chão, à sua frente, agachando e contraindo o abdômen.",
      "Agache para pegar a bola, mantendo as costas retas, e repita.",
    ],
    respiracao: "Inspire ao levantar a bola e expire com força ao arremessá-la.",
    principais: ["Sistema cardiorrespiratório", "Abdômen", "Ombros"],
    secundarios: ["Grande dorsal", "Glúteos", "Quadríceps", "Tríceps braquial"],
    erros: [
      "Arredondar as costas para pegar a bola",
      "Usar uma bola pesada demais",
      "Arremessar sem controlar a posição do corpo",
    ],
    dicas: [
      "Use uma bola própria para arremesso, que não quica.",
      "Agache para pegar a bola, em vez de se curvar com as costas.",
    ],
  },
  "Empurrar trenó": {
    equipamento: "Trenó (sled) e anilhas",
    posicao: "Posicione-se atrás do trenó, com as mãos nos apoios, os braços estendidos e o corpo inclinado para a frente, em uma linha reta dos calcanhares aos ombros.",
    execucao: [
      "Empurre o trenó com passos firmes e fortes, mantendo o corpo inclinado e o abdômen firme.",
      "Mantenha os braços estendidos e o olhar à frente, empurrando com as pernas.",
      "Empurre a distância planejada e descanse antes da próxima série.",
    ],
    respiracao: INTENSO,
    principais: ["Quadríceps", "Glúteo máximo", "Sistema cardiorrespiratório"],
    secundarios: ["Panturrilha", "Ombros", "Tríceps braquial", "Abdômen"],
    erros: [
      "Arredondar as costas",
      "Dar passos curtos e sem força",
      "Usar carga pesada demais para manter a postura",
    ],
    dicas: [
      "Uma carga leve com passos rápidos treina o condicionamento; uma carga pesada trabalha a força.",
      "Use uma superfície que permita deslizar o trenó.",
    ],
  },
  "Puxar trenó": {
    equipamento: "Trenó (sled) com cordas ou alças",
    posicao: "Em pé, de frente para o trenó, segure as cordas (ou as alças presas ao trenó), com o tronco ereto e os pés na largura dos ombros.",
    execucao: [
      "Dê passos para trás, puxando o trenó com as mãos, mantendo o tronco ereto e o abdômen firme.",
      "Puxe as cordas alternando as mãos, em direção ao quadril, a cada passo.",
      "Puxe a distância planejada e descanse antes da próxima série.",
    ],
    respiracao: INTENSO,
    principais: ["Quadríceps", "Glúteo máximo", "Grande dorsal"],
    secundarios: ["Bíceps braquial", "Antebraço", "Abdômen", "Sistema cardiorrespiratório"],
    erros: [
      "Arredondar as costas",
      "Puxar apenas com os braços",
      "Dar passos desordenados, sem olhar para trás",
    ],
    dicas: [
      "Garanta que o caminho atrás de você esteja livre.",
      "Comece com uma carga leve para aprender o movimento.",
    ],
  },
  "Shadow boxing": {
    equipamento: "Peso corporal (e luvas leves, opcional)",
    posicao: "Em pé, com os pés na largura dos ombros, um pé um pouco à frente, os joelhos levemente flexionados e as mãos em guarda, junto ao rosto.",
    execucao: [
      "Dê golpes no ar, como jabs e diretos, girando levemente o quadril e o tronco a cada golpe.",
      "Movimente-se com passos curtos, mudando de direção, e combine esquivas e golpes.",
      "Mantenha as mãos de volta à guarda após cada golpe e o ritmo constante pelo tempo planejado.",
    ],
    respiracao: "Expire de forma curta a cada golpe e inspire entre as sequências.",
    principais: ["Sistema cardiorrespiratório", "Ombros", "Abdômen"],
    secundarios: ["Tríceps braquial", "Quadríceps", "Panturrilha", "Oblíquos"],
    erros: [
      "Estender os cotovelos com força no final, sobrecarregando as articulações",
      "Baixar a guarda",
      "Deixar os pés parados, sem se movimentar",
    ],
    dicas: [
      "Golpeie com velocidade e controle, sem travar os cotovelos.",
      "Use um espelho para observar a postura e a guarda.",
    ],
  },
  "Saco de pancada": {
    equipamento: "Saco de pancada, luvas e bandagens",
    posicao: "Proteja as mãos com bandagens e luvas e fique de frente para o saco, a uma distância em que o braço estendido o alcance, com um pé um pouco à frente, os joelhos levemente flexionados e as mãos em guarda.",
    execucao: [
      "Dê golpes no saco, como jabs e diretos, girando levemente o quadril e o tronco a cada golpe.",
      "Mantenha os punhos alinhados com os antebraços e golpeie com as duas primeiras articulações dos dedos (os nós).",
      "Volte as mãos à guarda após cada golpe e movimente-se em volta do saco, pelo tempo planejado.",
    ],
    respiracao: "Expire de forma curta a cada golpe e inspire entre as sequências.",
    principais: ["Sistema cardiorrespiratório", "Ombros", "Abdômen"],
    secundarios: ["Tríceps braquial", "Peitoral maior", "Oblíquos", "Quadríceps"],
    erros: [
      "Golpear sem proteção nas mãos",
      "Dobrar os punhos no impacto",
      "Baixar a guarda ou ficar parado",
    ],
    dicas: [
      "Aprenda a técnica dos golpes com um instrutor antes de usar muita força.",
      "Use luvas e bandagens adequadas para proteger as mãos e os punhos.",
    ],
  },

  /* ───────── AO AR LIVRE ───────── */
  "Caminhada": {
    equipamento: "Tênis confortável e um local seguro",
    posicao: "Em pé, com o tronco ereto, o olhar à frente e os ombros relaxados, com os braços dobrados e soltos ao lado do corpo.",
    execucao: [
      "Comece em um ritmo leve para aquecer e aumente aos poucos, até um passo firme e confortável.",
      "Caminhe com passos naturais, pisando do calcanhar para a ponta do pé, e balance os braços de forma solta.",
      "Termine desacelerando nos últimos minutos.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Panturrilha"],
    secundarios: ["Glúteos", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Dar passos longos demais",
      "Olhar para baixo o tempo todo",
      "Usar calçado inadequado",
    ],
    dicas: [
      "Mantenha uma garrafa de água e use roupas adequadas ao clima.",
      "Escolha locais bem iluminados e seguros.",
    ],
  },
  "Corrida contínua": {
    equipamento: "Tênis de corrida e um local seguro",
    posicao: "Em pé, com o tronco ereto, o olhar à frente, os ombros relaxados e os braços dobrados em cerca de 90°.",
    execucao: [
      "Comece caminhando e passe a um trote leve, aumentando o ritmo aos poucos.",
      "Corra em um ritmo constante e confortável, com passadas curtas e rápidas, aterrissando com o pé sob o corpo.",
      "Termine reduzindo o ritmo e caminhando por alguns minutos.",
    ],
    respiracao: "Mantenha um ritmo de respiração regular, em sincronia com as passadas, em um nível que permita conversar.",
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Panturrilha"],
    secundarios: ["Glúteos", "Posterior de coxa", "Abdômen (estabilização)"],
    erros: [
      "Começar rápido demais",
      "Dar passadas longas, com o pé aterrissando muito à frente",
      "Usar calçados desgastados",
    ],
    dicas: [
      "Aumente a distância ou o tempo aos poucos, em passos pequenos.",
      "Use tênis próprio para corrida e troque-os quando estiverem desgastados.",
    ],
  },
  "Corrida intervalada (tiros)": {
    equipamento: "Tênis de corrida e um local seguro e plano",
    posicao: "Faça cerca de 5 a 10 minutos de aquecimento, com caminhada e trote leve. Fique em pé, com o tronco ereto e os braços dobrados em cerca de 90°.",
    execucao: [
      "Acelere para um tiro, em um ritmo forte, por uma distância ou tempo curto (por exemplo, de 30 a 60 segundos).",
      "Reduza para uma caminhada ou um trote leve e recupere por um tempo maior.",
      "Repita os tiros pelo número planejado e termine com alguns minutos de desaquecimento.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps", "Glúteos"],
    secundarios: ["Panturrilha", "Posterior de coxa", "Abdômen"],
    erros: [
      "Fazer os tiros sem aquecimento",
      "Escolher uma intensidade ou um número de tiros acima do seu nível",
      "Deixar de respeitar o tempo de recuperação",
    ],
    dicas: [
      "Comece com poucos tiros e aumente aos poucos.",
      "Se tiver problemas cardíacos ou articulares, consulte um médico antes.",
    ],
  },
  "Subida de ladeira": {
    equipamento: "Tênis adequado e uma ladeira segura",
    posicao: "Em pé, no início da subida, com o tronco ereto (ou levemente inclinado a partir dos tornozelos), o olhar à frente e os braços dobrados.",
    execucao: [
      "Suba a ladeira, caminhando ou correndo, com passos curtos e firmes.",
      "Mantenha o tronco levemente inclinado para a frente e os braços ajudando no impulso.",
      "Desça caminhando, de forma controlada, e repita pelo número planejado.",
    ],
    respiracao: INTENSO,
    principais: ["Sistema cardiorrespiratório", "Glúteo máximo", "Quadríceps"],
    secundarios: ["Panturrilha", "Posterior de coxa", "Abdômen"],
    erros: [
      "Dar passadas longas na subida",
      "Descer correndo, o que sobrecarrega os joelhos",
      "Inclinar o tronco para a frente na altura da cintura",
    ],
    dicas: [
      "Escolha uma ladeira adequada ao seu nível.",
      "Desça com cuidado, em um ritmo controlado.",
    ],
  },
  "Ciclismo": {
    equipamento: "Bicicleta, capacete e equipamentos de segurança",
    posicao: "Ajuste o selim de modo que o joelho fique levemente flexionado no ponto mais baixo do pedal. Use o capacete e sente com o tronco levemente inclinado e as mãos no guidão.",
    execucao: [
      "Comece pedalando em um ritmo leve e aumente aos poucos.",
      "Mantenha uma cadência constante e o tronco estável, com os joelhos alinhados com os pés.",
      "Termine reduzindo o ritmo e pedalando devagar por alguns minutos.",
    ],
    respiracao: RITMO,
    principais: ["Sistema cardiorrespiratório", "Quadríceps"],
    secundarios: ["Glúteos", "Posterior de coxa", "Panturrilha"],
    erros: [
      "Pedalar sem capacete",
      "Selim mal ajustado, o que sobrecarrega os joelhos",
      "Pedalar com a marcha muito pesada, perdendo a cadência",
    ],
    dicas: [
      "Respeite a sinalização e use luzes e refletores ao pedalar no fim do dia.",
      "Leve água e escolha rotas seguras.",
    ],
  },
  "Natação": {
    equipamento: "Piscina, touca, óculos e roupa de natação",
    posicao: "Entre na piscina e apoie-se na borda. Ajuste a touca e os óculos e prepare-se para empurrar a parede com os pés.",
    execucao: [
      "Empurre a parede e nade (por exemplo, em nado crawl), com as braçadas alternadas e as pernas batendo de forma contínua.",
      "Mantenha o corpo alinhado, próximo à superfície, e a cabeça em posição neutra.",
      "Faça a respiração de lado, em um ritmo regular, e descanse na borda entre as séries.",
    ],
    respiracao: "Expire na água, de forma contínua, e inspire de lado, quando o rosto estiver fora d'água.",
    principais: ["Sistema cardiorrespiratório", "Grande dorsal", "Ombros"],
    secundarios: ["Tríceps braquial", "Peitoral maior", "Abdômen", "Quadríceps e glúteos"],
    erros: [
      "Levantar a cabeça para respirar, afundando o quadril",
      "Fazer braçadas curtas e rápidas, sem alcance",
      "Nadar sozinho em local sem supervisão",
    ],
    dicas: [
      "Comece com séries curtas e descanse na borda.",
      "Nade em piscinas com salva-vidas e procure orientação de um professor para aprimorar a técnica.",
    ],
  },
};