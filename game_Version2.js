// Game variables
let score = 0;
let isGameRunning = false;
let isMuted = false;

// DOM elements
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const muteButton = document.getElementById('mute-button');
const scoreDisplay = document.getElementById('score-display');
const gameArea = document.getElementById('game-area');

// Event listeners
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', togglePause);
muteButton.addEventListener('click', toggleMute);

function startGame() {
    isGameRunning = true;
    score = 0;
    updateScore();
    console.log('Game started');
}

function togglePause() {
    isGameRunning = !isGameRunning;
    console.log(isGameRunning ? 'Game resumed' : 'Game paused');
}

function toggleMute() {
    isMuted = !isMuted;
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
    console.log(isMuted ? 'Audio muted' : 'Audio unmuted');
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}