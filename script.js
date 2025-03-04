import * as playerLists from './playerLists/index.js';

// Combine all player lists into one array
const nbaPlayers = Object.values(playerLists).flat();

const WINNING_SCORE = 21;
const TURN_TIME_LIMIT = 30; // seconds

let gameHistory = [];
let currentPlayer = 1;
let lastUsedNames = new Set();
let scores = {1: 0, 2: 0};
let correctStreaks = {1: 0, 2: 0};
const funnyReferences = ["Brick!", "You missed a bunny!", "Airball!", "Off the backboard!", "Clang!"];
let turnTimer;

// Add stats tracking
const gameStats = {
    gamesPlayed: 0,
    playerWins: { 1: 0, 2: 0 },
    longestStreak: { 1: 0, 2: 0 },
    mostUsedLetters: new Map()
};

function updateStats(player, name) {
    const firstLetter = name[0].toUpperCase();
    gameStats.mostUsedLetters.set(
        firstLetter, 
        (gameStats.mostUsedLetters.get(firstLetter) || 0) + 1
    );
}

// Add sound effects
const SOUNDS = {
    correct: new Audio('correct.mp3'),
    incorrect: new Audio('wrong.mp3'),
    heatCheck: new Audio('fire.mp3'),
    gameOver: new Audio('victory.mp3'),
    whistle: new Audio('whistle.mp3')  // Add whistle sound
};

// Play sounds in appropriate functions
function playSound(soundName) {
    SOUNDS[soundName].play().catch(err => console.log('Sound disabled'));
}

// Add difficulty settings
const DIFFICULTY = {
    EASY: { streak: 3, points: 1 },
    NORMAL: { streak: 5, points: 2 },
    HARD: { streak: 7, points: 3 }
};

let currentDifficulty = DIFFICULTY.NORMAL;

// Update difficulty
function updateDifficulty(e) {
    currentDifficulty = DIFFICULTY[e.target.value];
}

// Add at the top with other state variables
let hintUsedThisTurn = false;

// Add at the top with other state variables
let isPaused = false;
let savedTimeLeft = null;

// Initialize game
function initializeGame() {
    // Clear any existing game state
    gameHistory = [];
    lastUsedNames.clear();
    
    // Select random player to start
    const randomPlayer = nbaPlayers[Math.floor(Math.random() * nbaPlayers.length)];
    
    // Add to game history
    gameHistory.push({ 
        player: "Game is 21, check ball", 
        name: randomPlayer,
        correct: null
    });
    
    // Add to used names
    lastUsedNames.add(randomPlayer.toLowerCase());
    
    // Update displays
    updateGameDisplay();
    updateScoreDisplay();
}

// Get required letter
function getRequiredLetter() {
    if (gameHistory.length === 0) return null;
    const lastPlayer = gameHistory[gameHistory.length - 1].name;
    const lastNames = lastPlayer.split(" ");
    return lastNames[lastNames.length - 1][0].toUpperCase();
}

// Validate name
function validateName(name) {
    if (!name) return "Please enter a name";
    
    // Convert input name to proper case for display
    const properName = name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
    // Check if name has been used (case-insensitive)
    if (lastUsedNames.has(name.toLowerCase())) return "This name has already been used";
    
    // Check if name exists in NBA players list (case-insensitive)
    const nameExists = nbaPlayers.some(player => 
        player.toLowerCase() === name.toLowerCase()
    );
    
    if (!nameExists) {
        const randomReference = funnyReferences[Math.floor(Math.random() * funnyReferences.length)];
        return randomReference;
    }
    
    const requiredLetter = getRequiredLetter();
    if (requiredLetter && properName.charAt(0).toUpperCase() !== requiredLetter) {
        return `Name must start with the letter ${requiredLetter}`;
    }
    
    // Store the proper case version in gameHistory
    properName.trim();
    return null;
}

// Make submitName function available globally
window.submitName = function() {
    const input = document.getElementById("playerInput");
    const name = input.value.trim();
    const properName = name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    const error = validateName(name);

    if (error) {
        // Incorrect answer
        scores[currentPlayer] -= 1;
        correctStreaks[currentPlayer] = 0;
        gameHistory.push({ 
            player: `Player ${currentPlayer}`, 
            name: name || "(Empty input)", 
            correct: false,
            error: error
        });
        document.getElementById("error").textContent = error;
        
        // Play incorrect sound
        playSound('incorrect');
        
        // Switch to next player
        switchPlayer();
        input.value = "";
        updateGameDisplay();
        updateScoreDisplay();
        return;
    }

    // Correct answer
    scores[currentPlayer] += 1;
    correctStreaks[currentPlayer] += 1;
    gameHistory.push({ 
        player: `Player ${currentPlayer}`, 
        name: properName,  // Use proper case version
        correct: true 
    });
    lastUsedNames.add(name.toLowerCase());

    // Play correct sound
    playSound('correct');

    // Update stats
    updateStats(currentPlayer, name);

    // Check for heat check
    if (correctStreaks[currentPlayer] >= currentDifficulty.streak) {
        correctStreaks[currentPlayer] = 0; // Reset streak
        document.getElementById(`player${currentPlayer}Score`).classList.add('heat-check');
        alert(`Player ${currentPlayer} is on fire! Heat check activated! 🔥`);
        playSound('heatCheck');
        // Give bonus points based on difficulty
        scores[currentPlayer] += currentDifficulty.points;
        setTimeout(() => {
            document.getElementById(`player${currentPlayer}Score`).classList.remove('heat-check');
        }, 3000);
    } else {
        switchPlayer();
    }

    input.value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("hint").textContent = ""; // Clear hint text
    updateGameDisplay();
    updateScoreDisplay();
    startTurnTimer();
    hintUsedThisTurn = false; // Reset hint usage for next turn
}

// Update game display
function updateGameDisplay() {
    const historyDiv = document.getElementById("gameHistory");
    historyDiv.innerHTML = gameHistory
        .map(entry => {
            let entryClass = entry.class || '';
            if (entry.correct === true) entryClass += ' correct';
            if (entry.correct === false) entryClass += ' incorrect';
            
            let resultText = '';
            if (entry.correct === true) {
                resultText = ' ✓ (+1 point)';
            } else if (entry.correct === false) {
                resultText = ` ✗ (-1 point) - ${entry.error}`;
            }
            
            return `<div class="${entryClass}">${entry.player}: ${entry.name}${resultText}</div>`;
        })
        .join("");

    const currentPlayerDiv = document.querySelector(".current-player");
    currentPlayerDiv.textContent = `Player ${currentPlayer}'s turn`;

    const requirementDiv = document.getElementById("currentRequirement");
    const requiredLetter = getRequiredLetter();
    requirementDiv.textContent = requiredLetter 
        ? `Next name must start with: ${requiredLetter}`
        : "";

    // Scroll to bottom of history
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

// Update score display
function updateScoreDisplay() {
    document.querySelector("#player1Score .score").textContent = scores[1];
    document.querySelector("#player2Score .score").textContent = scores[2];
    
    // Update active player styling
    document.getElementById("player1Score").classList.toggle("active", currentPlayer === 1);
    document.getElementById("player2Score").classList.toggle("active", currentPlayer === 2);
    
    // Check for winner
    if (scores[1] >= WINNING_SCORE || scores[2] >= WINNING_SCORE) {
        const winner = scores[1] >= WINNING_SCORE ? 1 : 2;
        gameStats.gamesPlayed++;
        gameStats.playerWins[winner]++;
        playSound('gameOver');
        updateStatsDisplay();
        alert(`Game Over! Player ${winner} wins! 🏆`);
        setTimeout(initializeGame, 2000); // Restart game after 2 seconds
    }
    
    // Show streaks
    document.querySelector("#player1Score .streak").textContent = 
        correctStreaks[1] > 0 ? `🔥 ${correctStreaks[1]}` : '';
    document.querySelector("#player2Score .streak").textContent = 
        correctStreaks[2] > 0 ? `🔥 ${correctStreaks[2]}` : '';
}

// Add enter key support for input
document.getElementById("playerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Initialize game when window loads
window.addEventListener('load', () => {
    initializeGame();
    startTurnTimer();
});

function startTurnTimer(resumeTime = null) {
    let timeLeft = resumeTime || TURN_TIME_LIMIT;
    const timerDiv = document.getElementById('timer');
    
    clearInterval(turnTimer);
    turnTimer = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            timerDiv.textContent = `Time: ${timeLeft}s`;
            savedTimeLeft = timeLeft;
            
            if (timeLeft <= 5) {
                timerDiv.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                clearInterval(turnTimer);
                handleTimeUp();
            }
        }
    }, 1000);
}

// Add hint system
function getHint(requiredLetter) {
    const possibleNames = nbaPlayers.filter(name => 
        name[0].toUpperCase() === requiredLetter &&
        !lastUsedNames.has(name.toLowerCase())
    );
    return possibleNames.length > 0 ? 
        `Hint: There are ${possibleNames.length} possible players` : 
        'No more players available with this letter!';
}

// Show hint
window.showHint = function() {
    const hintButton = document.querySelector('.hint-button');
    if (hintUsedThisTurn) {
        hintButton.classList.add('disabled');
        return;
    }
    
    const requiredLetter = getRequiredLetter();
    const hint = getHint(requiredLetter);
    document.getElementById('hint').textContent = hint;
    scores[currentPlayer] -= 0.5;
    hintUsedThisTurn = true;
    hintButton.classList.add('disabled');
    updateScoreDisplay();
}

// Update stats display
function updateStatsDisplay() {
    const statsDiv = document.getElementById('gameStats');
    const stats = `
        <p>Games Played: ${gameStats.gamesPlayed}</p>
        <p>Player 1 Wins: ${gameStats.playerWins[1]}</p>
        <p>Player 2 Wins: ${gameStats.playerWins[2]}</p>
        <p>Longest Streaks: P1: ${gameStats.longestStreak[1]} | P2: ${gameStats.longestStreak[2]}</p>
    `;
    statsDiv.innerHTML = stats;
}

// Add event listeners
document.getElementById('difficultySelect').addEventListener('change', updateDifficulty);
window.addEventListener('load', () => {
    initializeGame();
    startTurnTimer();
});

// Reset hint usage when switching turns
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    hintUsedThisTurn = false;
}

// Add pause toggle function
window.togglePause = function() {
    const pauseButton = document.getElementById('pauseButton');
    isPaused = !isPaused;
    
    if (isPaused) {
        clearInterval(turnTimer);
        pauseButton.textContent = '▶️ Resume';
        pauseButton.classList.add('paused');
        // Disable input during pause
        document.getElementById('playerInput').disabled = true;
    } else {
        startTurnTimer(savedTimeLeft);
        pauseButton.textContent = '⏸️ Pause';
        pauseButton.classList.remove('paused');
        // Re-enable input
        document.getElementById('playerInput').disabled = false;
    }
}
