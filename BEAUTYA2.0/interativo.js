document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.modal .close');

    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login realizado com sucesso!');
        modal.style.display = 'none';
    });
});

var modal = document.getElementById("login-modal");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const hoverText = document.querySelector('.hover-text');
    const imageContainer = document.querySelector('.image-container');
    const images = ['/img/produto1.jpg', '/img/produto2.jpg', '/img/produto3.jpg', '/img/produto4.jpg', '/img/produto5.jpg', '/img/produto6.jpg'];
    let currentImage = 0;

    hoverText.addEventListener('mousemove', (e) => {
        const rect = hoverText.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        const img = document.createElement('img');
        img.src = images[currentImage];
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        imageContainer.appendChild(img);


        img.addEventListener('animationend', () => {
            img.remove();
        });

        currentImage = (currentImage + 1) % images.length;
    });

    hoverText.addEventListener('mouseleave', () => {
        imageContainer.innerHTML = '';
    });
});

const questions = [
    { question: "Qual é o seu tipo de pele?", options: ["seca", "oleosa", "mista", "sensível"] },
    { question: "Como você prefere a cobertura da base?", options: ["leve", "média", "alta"] },
    { question: "Qual seu subtom?", options: ["frio", "quente", "neutro"] },
];

const results = {
    seca_leve_frio: "Base Clean Beautya",
    seca_leve_quente: "Base New Beautya",
    seca_leve_neutro: "Base Clean Beautya",
    seca_média_frio: "Base New Beautya",
    seca_média_quente: "Base Cobertura Total Beautya",
    seca_média_neutro: "Base Clean Beautya",
    seca_alta_frio: "Base Cobertura Total Beautya",
    seca_alta_quente: "Base New Beautya",
    seca_alta_neutro: "Base Clean Beautya",
    oleosa_leve_frio: "Base Clean Beautya",
    oleosa_leve_quente: "Base Mix Beautya",
    oleosa_leve_neutro: "Base Clean Beautya",
    oleosa_média_frio: "Base Mix Beautya",
    oleosa_média_quente: "Base Cobertura Total Beautya",
    oleosa_média_neutro: "Base Clean Beautya",
    oleosa_alta_frio: "Base Cobertura Total Beautya",
    oleosa_alta_quente: "Base New Beautya",
    oleosa_alta_neutro: "Base Clean Beautya",
    mista_leve_frio: "Base Clean Beautya",
    mista_leve_quente: "Base Mix Beautya",
    mista_leve_neutro: "Base Clean Beautya",
    mista_média_frio: "Base Mix Beautya",
    mista_média_quente: "Base Cobertura Total Beautya",
    mista_média_neutro: "Base Clean Beautya",
    mista_alta_frio: "Base Cobertura Total Beautya",
    mista_alta_quente: "Base New Beautya",
    mista_alta_neutro: "Base Clean Beautya",
    sensível_leve_frio: "Base Clean Beautya",
    sensível_leve_quente: "Base Mix Beautya",
    sensível_leve_neutro: "Base Clean Beautya",
    sensível_média_frio: "Base Mix Beautya",
    sensível_média_quente: "Base New Beautya",
    sensível_média_neutro: "Base Clean Beautya",
    sensível_alta_frio: "Base New Beautya",
    sensível_alta_quente: "Base Mix Beautya",
    sensível_alta_neutro: "Base Clean Beautya"
};

let currentQuestion = 0;
let answers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionText.textContent = `Pergunta ${currentQuestion + 1}: ${currentQ.question}`;

    optionsContainer.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `option${index + 1}`;
        input.name = 'answer';
        input.value = option;

        const label = document.createElement('label');
        label.htmlFor = `option${index + 1}`;
        label.textContent = option;

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement('br'));
    });

    if (currentQuestion === questions.length - 1) {
        submitButton.textContent = 'Ver Resultado';
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert('Selecione uma opção antes de prosseguir.');
        return;
    }

    answers.push(selectedOption.value);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultKey = answers.join('_');
    const result = results[resultKey];

    if (result) {
        resultContainer.textContent = `Resultado: A base recomendada para a sua pele é ${result}.`;
    } else {
        resultContainer.textContent = "Não foi possível determinar o resultado. Por favor, refaça o quiz.";
    }
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();
