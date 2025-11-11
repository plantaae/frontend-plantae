const questoes = [
  {
    pergunta: "Qual cor da lixeira é usada para papel e papelão?",
    alternativas: [
      { id: 1, text: "Verde", correct: false },
      { id: 2, text: "Azul", correct: true },       // B
      { id: 3, text: "Amarela", correct: false },
      { id: 4, text: "Vermelha", correct: false },
    ],
  },
  {
    pergunta: "Onde deve ser descartado o vidro quebrado?",
    alternativas: [
      { id: 1, text: "No quintal", correct: false },
      { id: 2, text: "Lixo reciclável comum", correct: false },
      { id: 3, text: "Local de coleta específico", correct: true }, // C
      { id: 4, text: "Lixo orgânico", correct: false },
    ],
  },
  {
    pergunta: "O que significa o símbolo das três setas em círculo?",
    alternativas: [
      { id: 1, text: "Reciclagem", correct: true }, // A
      { id: 2, text: "Energia solar", correct: false },
      { id: 3, text: "Coleta manual", correct: false },
      { id: 4, text: "Água potável", correct: false },
    ],
  },
  {
    pergunta: "Qual desses materiais não é reciclável?",
    alternativas: [
      { id: 1, text: "Lata de alumínio", correct: false },
      { id: 2, text: "Papel higiênico", correct: true }, // B
      { id: 3, text: "Papel alumínio", correct: false },
      { id: 4, text: "Garrafa PET", correct: false },
    ],
  },
  {
    pergunta: "O que deve ser feito com o óleo de cozinha usado?",
    alternativas: [
      { id: 1, text: "Enterrar", correct: false },
      { id: 2, text: "Jogar na pia", correct: false },
      { id: 3, text: "Levar a um ponto de coleta", correct: true }, // C
      { id: 4, text: "Jogar no lixo comum", correct: false },
    ],
  },
  {
    pergunta: "Qual material é colocado na lixeira vermelha?",
    alternativas: [
      { id: 1, text: "Metal", correct: false },
      { id: 2, text: "Plástico", correct: false },
      { id: 3, text: "Vidro", correct: false },
      { id: 4, text: "Plástico", correct: true }, // D
    ],
  },
  {
    pergunta: "Qual cor representa o metal na coleta seletiva?",
    alternativas: [
      { id: 1, text: "Azul", correct: false },
      { id: 2, text: "Amarela", correct: true }, // B
      { id: 3, text: "Verde", correct: false },
      { id: 4, text: "Marrom", correct: false },
    ],
  },
  {
    pergunta: "Qual é a cor da lixeira para o lixo orgânico?",
    alternativas: [
      { id: 1, text: "Preta", correct: false },
      { id: 2, text: "Marrom", correct: false },
      { id: 3, text: "Marrom", correct: true }, // C
      { id: 4, text: "Branca", correct: false },
    ],
  },
  {
    pergunta: "Qual atitude ajuda na reciclagem?",
    alternativas: [
      { id: 1, text: "Queimar o lixo", correct: false },
      { id: 2, text: "Misturar lixo seco e orgânico", correct: false },
      { id: 3, text: "Lavar embalagens antes de descartar", correct: false },
      { id: 4, text: "Separar corretamente os resíduos", correct: true }, // D
    ],
  },
  {
    pergunta: "Por que reciclar é importante?",
    alternativas: [
      { id: 1, text: "Diminui o volume de lixo e economiza recursos naturais", correct: true }, // A
      { id: 2, text: "Só serve para ocupar tempo", correct: false },
      { id: 3, text: "Aumenta o gasto com coleta", correct: false },
      { id: 4, text: "Não traz benefícios", correct: false },
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