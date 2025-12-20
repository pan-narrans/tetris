let board = new Board();

let tetrominoSequence = [];
let tetromino = new Tetromino(0, 0, getNextTetromino());

let speed = 10;
let speedCounter = 0;

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            tetromino.moveLeft();
            break;
        case 'ArrowRight':
            tetromino.moveRight();
            break;
        case 'ArrowUp':
            tetromino.rotate();
            break;
        case 'ArrowDown':
            tetromino.moveDown();
            break;
    }
});

requestAnimationFrame(() => gameLoop());

function gameLoop() {
    requestAnimationFrame(() => gameLoop());
    clearCanvas();

    if (++speedCounter > speed) {
        speedCounter = 0;
        tetromino.moveDown();
    }

    paint(0, 0, board.matrix);
    paint(tetromino.x, tetromino.y, tetromino.matrix);
}

function isValidMove(x, y, tetromino) {
    for (let i = 0; i < tetromino.length; i++) {
        for (let j = 0; j < tetromino[i].length; j++) {
            if (tetromino[i][j] === 0) {
                continue;
            }

            if (board.positionOverBounds(x + i, y + j) || board.positionTaken(x + i, y + j)) {
                return false;
            }
        }
    }

    return true;
}

function gameOver() {
    alert("Game Over");
    board = new Board();
    tetromino = new Tetromino(0, 0, getNextTetromino());
}

function getNextTetromino() {
    if (tetrominoSequence.length === 0) {
        generateTetrominoSequence();
    }

    return TETROMINO_MATRICES[tetrominoSequence.pop()];
}

function generateTetrominoSequence() {
    const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    tetrominoSequence = [];
    while (sequence.length > 0) {
        const rand = getRandomInt(0, sequence.length - 1);
        const piece = sequence.splice(rand, 1)[0];
        tetrominoSequence.push(piece);
    }
}
