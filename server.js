import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(__dirname));

// Store active games
const games = new Map();

io.on('connection', (socket) => {
    console.log('Player connected:', socket.id);

    socket.on('createGame', () => {
        const gameId = Math.random().toString(36).substr(2, 6);
        games.set(gameId, {
            players: [socket.id],
            gameState: {
                currentPlayer: 1,
                scores: {1: 0, 2: 0},
                gameHistory: [],
                lastUsedNames: []
            }
        });
        socket.join(gameId);
        socket.emit('gameCreated', { gameId, playerId: 1 });
    });

    socket.on('joinGame', (gameId) => {
        const game = games.get(gameId);
        if (game && game.players.length < 2) {
            game.players.push(socket.id);
            socket.join(gameId);
            socket.emit('gameJoined', { gameId, playerId: 2 });
            io.to(gameId).emit('gameStart', game.gameState);
        } else {
            socket.emit('error', 'Game not found or full');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});