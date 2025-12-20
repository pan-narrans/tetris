class Board {

    constructor() {
        this.matrix = this.#generateEmptyBoard();
    }

    positionOverBounds(x, y) {
        return x < 0
            || x >= BOARD_SIZE.columns
            || y < 0
            || y >= BOARD_SIZE.rows
    }

    positionTaken(x, y) {
        return this.matrix[x][y] !== 0;
    }

    placeTetromino(piece) {
        for (let i = 0; i < piece.matrix.length; i++) {
            for (let j = 0; j < piece.matrix[i].length; j++) {
                if (piece.matrix[i][j] !== 0) {
                    if (piece.y + j <= 0) {
                        gameOver();
                        return;
                    }
                    this.matrix[piece.x + i][piece.y + j] = piece.matrix[i][j];
                }
            }
        }

        this.clearFilledLines();
        tetromino = new Tetromino(0, 0, getNextTetromino());
    }


    clearFilledLines() {
        for (let i = 0; i < BOARD_SIZE.rows; i++) {
            let isLineFilled = true;

            for (let j = 0; j < BOARD_SIZE.columns; j++) {
                if (this.matrix[j][i] === 0) {
                    isLineFilled = false;
                    break;
                }
            }

            if (isLineFilled) {
                for (let k = i; k > 0; k--) {
                    for (let l = 0; l < BOARD_SIZE.columns; l++) {
                        this.matrix[l][k] = this.matrix[l][k - 1];
                    }
                }
            }
        }
    }

    #generateEmptyBoard() {
        let matrix = [];

        for (let i = 0; i < BOARD_SIZE.columns; i++) {
            matrix[i] = [];
            for (let j = 0; j < BOARD_SIZE.rows; j++) {
                matrix[i][j] = 0;
            }
        }

        return matrix
    }
}