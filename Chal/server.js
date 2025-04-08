const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });
let oldLimit = null;

let waitingPlayer = null; // Stocke le premier joueur en attente
let gameSession = null; // Stocke la partie en cours

server.on('connection', (socket) => {
    console.log('Nouvelle connexion WebSocket');

    socket.on('message', (message) => {
        const data = JSON.parse(message.toString());
        console.log(`Message reçu:`, data);

        if (data.action === "join") {
            if (!waitingPlayer) {
                // Premier joueur rejoint
                waitingPlayer = { socket, name: data.name };
                socket.send("✅ En attente d'un deuxième joueur...");
            } else {
                // Deuxième joueur rejoint -> Le jeu commence
                gameSession = {
                    player1: waitingPlayer,
                    player2: { socket, name: data.name },
                    maxNumber: null,
                    numbers: []
                };

                waitingPlayer.socket.send(`🎮 Match trouvé ! ${data.name} a rejoint. Entrez un nombre.`);
                socket.send(`🎮 Match trouvé ! Vous jouez contre ${waitingPlayer.name}. Entrez un nombre.`);

                waitingPlayer = null; // On libère la salle d'attente
            }
        }

        if (data.action === "play" && gameSession) {
            gameSession.numbers.push({ player: data.name, number: Number(data.number) });

            if (gameSession.numbers.length === 2) {
                const [p1, p2] = gameSession.numbers;
                if (oldLimit && (p1.number > oldLimit || p2.number > oldLimit)) {
                    gameSession.player1.socket.send(`🚀 Nouveau tour ! Entrez un nombre entre 1 et ${oldLimit}`);
                    gameSession.player2.socket.send(`🚀 Nouveau tour ! Entrez un nombre entre 1 et ${oldLimit}`);
                }
                let newLimit = Math.floor(Math.max(p1.number, p2.number) / 2);
                oldLimit = newLimit;

                if (p1.number === p2.number) {
                    // Joueur 2 perd
                    gameSession.player1.socket.send(`🎉 Bravo ${p1.player} ! ${p2.player} a perdu !`);
                    gameSession.player2.socket.send(`😢 Désolé ${p2.player}, tu as perdu !`);
                } else {
                    // Nouveau tour avec un max divisé par 2
                    gameSession.player1.socket.send(`🚀 Nouveau tour ! Entrez un nombre entre 1 et ${newLimit}`);
                    gameSession.player2.socket.send(`🚀 Nouveau tour ! Entrez un nombre entre 1 et ${newLimit}`);
                }

                // Réinitialisation pour le prochain tour
                gameSession.numbers = [];
            }
        }
    });

    socket.on('close', () => {
        console.log('Connexion fermée');
    });
});

console.log("Serveur WebSocket en écoute sur ws://localhost:8080");
