const questoes = [
  {
    pergunta: "Por que as plantas são importantes?",
    alternativas: [
      { id: 1, text: "Produzem oxigênio e alimento", correct: true }, // A
      { id: 2, text: "Servem só para enfeite", correct: false },
      { id: 3, text: "Deixam o solo seco", correct: false },
      { id: 4, text: "Ocupam espaço", correct: false },
    ],
  },
  {
    pergunta: "O que é biodiversidade?",
    alternativas: [
      { id: 1, text: "Variedade de seres vivos", correct: false },
      { id: 2, text: "Tipo de solo", correct: false },
      { id: 3, text: "Conjunto de espécies diferentes", correct: true }, // C
      { id: 4, text: "Clima", correct: false },
    ],
  },
  {
    pergunta: "O que acontece quando desmatamos florestas?",
    alternativas: [
      { id: 1, text: "Aumenta a biodiversidade", correct: false },
      { id: 2, text: "Diminui o número de animais e plantas", correct: true }, // B
      { id: 3, text: "Melhora o ar", correct: false },
      { id: 4, text: "Gera mais chuva", correct: false },
    ],
  },
  {
    pergunta: "O que é reflorestamento?",
    alternativas: [
      { id: 1, text: "Destruir áreas verdes", correct: false },
      { id: 2, text: "Plantar árvores novamente", correct: false },
      { id: 3, text: "Cortar árvores velhas", correct: false },
      { id: 4, text: "Replantar áreas desmatadas", correct: true }, // D
    ],
  },
  {
    pergunta: "Qual atitude ajuda o meio ambiente?",
    alternativas: [
      { id: 1, text: "Plantar árvores", correct: true }, // A
      { id: 2, text: "Jogar lixo nas ruas", correct: false },
      { id: 3, text: "Queimar folhas", correct: false },
      { id: 4, text: "Poluir rios", correct: false },
    ],
  },
  {
    pergunta: "Por que não devemos tirar plantas nativas da natureza?",
    alternativas: [
      { id: 1, text: "Porque enfraquece o ecossistema", correct: false },
      { id: 2, text: "Porque são feias", correct: false },
      { id: 3, text: "Porque desequilibra o ambiente", correct: true }, // C
      { id: 4, text: "Porque crescem rápido", correct: false },
    ],
  },
  {
    pergunta: "O que os insetos polinizadores fazem?",
    alternativas: [
      { id: 1, text: "Espalham lixo", correct: false },
      { id: 2, text: "Ajudam na reprodução das plantas", correct: true }, // B
      { id: 3, text: "Comem folhas", correct: false },
      { id: 4, text: "Causam doenças", correct: false },
    ],
  },
  {
    pergunta: "Qual desses ambientes é considerado um ecossistema?",
    alternativas: [
      { id: 1, text: "Uma floresta", correct: false },
      { id: 2, text: "Uma estrada", correct: false },
      { id: 3, text: "Um supermercado", correct: false },
      { id: 4, text: "Uma floresta com animais e plantas", correct: true }, // D
    ],
  },
  {
    pergunta: "Por que é importante cuidar do solo?",
    alternativas: [
      { id: 1, text: "Para as plantas crescerem saudáveis", correct: true }, // A
      { id: 2, text: "Para economizar energia", correct: false },
      { id: 3, text: "Para reduzir o lixo", correct: false },
      { id: 4, text: "Para aumentar o calor", correct: false },
    ],
  },
  {
    pergunta: "O que podemos fazer para proteger os animais silvestres?",
    alternativas: [
      { id: 1, text: "Mantê-los em casa", correct: false },
      { id: 2, text: "Não caçar nem comprar animais ilegais", correct: false },
      { id: 3, text: "Preservar seus habitats naturais", correct: true }, // C
      { id: 4, text: "Cortar árvores onde vivem", correct: false },
    ],
  },
];

let containerQuiz = document.getElementById("quiz");
let pergunta = document.getElementById("pergunta");
let listaDeAlternativas = document.getElementById("listaDeAlternativas");
let botaoProximo = document.getElementById("botaoProximo");
let statusEResultado = document.getElementById("statusEResultado");
let indiceDaPergunta = 0;
let pontuacao = 0;

function iniciarQuiz() {
  indiceDaPergunta = 0;
  pontuacao = 0;
  botaoProximo.innerHTML = "Proximo";
  containerQuiz.style.display = "block";
  mostrarQuestao();
}
function mostrarQuestao() {
  resetar();
  let perguntaAtual = questoes[indiceDaPergunta];
  let numeroQuestao = indiceDaPergunta + 1;
  pergunta.innerHTML = numeroQuestao + " - " + perguntaAtual.pergunta;
  pergunta.style.display = "block"
  const letras = ["A", "B", "C", "D"];

  perguntaAtual.alternativas.forEach((alternativa, index) => {
    // Criando e aplicando estilo nos elementos.
    const containerAlternativa = document.createElement("div");
    containerAlternativa.classList.add("containerAlternativa");
    containerAlternativa.dataset.id = alternativa.id;
    const containerVerde = document.createElement("div");
    containerVerde.classList.add("containerVerde");
    const containerBranco = document.createElement("div");
    containerBranco.classList.add("containerBranco");
    const spanLetra = document.createElement("span");
    spanLetra.classList.add("letras");
    const pTexto = document.createElement("p");
    pTexto.classList.add("textoAlternativa");
    // Adicionando textos.
    spanLetra.textContent = letras[index];
    pTexto.textContent = alternativa.text;
    // Organizando layout.
    listaDeAlternativas.appendChild(containerAlternativa);
    containerAlternativa.appendChild(containerVerde);
    containerAlternativa.appendChild(pTexto);
    containerVerde.appendChild(containerBranco);
    containerBranco.appendChild(spanLetra);
    // Evento
    containerAlternativa.addEventListener("click", verificarAlternativaCorreta);
    // Função exclusiva para o evento.
    function verificarAlternativaCorreta(e) {
      alternativa = questoes[indiceDaPergunta].alternativas;
      const alternativaCorreta = alternativa.find(
        (alternativa) => alternativa.correct == true
      );
      const alternativaSelecionada = e.currentTarget;
      const verificandoSeEstaCorreto =
        Number(alternativaSelecionada.dataset.id) == alternativaCorreta.id;
      if (verificandoSeEstaCorreto == true) {
        alternativaSelecionada.classList.remove("containerAlternativa");
        alternativaSelecionada.classList.add("containerAlternativaCorreta");
        pontuacao++;
      } else {
        alternativaSelecionada.classList.remove("containerAlternativa");
        alternativaSelecionada.classList.add("containerAlternativaIncorreta");
      }
      document
        .querySelectorAll(".containerAlternativa")
        .forEach((alternativa) => {
          alternativa.classList.add("desabilitada");
        });
      statusEResultado.style.display = "block";
      statusEResultado.innerHTML = `Alternativa correta: ${alternativaCorreta.text}.`;
      botaoProximo.style.display = "block";
    }
  });
  botaoProximo.onclick = () => {
    indiceDaPergunta++;
    if (indiceDaPergunta < questoes.length) {
      mostrarQuestao();
    } else {
      resultado();
    }
  };
}
function resultado() {
  resetar();
  pergunta.style.display = "none";
  botaoProximo.innerHTML = "Restart";
  botaoProximo.style.display = "block";
  statusEResultado.innerHTML = `Você acertou ${pontuacao} de ${questoes.length}.`;
  statusEResultado.style.display = "block";
  botaoProximo.onclick = () => {
    iniciarQuiz();
  };
}
function resetar() {
  botaoProximo.style.display = "none";
  statusEResultado.style.display = "none";
  while (listaDeAlternativas.firstChild) {
    listaDeAlternativas.removeChild(listaDeAlternativas.firstChild);
  }
}

iniciarQuiz();