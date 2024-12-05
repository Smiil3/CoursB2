console.log('it works')

    /**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    const m = grid.length, n = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Haut, bas, gauche, droite
    
    // Initialiser la matrice de distances avec Infinity
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
    dist[0][0] = 0;
    
    // Utiliser une deque (on peut simuler avec un array en JS)
    const deque = [];
    deque.push([0, 0]); // [x, y]

    while (deque.length > 0) {
        const [x, y] = deque.shift(); // Retirer du début
        
        // Explorer les voisins
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            
            // Vérifier que le voisin est dans les limites de la grille
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                const newCost = dist[x][y] + grid[nx][ny];
                
                // Si on trouve un chemin plus optimal
                if (newCost < dist[nx][ny]) {
                    dist[nx][ny] = newCost;
                    
                        // Ajouter à la deque : au début si coût 0, à la fin si coût 1
                        if (grid[nx][ny] === 1) {
                            deque.push([nx, ny]); // Obstacle : ajouter à la fin
                        } else {
                            deque.unshift([nx, ny]); // Cellule vide : ajouter au début
                        }
                    }
            }
        }
    }
    
    // Retourner la distance minimale pour atteindre (m-1, n-1)
    return dist[m - 1][n - 1];
};

console.log("Test passed ?", minimumObstacles([[0,1,1],[1,1,0],[1,1,0]]) === 2)