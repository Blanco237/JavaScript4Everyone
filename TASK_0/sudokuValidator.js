let testBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

isValidBoard(testBoard);

function isValidBoard(board){
    let validity = checkColumns(board) && checkRows(board) && checkMatrix(board);

    if(validity){
        console.log('Board is a Valid solution to Sudoku');
    }
    else{
        console.log('Board is not a valid solution to Sudoku');
    }
}

function checkRows(board) {
    let rows = board.length;
    let state = true;
    for (let i = 0; i < rows && state; i++) {
        let rowSet = new Set();
        let row = board[i];
        row.forEach(element => {
            if (rowSet.has(element)) {
                state = false;
            }
            else {
                rowSet.add(element);
            }
        });
    }
    return state;
}

function checkColumns(board) {
    let rows = board.length;
    let columns = board[0].length;
    let state = true;
    for (let i = 0; i < columns && state; i++) {
        let columnSet = new Set();
        for (let j = 0; j < rows; j++) {
            let element = board[j][i];
            if (columnSet.has(element)) {
                state = false;
                break;
            }
            else {
                columnSet.add(element);
            }
        }
    }

    return state
}

function checkMatrix(board) {

    for (let rowStart = 0; rowStart < 9; rowStart += 3) {
        for (let columnStart = 0; columnStart < 9; columnStart += 3) {
            let matrixSet = new Set();
            for (let i = rowStart; i < 3; i++) {
                for (let j = columnStart; j < 3; j++) {
                    let element = board[i][j];
                    if (matrixSet.has(element)) {
                        return false;
                    }
                    else {
                        matrixSet.add(element);
                    }
                }
            }
        }
    }

    return true;
}