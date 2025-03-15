// NBA players database (copy your existing nbaPlayers array here)
const nbaPlayers = [
    "Michael Jordan", "LeBron James", "Kobe Bryant", "Stephen Curry"
    // ... include your full list of NBA players here
];

// Game state variables
let gameHistory = [];
let currentPlayer = 2; // Computer (2) starts first
let lastUsedNames = new Set();
let scores = {1: 0, 2: 0}; // Player 1: Human, Player 2: Computer
let hintsRemainingThisTurn = 2;
let currentStreak = 0;
let maxStreak = 0;

// Initialize game
function initializeGame() {
    const randomPlayer = nbaPlayers[Math.floor(Math.random() * nbaPlayers.length)];
    gameHistory.push({ 
        player: "Computer", 
        name: randomPlayer,
        correct: true
    });
    lastUsedNames.add(randomPlayer.toLowerCase());
    
    // Switch to human player
    switchPlayer();
    
    // Update displays
    updateGameDisplay();
    updateScoreDisplay();
    updateHintButton();
    
    // Reset streaks
    currentStreak = 0;
    maxStreak = 0;
    updateStreak(true);
}

// Get the required letter based on the last player name
function getRequiredLetter() {
    if (gameHistory.length === 0) return null;
    
    const lastName = gameHistory[gameHistory.length - 1].name;
    const lastNames = lastName.split(' ');
    return lastNames[lastNames.length - 1][0].toUpperCase();
}

// Validate the player name
function validateName(name) {
    if (!name) return "Please enter a name";
    
    // Case-insensitive check against the database
    const nameExists = nbaPlayers.some(player => 
        player.toLowerCase() === name.toLowerCase()
    );
    
    if (!nameExists) return "This player is not in our database";
    
    const requiredLetter = getRequiredLetter();
    if (requiredLetter) {
        // Case-insensitive check for first letter
        const firstName = name.split(" ")[0];
        if (firstName[0].toUpperCase() !== requiredLetter) {
            return `Name must start with the letter ${requiredLetter}`;
        }
    }
    
    return null;
}

// Submit name for human player
function submitName() {
    const input = document.getElementById("playerInput");
    const name = input.value.trim();
    
    // Format the name properly with capitalization
    const formattedName = name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
    const error = validateName(formattedName);

    if (error) {
        // Incorrect answer
        scores[currentPlayer] -= 1;
        gameHistory.push({ 
            player: "You", 
            name: formattedName || "(Empty input)", 
            correct: false,
            error: error
        });
        document.getElementById("error").textContent = error;
        
        // Reset streak
        updateStreak(false);
        
        // Switch to computer player
        switchPlayer();
        input.value = "";
        updateGameDisplay();
        updateScoreDisplay();
        return;
    }

    // Correct answer
    scores[currentPlayer] += 1;
    gameHistory.push({ 
        player: "You", 
        name: formattedName, 
        correct: true 
    });
    lastUsedNames.add(formattedName.toLowerCase());
    
    // Update streak
    updateStreak(true);
    
    // Switch to computer player
    switchPlayer();
    input.value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("hint").textContent = "";
    updateGameDisplay();
    updateScoreDisplay();
}

// Computer's turn
function computerTurn() {
    const requiredLetter = getRequiredLetter();
    
    // Find all valid players starting with required letter
    const validPlayers = nbaPlayers.filter(player => {
        const firstName = player.split(' ')[0];
        return firstName[0].toUpperCase() === requiredLetter && 
               !lastUsedNames.has(player.toLowerCase());
    });
    
    // Disable input during computer's turn
    document.getElementById("playerInput").disabled = true;
    document.getElementById("submitButton").disabled = true;
    document.querySelector('.hint-button').disabled = true;
    
    // Computer thinks...
    document.getElementById('hint').textContent = "Computer is thinking...";
    
    // Add a small delay to make it feel like the computer is "thinking"
    setTimeout(() => {
        if (validPlayers.length > 0) {
            // Computer finds a valid player
            const computerChoice = validPlayers[Math.floor(Math.random() * validPlayers.length)];
            
            // Add to game history
            scores[currentPlayer] += 1;
            gameHistory.push({ 
                player: "Computer", 
                name: computerChoice, 
                correct: true 
            });
            lastUsedNames.add(computerChoice.toLowerCase());
        } else {
            // No valid players found - computer gives up
            scores[currentPlayer] -= 1;
            gameHistory.push({ 
                player: "Computer", 
                name: "(No valid player found)", 
                correct: false,
                error: "Computer couldn't find a valid player"
            });
        }
        
        // Switch to human player
        document.getElementById('hint').textContent = "";
        switchPlayer();
        updateGameDisplay();
        updateScoreDisplay();
        
        // Re-enable input for human player
        document.getElementById("playerInput").disabled = false;
        document.getElementById("submitButton").disabled = false;
        document.querySelector('.hint-button').disabled = false;
    }, 1500);
}

// Update game display
function updateGameDisplay() {
    const historyDiv = document.getElementById("gameHistory");
    historyDiv.innerHTML = gameHistory
        .map(entry => {
            let entryClass = '';
            let resultText = '';
            
            if (entry.correct === true) {
                entryClass = 'correct';
                resultText = ' ✓ (+1 point)';
            } else if (entry.correct === false) {
                entryClass = 'incorrect';
                resultText = ` ✗ (-1 point) - ${entry.error}`;
            }
            
            return `<div class="${entryClass}">${entry.player}: ${entry.name}${resultText}</div>`;
        })
        .join("");

    const currentPlayerDiv = document.querySelector(".current-player");
    currentPlayerDiv.textContent = currentPlayer === 1 ? "Your turn" : "Computer's turn";

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
}

// Switch player
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    hintsRemainingThisTurn = 2;
    updateHintButton();
    
    // If it's computer's turn, trigger computerTurn
    if (currentPlayer === 2) {
        computerTurn();
    }
}

// Add enter key support for input
document.getElementById("playerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Function to show hint
function showHint() {
    if (hintsRemainingThisTurn <= 0) {
        document.getElementById("hint").textContent = "No hints remaining for this turn!";
        return;
    }
    
    const requiredLetter = getRequiredLetter();
    
    // Find matching players that haven't been used
    const validPlayers = nbaPlayers.filter(player => {
        const firstName = player.split(" ")[0];
        return firstName[0].toUpperCase() === requiredLetter && 
               !lastUsedNames.has(player.toLowerCase());
    });
    
    if (validPlayers.length === 0) {
        document.getElementById("hint").textContent = "No valid players found!";
        return;
    }
    
    // Pick a random valid player as hint
    const randomHint = validPlayers[Math.floor(Math.random() * validPlayers.length)];
    document.getElementById("hint").textContent = `Hint: ${randomHint}`;
    
    // Decrease available hints
    hintsRemainingThisTurn--;
    updateHintButton();
}

// Update hint button state
function updateHintButton() {
    const hintButton = document.querySelector('.hint-button');
    if (!hintButton) return;
    
    hintButton.textContent = `Hint (${hintsRemainingThisTurn} left)`;
    
    if (hintsRemainingThisTurn <= 0) {
        hintButton.classList.add('disabled');
        hintButton.disabled = true;
    } else {
        hintButton.classList.remove('disabled');
        hintButton.disabled = false;
    }
}

// Update streak counter
function updateStreak(correct) {
    if (correct) {
        currentStreak++;
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    } else {
        currentStreak = 0;
    }
    
    // Update the display
    document.getElementById('currentStreak').textContent = currentStreak;
    document.getElementById('maxStreak').textContent = maxStreak;
}

// Modal functionality for help button
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("helpModal");
    const btn = document.getElementById("helpButton");
    const span = document.getElementsByClassName("close")[0];

    // Open modal when help button is clicked
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal when X is clicked
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Initialize game on load
    initializeGame();
});