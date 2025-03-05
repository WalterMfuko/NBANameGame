import * as playerLists from './playerLists/index.js';

// Combine all player lists into one array
const nbaPlayers = Object.values(playerLists).flat();

// Game constants
const WINNING_SCORE = 21;

// Game state variables
let scores = {1: 0, 2: 0};
let correctStreaks = {1: 0, 2: 0};
let currentPlayer = 1;
let gameHistory = [];
let lastUsedNames = new Set();
let hintsRemainingThisTurn = 2;
let funnyReferences = ["Brick!", "You missed a bunny!", "Airball!", "Off the backboard!", "Clang!"];

// Simple sound function that won't error if audio files are missing
function playSound(type) {
    // Simplified - no sound needed for troubleshooting
}

// Generate a random letter
function generateRandomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

// Get a random player whose last name starts with the given letter
function getRandomPlayerWithLetter(letter) {
    // Safety check for empty player list
    if (!nbaPlayers || nbaPlayers.length === 0) {
        return "Michael Jordan"; // Fallback name
    }
    
    const matchingPlayers = nbaPlayers.filter(player => {
        if (!player || typeof player !== 'string') return false;
        const parts = player.trim().split(' ');
        if (parts.length < 2) return false;
        const lastName = parts[parts.length - 1];
        return lastName[0].toUpperCase() === letter;
    });
    
    if (matchingPlayers.length === 0) {
        const newLetter = generateRandomLetter();
        return getRandomPlayerWithLetter(newLetter);
    }
    
    return matchingPlayers[Math.floor(Math.random() * matchingPlayers.length)];
}

// Simple initialization - no auto-populated player
function initializeGame() {
    // Reset game state
    scores = {1: 0, 2: 0};
    correctStreaks = {1: 0, 2: 0};
    currentPlayer = 1;
    gameHistory = [];
    lastUsedNames = new Set();
    hintsRemainingThisTurn = 2;
    
    // Just update UI with clean slate
    document.getElementById('gameHistory').innerHTML = '';
    document.getElementById('currentRequirement').textContent = 
        'Enter any NBA player name to start';
    document.getElementById('playerInput').disabled = false;
    document.getElementById('playerInput').value = '';
    document.getElementById('playerInput').focus();
    
    updateScoreDisplay();
    updateHintButton();
}

// Update game display
function updateGameDisplay() {
    console.log("Updating game display with history:", gameHistory);
    
    const historyDiv = document.getElementById('gameHistory');
    historyDiv.innerHTML = gameHistory
        .map(entry => {
            let entryClass = entry.class || '';
            if (entry.correct === true) entryClass += ' correct';
            if (entry.correct === false) entryClass += ' incorrect';
            
            let resultText = '';
            if (entry.correct === true && entry.player !== 'Auto Start') {
                resultText = ' ✓ (+1 point)';
            } else if (entry.correct === false) {
                resultText = ` ✗ (-1 point) - ${entry.error}`;
            }
            
            return `<div class="${entryClass}">${entry.player}: ${entry.name}${resultText}</div>`;
        })
        .join("");
        
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
    
    document.querySelector(".current-player").textContent = `Player ${currentPlayer}'s turn`;
    
    // Show streaks
    document.querySelector("#player1Score .streak").textContent = 
        correctStreaks[1] > 0 ? `🔥 ${correctStreaks[1]}` : '';
    document.querySelector("#player2Score .streak").textContent = 
        correctStreaks[2] > 0 ? `🔥 ${correctStreaks[2]}` : '';
}

// Get required letter from last player's name
function getRequiredLetter() {
    if (gameHistory.length === 0) return null;
    const lastPlayer = gameHistory[gameHistory.length - 1].name;
    const lastNames = lastPlayer.split(" ");
    return lastNames[lastNames.length - 1][0].toUpperCase();
}

// Update hint button display
function updateHintButton() {
    const hintButton = document.querySelector('.hint-button');
    hintButton.textContent = `Get Hint (${hintsRemainingThisTurn} left)`;
    if (hintsRemainingThisTurn <= 0) {
        hintButton.classList.add('disabled');
    } else {
        hintButton.classList.remove('disabled');
    }
}

// Initialize when page loads
window.onload = function() {
    // Directly initialize, no timeout
    initializeGame();
    updateHintButton();
    
    // Add event listener for Enter key
    document.getElementById("playerInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitName();
        }
    });
};

// Validate name
function validateName(name) {
    if (!name) return "Please enter a name";
    
    if (lastUsedNames.has(name.toLowerCase())) 
        return "This name has already been used";
    
    const nameExists = nbaPlayers.some(player => 
        player.toLowerCase() === name.toLowerCase()
    );
    
    if (!nameExists) {
        const randomReference = funnyReferences[Math.floor(Math.random() * funnyReferences.length)];
        return randomReference;
    }
    
    const requiredLetter = getRequiredLetter();
    if (requiredLetter && gameHistory.length > 0) {  // Only check letter if not first turn
        const lastName = name.split(' ').pop();
        if (lastName[0].toUpperCase() !== requiredLetter) {
            return `Last name must start with the letter ${requiredLetter}`;
        }
    }
    
    return null;
}

// Switch player
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    hintsRemainingThisTurn = 2;
    updateHintButton();
}

// Submit name function
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
        
        // Switch to next player
        switchPlayer();
    } else {
        // Correct answer
        scores[currentPlayer] += 1;
        correctStreaks[currentPlayer] += 1;
        gameHistory.push({ 
            player: `Player ${currentPlayer}`, 
            name: properName,
            correct: true 
        });
        lastUsedNames.add(name.toLowerCase());
        
        // Simplified - removed heat check
        switchPlayer();
        document.getElementById("error").textContent = "";
    }

    input.value = "";
    document.getElementById("hint").textContent = ""; // Clear hint text
    updateGameDisplay();
    updateScoreDisplay();
    
    // Update requirement for next player if there's at least one entry
    if (gameHistory.length > 0) {
        const requiredLetter = getRequiredLetter();
        document.getElementById('currentRequirement').textContent = 
            requiredLetter ? `Next name must start with: ${requiredLetter}` : '';
    }
};

// Show hint
window.showHint = function() {
    if (hintsRemainingThisTurn <= 0) {
        document.getElementById('hint').textContent = "No hints remaining this turn!";
        return;
    }
    
    const requiredLetter = getRequiredLetter();
    if (!requiredLetter) {
        document.getElementById('hint').textContent = "No requirement yet - enter any player name!";
        return;
    }
    
    const possibleNames = nbaPlayers.filter(name => {
        const lastName = name.split(' ').pop();
        return lastName[0].toUpperCase() === requiredLetter &&
            !lastUsedNames.has(name.toLowerCase());
    });
    
    const hint = possibleNames.length > 0 ? 
        `Hint: There are ${possibleNames.length} possible players` : 
        'No more players available with this letter!';
    
    document.getElementById('hint').textContent = hint;
    scores[currentPlayer] -= 0.5;
    hintsRemainingThisTurn--;
    updateHintButton();
    updateScoreDisplay();
};

// Create game (for online play)
window.createGame = function() {
    // Placeholder for online functionality
    alert("Online play coming soon!");
};

// Initialize when page loads
window.addEventListener('load', function() {
    initializeGame();
    
    // Add event listener for Enter key
    document.getElementById("playerInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitName();
        }
    });
});
