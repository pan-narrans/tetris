class Tetromino {
    constructor(x, y, matrix) {
        this.x = x;
        this.y = y;
        this.matrix = matrix;
    }

    moveLeft() {
        if (isValidMove(this.x - 1, this.y, this.matrix)) {
            this.x--;
        }
    }

    moveRight() {
        if (isValidMove(this.x + 1, this.y, this.matrix)) {
            this.x++;
        }
    }

    rotate() {
        const rotated = rotateMatrix(this.matrix);
        if (isValidMove(this.x, this.y, rotated)) {
            this.matrix = rotateMatrix(this.matrix);
        }
    }

    moveDown() {
        if (isValidMove(this.x, this.y + 1, this.matrix)) {
            this.y++;
        } else {
            board.placeTetromino(this);
        }
    }
}