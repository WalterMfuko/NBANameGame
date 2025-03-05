# NBA Name Game

A web-based name game that tests your knowledge of NBA players. This interactive game challenges players to name NBA players following specific rules based on player names.

## How to Play

1. The game automatically starts with a randomly selected NBA player name
2. Players take turns entering NBA player names
3. Each new name must follow these rules:
   - The first letter of the new player's first name must match the first letter of the previous player's last name
   - For example:
     - If the last player was "Mitch Richmond"
     - The next player must start with "R" (like "Roy Hibbert")
     - Then the next player must start with "H" (like "Horace Grant")
     - And so on...

## Game Rules

### Starting the Game
- An NBA player name is automatically generated to start the game
- Player 1 goes first, followed by Player 2

### Valid Moves
- Names must be of real NBA players (past or present in the database)
- Names cannot be repeated during the same game
- The first letter rule must be followed (as explained above)

### Invalid Moves
- Using a player name that's already been used
- Using a name that doesn't start with the required letter
- Using a name that's not in the NBA players database
- Leaving the input field empty

### Hints
- Each player gets 2 hints per turn
- Hints will show a valid player name that starts with the required letter

## Features

- Automatic first player name generation
- Turn tracking between players
- Input validation for player names
- Game history display
- Error messages for invalid moves
- Visual indication of the required starting letter
- Help button for quick access to game instructions

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Installation

1. Clone the repository: `git clone [your-repository-url]`
2. Open `index.html` in your web browser

## Playing Online
Visit the GitHub Pages deployment at: https://waltermfuko.github.io/NBANameGame/

## Example Game Flow

1. Auto-generated: "Mitch Richmond"
2. Player 1: "Roy Hibbert" (starts with R from Richmond)
3. Player 2: "Horace Grant" (starts with H from Hibbert)
4. Player 1: "George Karl" (starts with G from Grant)
5. And so on...

