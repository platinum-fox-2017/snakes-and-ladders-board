function generateBoard() {
    var baris = [];
    var arraySnakeBoard = [];
    var elemenBaris = 10 * 10;
    var counter = 0;
    var unsortedBaris = [];
    var unsortedArraySnakeBoard = [];

    var j = 10 * 10;
    while (counter < 10) {
        unsortedBaris.push(j);
        j = j - 1;
        if ((j) % 10 == 0) {
            unsortedArraySnakeBoard.push(unsortedBaris);
            unsortedBaris = [];
            counter = counter + 1;
        }    
    }

    counter = 0;

    while (counter < 10) {
        if (counter % 2 == 0) {
            for (var idx = 0; idx < 10; idx++) {
                baris.push(unsortedArraySnakeBoard[counter][idx]);
            }
            arraySnakeBoard.push(baris);
            baris = [];
        } else {
            for (var idx = 9; idx >= 0; idx--) {
                baris.push(unsortedArraySnakeBoard[counter][idx]);
            }
            arraySnakeBoard.push(baris);
            baris = [];
        }
        counter = counter + 1;
    }

    return arraySnakeBoard;
}

console.log(generateBoard());

