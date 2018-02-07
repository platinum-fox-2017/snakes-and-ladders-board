console.log('Release 0');
console.log('===============');
function generateBoard() {

    var board = []
    var inputBoard = 100;
    
    for (var j = 0; j < 10; j++){
        board.push([]);
        if (j % 2 == 0) {
            for (var i = 0; i < 10; i++) {
                board[j].push(inputBoard);
                inputBoard -= 1;
            }
        } else {
            var inputBoardGanjil = inputBoard - 9;
            for (var i = 0; i < 10; i++) {
                board[j].push(inputBoardGanjil);
                inputBoardGanjil += 1;
                inputBoard -= 1;
            }
        }
    }
    return(board);
}

console.log(generateBoard());



console.log('Release 1');
console.log('===============');
function generateBoard1(num) {

    var board1 = []
    var inputBoard1 = num * num;
    
    for (var j = 0; j < num; j++){
        board1.push([]);
        if (j % 2 == 0) {
            for (var i = 0; i < num; i++) {
                board1[j].push(inputBoard1);
                inputBoard1 -= 1;
            }
        } else {
            var inputBoardGanjil1 = inputBoard1 - (num-1);
            for (var i = 0; i < num; i++) {
                board1[j].push(inputBoardGanjil1);
                inputBoardGanjil1 += 1;
                inputBoard1 -= 1;
            }
        }
    }
    return(board1);
}

console.log(generateBoard1(5));


