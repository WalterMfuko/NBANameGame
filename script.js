// Expanded NBA players database
const nbaPlayers = [
    "Michael Jordan", "LeBron James", "Kobe Bryant", "Stephen Curry",
    "Kevin Durant", "Magic Johnson", "Larry Bird", "Tim Duncan",
    "Shaquille O'Neal", "Karl Malone", "John Stockton", "Charles Barkley",
    "David Robinson", "Patrick Ewing", "Hakeem Olajuwon", "Dirk Nowitzki",
    "Steve Nash", "Allen Iverson", "Ray Allen", "Paul Pierce",
    "Mitch Richmond", "Roy Hibbert", "Horace Grant", "George Karl",
    "Kawhi Leonard", "Dwyane Wade", "Chris Paul", "Damian Lillard", 
    "Luka Doncic", "James Harden", "Giannis Antetokounmpo", "Scottie Pippen",
    "Carmelo Anthony", "Russell Westbrook", "Kyrie Irving", "Kevin Garnett",
    "Anthony Davis", "Chris Bosh", "Draymond Green", "Klay Thompson"
];

let gameHistory = [];
let currentPlayer = 1;
let lastUsedNames = new Set();
let scores = {1: 0, 2: 0};

// Initialize game
function initializeGame() {
    const randomPlayer = nbaPlayers[Math.floor(Math.random() * nbaPlayers.length)];
    gameHistory.push({ 
        player: "Auto", 
        name: randomPlayer,
        correct: null // Auto-generated, not scored
    });
    updateGameDisplay();
    updateScoreDisplay();
}

// Get last letter requirement
function getRequiredLetter() {
    if (gameHistory.length === 0) return null;
    const lastPlayer = gameHistory[gameHistory.length - 1].name;
    const lastNames = lastPlayer.split(" ");
    return lastNames[lastNames.length - 1][0].toUpperCase();
}

// Validate name
function validateName(name) {
    if (!name) return "Please enter a name";
    if (lastUsedNames.has(name.toLowerCase())) return "This name has already been used";
    if (!nbaPlayers.includes(name)) return "This player is not in our database";
    
    const requiredLetter = getRequiredLetter();
    if (requiredLetter && name.split(" ")[0][0].toUpperCase() !== requiredLetter) {
        return `Name must start with the letter ${requiredLetter}`;
    }
    
    return null;
}

// Submit name
function submitName() {
    const input = document.getElementById("playerInput");
    const name = input.value.trim();
    const error = validateName(name);

    if (error) {
        // Incorrect answer
        scores[currentPlayer] -= 1;
        gameHistory.push({ 
            player: `Player ${currentPlayer}`, 
            name: name || "(Empty input)", 
            correct: false,
            error: error
        });
        document.getElementById("error").textContent = error;
        
        // Switch to next player
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        input.value = "";
        updateGameDisplay();
        updateScoreDisplay();
        return;
    }

    // Correct answer
    scores[currentPlayer] += 1;
    gameHistory.push({ 
        player: `Player ${currentPlayer}`, 
        name: name, 
        correct: true 
    });
    lastUsedNames.add(name.toLowerCase());
    
    // Switch to next player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    input.value = "";
    document.getElementById("error").textContent = "";
    updateGameDisplay();
    updateScoreDisplay();
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
}

// Add enter key support for input
document.getElementById("playerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Initialize game on load
window.onload = initializeGame;
