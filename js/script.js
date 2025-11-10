const gameArea = document.getElementById('gameArea');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameRunning = false;
let gameInterval;
let spawnRate = 1000; // tempo entre surgimento dos personagens
let gameStarted = false; // nova variável para controlar se o jogo já começou

// Personagens do Ziraldo (imagens locais + sons externos)
const characters = [
    {
        nome: "perere",
        img: "img/perere.png",
        som: "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",
        pontos: 10,
        tempo: 1000
    },
    {
        nome: "Menina",
        img: "img/menina.png",
        som: "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg",
        pontos: 15,
        tempo: 800
    },
    {
        nome: "Menino",
        img: "img/menino.png",
        som: "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
        pontos: 20,
        tempo: 600
    },
    {
        nome: "Player",
        img: "img/player.png",
        som: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
        pontos: 25,
        tempo: 500
    }
];

function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}

function spawnCharacter() {
    if (!gameRunning) return;

    const char = characters[Math.floor(Math.random() * characters.length)];
    const img = document.createElement('img');
    img.src = char.img;
    img.classList.add('character');

    // Obter tamanho real do personagem baseado no CSS
    const charSize = window.innerWidth <= 480 ? 50 : window.innerWidth <= 768 ? 60 : 80;
    
    // posição aleatória dentro da área
    const x = Math.random() * (gameArea.clientWidth - charSize);
    const y = Math.random() * (gameArea.clientHeight - charSize);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // evento de clique
    img.addEventListener('click', () => {
        score += char.pontos;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        playSound(char.som);
        gameArea.removeChild(img);
    });

    gameArea.appendChild(img);
    playSound(char.som);

    // desaparece após o tempo definido
    setTimeout(() => {
        if (gameArea.contains(img)) {
            gameArea.removeChild(img);
        }
    }, char.tempo);
}

function startGame() {
    if (gameRunning) return;
    gameRunning = true;
    
    // Só reinicia a pontuação se for a primeira vez
    if (!gameStarted) {
        score = 0;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        gameStarted = true;
        startBtn.textContent = "Retomar"; // muda o texto do botão
    }
    
    startBtn.disabled = true;
    pauseBtn.disabled = false;

    gameInterval = setInterval(spawnCharacter, spawnRate);
}

function pauseGame() {
    if (!gameRunning) return;
    gameRunning = false;
    clearInterval(gameInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
