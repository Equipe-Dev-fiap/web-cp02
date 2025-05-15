// Definindo as perguntas e respostas
const perguntas = [
    {
        pergunta: "Qual é o principal benefício ambiental dos carros elétricos em comparação com os carros movidos a combustíveis fósseis?",
        respostas: [
            "Menor emissão de poluentes",
            "Maior durabilidade",
            "Menor custo de manutenção",
            "Maior velocidade"
        ],
        correta: "Menor emissão de poluentes"
    },
    {
        pergunta: "Qual foi o primeiro carro elétrico produzido em massa pela Tesla?",
        respostas: [
            "Tesla Model S",
            "Tesla Model 3",
            "Tesla Roadster",
            "Tesla Model X"
        ],
        correta: "Tesla Roadster"
    },
    {
        pergunta: "Qual é a principal fonte de energia que alimenta os carros elétricos?",
        respostas: [
            "Gasolina",
            "Gás natural",
            "Baterias de íon de lítio",
            "Hidrogênio"
        ],
        correta: "Baterias de íon de lítio"
    },
    {
        pergunta: "Os carros elétricos são mais caros do que os carros a combustão?",
        respostas: [
            "Sim, mas os custos operacionais são menores",
            "Não, eles são mais baratos",
            "Não há diferença de preço",
            "Sim, e eles têm menos vantagens"
        ],
        correta: "Sim, mas os custos operacionais são menores"
    },
    {
        pergunta: "Qual é a autonomia média de um carro elétrico moderno em uma única carga?",
        respostas: [
            "100 a 150 km",
            "150 a 300 km",
            "300 a 500 km",
            "500 a 700 km"
        ],
        correta: "150 a 300 km"
    },
    {
        pergunta: "O que significa 'recarga rápida' no contexto dos carros elétricos?",
        respostas: [
            "Carregar o carro completamente em 5 minutos",
            "Carregar o carro até 80% em um curto período de tempo",
            "Carregar a bateria com energia solar",
            "Carregar o carro sem fio"
        ],
        correta: "Carregar o carro até 80% em um curto período de tempo"
    },
    {
        pergunta: "Quais países são os maiores mercados de carros elétricos no mundo?",
        respostas: [
            "Estados Unidos e Canadá",
            "China e Europa",
            "Japão e Austrália",
            "Brasil e México"
        ],
        correta: "China e Europa"
    },
    {
        pergunta: "Qual é o principal desafio para a adoção em massa de carros elétricos?",
        respostas: [
            "Falta de infraestrutura de carregamento",
            "Alta performance de velocidade",
            "A escassez de energia elétrica",
            "Preço acessível"
        ],
        correta: "Falta de infraestrutura de carregamento"
    },
    {
        pergunta: "Qual tecnologia está sendo desenvolvida para melhorar a eficiência das baterias dos carros elétricos?",
        respostas: [
            "Baterias de chumbo-ácido",
            "Baterias de sódio",
            "Baterias de estado sólido",
            "Baterias de grafeno"
        ],
        correta: "Baterias de estado sólido"
    },
    {
        pergunta: "Como os carros elétricos contribuem para a redução do ruído urbano?",
        respostas: [
            "Eles têm motores a combustão silenciosos",
            "Eles não fazem ruído, pois não possuem motor de combustão interna",
            "Eles usam um sistema de amortecimento de ruídos",
            "Eles têm um motor elétrico que faz mais barulho"
        ],
        correta: "Eles não fazem ruído, pois não possuem motor de combustão interna"
    }
];

let perguntaAtual = 0;
let respostasCorretas = 0;

// Função para carregar a pergunta atual
function carregarPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const respostaElement = document.getElementById("resposta");
    const pergunta = perguntas[perguntaAtual];

    perguntaElement.textContent = pergunta.pergunta;
    respostaElement.value = ''; // Limpar campo de resposta
    document.getElementById("message").textContent = ''; // Limpar mensagem
}

// Função para verificar a resposta
function verificarResposta() {
    const respostaElement = document.getElementById("resposta");
    const respostaUser = respostaElement.value.trim();

    if (respostaUser.toLowerCase() === perguntas[perguntaAtual].correta.toLowerCase()) {
        respostasCorretas++;
    }
}

// Função para avançar para a próxima pergunta
function avancarPergunta() {
    verificarResposta();

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

// Função para mostrar o resultado do quiz
function mostrarResultado() {
    const containerQuiz = document.getElementById("container-quiz");
    const containerResultado = document.getElementById("container-resultado");
    const listaResultado = document.getElementById("lista-resultado");
    const message = document.getElementById("message");

    // Escondendo o quiz e mostrando o resultado
    containerQuiz.style.display = "none";
    containerResultado.classList.remove("hidden");

    // Adicionando o resultado à lista
    listaResultado.innerHTML = `
        <li>Você acertou ${respostasCorretas} de ${perguntas.length} perguntas.</li>
    `;

    // Mostrando mensagem de resultado
    if (respostasCorretas === perguntas.length) {
        message.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
        message.textContent = `Você acertou ${respostasCorretas} de ${perguntas.length} perguntas. Tente novamente para melhorar sua pontuação!`;
    }
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    perguntaAtual = 0;
    respostasCorretas = 0;

    const containerQuiz = document.getElementById("container-quiz");
    const containerResultado = document.getElementById("container-resultado");
    containerQuiz.style.display = "block";
    containerResultado.classList.add("hidden");

    carregarPergunta();
}

// Evento do botão "Próxima Pergunta"
document.getElementById("proximo").addEventListener("click", avancarPergunta);

// Evento do botão "Reiniciar"
document.getElementById("inicio-btn").addEventListener("click", reiniciarQuiz);

// Carregar a primeira pergunta ao iniciar a página
window.onload = carregarPergunta;
