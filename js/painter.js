const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

function paint(x, y, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) {
                context.fillStyle = COLOR[matrix[i][j]];
                context.fillRect(
                    (x + i) * SIZE,
                    (y + j) * SIZE,
                    SIZE - 1,
                    SIZE - 1);
            }
        }
    }
}

function clearCanvas(){;
    context.clearRect(0, 0, canvas.width, canvas.height);
}