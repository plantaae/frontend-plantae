const questoes = [
  {
    pergunta: "Qual é uma boa forma de economizar água?",
    alternativas: [
      { id: 1, text: "Tomar banhos longos", correct: false },
      { id: 2, text: "Reutilizar água da máquina de lavar", correct: true }, // B
      { id: 3, text: "Lavar calçada com mangueira", correct: false },
      { id: 4, text: "Deixar torneira aberta", correct: false },
    ],
  },
  {
    pergunta: "Qual aparelho consome mais energia elétrica?",
    alternativas: [
      { id: 1, text: "Chuveiro elétrico", correct: true }, // A
      { id: 2, text: "Ventilador", correct: false },
      { id: 3, text: "Rádio", correct: false },
      { id: 4, text: "Lâmpada LED", correct: false },
    ],
  },
  {
    pergunta: "Por que trocar lâmpadas incandescentes por LED?",
    alternativas: [
      { id: 1, text: "São mais econômicas", correct: false },
      { id: 2, text: "São mais bonitas", correct: false },
      { id: 3, text: "Iluminam menos", correct: false },
      { id: 4, text: "Duram mais e consomem menos", correct: true }, // D
    ],
  },
  {
    pergunta: "O que ajuda a reduzir o consumo de energia em dias quentes?",
    alternativas: [
      { id: 1, text: "Desligar o ar e usar ventilador", correct: true }, // A
      { id: 2, text: "Ligar todos os ventiladores", correct: false },
      { id: 3, text: "Deixar janelas fechadas", correct: false },
      { id: 4, text: "Usar mais lâmpadas", correct: false },
    ],
  },
  {
    pergunta: "Por que devemos consertar vazamentos de água rapidamente?",
    alternativas: [
      { id: 1, text: "Evitar barulho", correct: false },
      { id: 2, text: "Evitar desperdício", correct: true }, // B
      { id: 3, text: "Melhorar a pressão", correct: false },
      { id: 4, text: "Por estética", correct: false },
    ],
  },
  {
    pergunta: "Qual ação ajuda a economizar energia em casa?",
    alternativas: [
      { id: 1, text: "Deixar luzes acesas à noite", correct: false },
      { id: 2, text: "Desligar aparelhos da tomada", correct: false },
      { id: 3, text: "Usar sensores de presença", correct: true }, // C
      { id: 4, text: "Usar ferro elétrico várias vezes ao dia", correct: false },
    ],
  },
  {
    pergunta: "Qual horário é melhor para usar ferro de passar roupa?",
    alternativas: [
      { id: 1, text: "Qualquer hora", correct: false },
      { id: 2, text: "Fora do horário de pico", correct: true }, // B
      { id: 3, text: "Durante o banho", correct: false },
      { id: 4, text: "Ao meio-dia", correct: false },
    ],
  },
  {
    pergunta: "Qual hábito gasta menos água?",
    alternativas: [
      { id: 1, text: "Usar mangueira para regar plantas", correct: false },
      { id: 2, text: "Regar com regador", correct: false },
      { id: 3, text: "Usar água da chuva", correct: true }, // C
      { id: 4, text: "Lavar calçada", correct: false },
    ],
  },
  {
    pergunta: "A energia solar é considerada:",
    alternativas: [
      { id: 1, text: "Poluente", correct: false },
      { id: 2, text: "Renovável", correct: true }, // B
      { id: 3, text: "Descartável", correct: false },
      { id: 4, text: "Não sustentável", correct: false },
    ],
  },
  {
    pergunta: "Qual o impacto do desperdício de energia elétrica?",
    alternativas: [
      { id: 1, text: "Nenhum", correct: false },
      { id: 2, text: "Aumenta os gastos e prejudica o meio ambiente", correct: false },
      { id: 3, text: "Contribui para o aquecimento global", correct: true }, // C
      { id: 4, text: "Melhora o clima", correct: false },
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