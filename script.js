const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma prova e aparece a seguinte questão: 25 + 37 = ? O que você faz?",
        alternativas: [
            {
                texto: "Faço o cálculo mentalmente.",
                afirmacao: "Confiou em sua habilidade de cálculo mental e resolveu rapidamente."
            },
            {
                texto: "Escrevo no papel e somo passo a passo.",
                afirmacao: "Preferiu o método tradicional e conferiu tudo com calma."
            }
        ]
    },
    {
        enunciado: "Agora surge uma equação: 2x + 3 = 11. Qual sua reação?",
        alternativas: [
            {
                texto: "Isolo o x e resolvo a equação.",
                afirmacao: "Mostrou raciocínio lógico ao reorganizar a equação."
            },
            {
                texto: "Peço ajuda para entender o passo a passo.",
                afirmacao: "Buscou entender a lógica por trás do problema com apoio externo."
            }
        ]
    },
    {
        enunciado: "Você tem que resolver uma multiplicação grande: 47 x 36. Como prefere fazer?",
        alternativas: [
            {
                texto: "Utilizo a propriedade distributiva para simplificar.",
                afirmacao: "Aproveitou estratégias matemáticas para facilitar o cálculo."
            },
            {
                texto: "Uso a calculadora para agilizar.",
                afirmacao: "Escolheu usar a tecnologia para garantir precisão nos cálculos."
            }
        ]
    },
    {
        enunciado: "Você está ajudando um colega a entender frações. Ele pergunta: como somar 1/4 + 2/3?",
        alternativas: [
            {
                texto: "Explico como encontrar o denominador comum e fazer a soma.",
                afirmacao: "Compartilhou seu conhecimento com paciência e clareza."
            },
            {
                texto: "Procuro um vídeo explicativo para mostrar a ele.",
                afirmacao: "Usou recursos digitais para facilitar a compreensão."
            }
        ]
    },
    {
        enunciado: "Você precisa aplicar porcentagem em um exercício: Qual é 20% de 150?",
        alternativas: [
            {
                texto: "Faço a conta: 150 x 0.2.",
                afirmacao: "Aplicou diretamente a fórmula de porcentagem com precisão."
            },
            {
                texto: "Transformo em fração e resolvo: (20/100) x 150.",
                afirmacao: "Usou o método das frações para compreender melhor o conceito."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada matemática...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
