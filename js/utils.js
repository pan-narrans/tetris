function rotateMatrix(matrix) {
    const matrixLength = matrix.length;
    const matrixSize = matrix.length - 1;
    const rotatedMatrix = [];

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            rotatedMatrix[i] = matrix[i].slice();
        }
    }

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            rotatedMatrix[i][j] = matrix[matrixSize - j][i];
        }
    }

    return rotatedMatrix;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
