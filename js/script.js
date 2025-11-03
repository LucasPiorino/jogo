const gameArea = document.getElementById('gameArea');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameRunning = false;
let gameInterval;
let spawnRate = 1000; // tempo entre surgimento dos personagens

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

    // posição aleatória dentro da área
    const x = Math.random() * (gameArea.clientWidth - 80);
    const y = Math.random() * (gameArea.clientHeight - 80);
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
    score = 0;
    scoreDisplay.textContent = `Pontuação: ${score}`;
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
