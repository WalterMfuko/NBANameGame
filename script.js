// Sample NBA players database (you can expand this)
const nbaPlayers = [
    "LeBron James", "Kobe Bryant", "Kevin Durant", "Stephen Curry", "Tim Duncan", "Dirk Nowitzki", "Dwyane Wade", "Chris Paul", "James Harden", "Russell Westbrook", "Anthony Davis", "Paul George", "Carmelo Anthony", "Blake Griffin", "Damian Lillard", "Kyrie Irving", "Giannis Antetokounmpo", "Joel Embiid", "Nikola Jokić", "Jayson Tatum", "Luka Dončić", "Devin Booker", "Karl-Anthony Towns", "Jimmy Butler", "Kawhi Leonard", "LaMarcus Aldridge", "DeMar DeRozan", "Klay Thompson", "Draymond Green", "Al Horford", "Kyle Lowry", "John Wall", "Bradley Beal", "Kevin Love", "Zach LaVine", "Trae Young", "Donovan Mitchell", "Jaylen Brown", "Jrue Holiday", "Brandon Ingram", "Zion Williamson", "Shai Gilgeous-Alexander", "Anthony Edwards", "Cade Cunningham", "Evan Mobley", "Jalen Green", "Scottie Barnes", "Tyrese Haliburton", "Desmond Bane", "Jaren Jackson Jr.", "Bam Adebayo", "Pascal Siakam", "Fred VanVleet", "Domantas Sabonis", "Julius Randle", "Kristaps Porziņģis", "De'Aaron Fox", "D'Angelo Russell", "Jarrett Allen", "Mikal Bridges", "OG Anunoby", "Michael Porter Jr.", "RJ Barrett", "Tyler Herro", "Jordan Poole", "James Wiseman", "Jonathan Kuminga", "Franz Wagner", "Jalen Suggs", "Josh Giddey", "Alperen Sengun", "Jabari Smith Jr.", "Chet Holmgren", "Paolo Banchero", "Bennedict Mathurin", "Jaden Ivey", "Keegan Murray", "Jabari Walker", "Shaedon Sharpe", "Jalen Duren", "Johnny Davis", "Ochai Agbaji", "AJ Griffin", "Mark Williams", "Jeremy Sochan", "Malaki Branham", "TyTy Washington Jr.", "Nikola Jović", "Walker Kessler", "David Roddy", "MarJon Beauchamp", "Blake Wesley", "Christian Braun", "Peyton Watson", "Andrew Nembhard", "Jaden Hardy", "Kennedy Chandler", "Max Christie", "Trevor Keels", "Bryce McGowens", "Josh Minott", "Ismael Kamagate", "Moussa Diabaté", "JD Davison", "Jabari Walker", "Tyrese Martin", "Karim Mane", "Moses Moody", "Jonathan Kuminga", "James Bouknight", "Davion Mitchell", "Chris Duarte", "Ziaire Williams", "Corey Kispert", "Jalen Johnson", "Isaiah Jackson", "Usman Garuba", "Josh Christopher", "Quentin Grimes", "Bones Hyland", "Cam Thomas", "Jaden Springer", "Day'Ron Sharpe", "Santi Aldama", "Rokas Jokubaitis", "Miles McBride", "Jason Preston", "Jeremiah Robinson-Earl", "Herbert Jones", "Ayo Dosunmu", "Neemias Queta", "Jared Butler", "Joe Wieskamp", "Brandon Boston Jr.", "Luka Garza", "Kessler Edwards", "David Johnson", "Sharife Cooper", "Marcus Zegarowski", "BJ Boston", "Isaiah Todd", "Jericho Sims", "Aaron Wiggins", "Scottie Lewis", "Georgios Kalaitzakis", "Sam Hauser", "Justin Champagnie", "Duane Washington Jr.", "Terry Taylor", "Mac McClung", "Javonte Smart", "Chaundee Brown Jr.", "Feron Hunt", "Jaden Shackelford", "Jules Bernard", "Ron Harper Jr.", "Johnny Juzang", "Michael Foster Jr.", "Dereon Seabron", "Jamaree Bouyea", "Keon Ellis", "Tyler Hall", "Darius Days", "Trevion Williams", "Buddy Boeheim", "Alondes Williams", "Justin Lewis", "Tevin Brown", "Jaden Hardy", "Kennedy Chandler", "Max Christie", "Trevor Keels", "Bryce McGowens", "Josh Minott", "Ismael Kamagate", "Moussa Diabaté", "JD Davison", "Jabari Walker", "Tyrese Martin", "Karim Mane", "Moses Moody", "Jonathan Kuminga", "James Bouknight", "Davion Mitchell", "Chris Duarte", "Ziaire Williams", "Corey Kispert", "Jalen Johnson", "Isaiah Jackson", "Usman Garuba", "Josh Christopher", "Quentin Grimes", "Bones Hyland", "Cam Thomas", "Jaden Springer", "Day'Ron Sharpe", "Santi Aldama", "Rokas Jokubaitis", "Miles McBride", "Jason Preston", "Jeremiah Robinson-Earl", "Herbert Jones", "Ayo Dosunmu", "Neemias Queta", "Jared Butler", "Joe Wieskamp", "Brandon Boston Jr.", "Luka Garza", "Kessler Edwards", "David Johnson", "Sharife Cooper", "Marcus Zegarowski", "BJ Boston", "Isaiah Todd", "Jericho Sims", "Aaron Wiggins", "Scottie Lewis", "Georgios Kalaitzakis", "Sam Hauser", "Justin Champagnie", "Duane Washington Jr.", "Terry Taylor", "Mac McClung", "Javonte Smart", "Chaundee Brown Jr.", "Feron Hunt", "Jaden Shackelford", "Jules Bernard", "Ron Harper Jr.", "Johnny Juzang", "Michael Foster Jr.", "Dereon Seabron", "Jamaree Bouyea", "Keon Ellis", "Tyler Hall", "Darius Days", "Trevion Williams", "Buddy Boeheim", "Alondes Williams", "Justin Lewis", "Tevin Brown", "Jaden Hardy", "Kennedy Chandler", "Max Christie", "Trevor Keels", "Bryce McGowens", "Josh Minott", "Ismael Kamagate", "Moussa Diabaté", "JD Davison", "Jabari Walker", "Tyrese Martin", "Karim Mane", "Moses Moody", "Jonathan Kuminga", "James Bouknight", "Davion Mitchell", "Chris Duarte"
];

let gameHistory = [];
let currentPlayer = 1;
let lastUsedNames = new Set();

// Initialize game
function initializeGame() {
    const randomPlayer = nbaPlayers[Math.floor(Math.random() * nbaPlayers.length)];
    gameHistory.push({ player: "Auto", name: randomPlayer });
    updateGameDisplay();
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
        document.getElementById("error").textContent = error;
        return;
    }

    gameHistory.push({ player: `Player ${currentPlayer}`, name: name });
    lastUsedNames.add(name.toLowerCase());
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    input.value = "";
    document.getElementById("error").textContent = "";
    updateGameDisplay();
}

// Update game display
function updateGameDisplay() {
    const historyDiv = document.getElementById("gameHistory");
    historyDiv.innerHTML = gameHistory
        .map(entry => `<div>${entry.player}: ${entry.name}</div>`)
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

// Add enter key support for input
document.getElementById("playerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Initialize game on load
window.onload = initializeGame;