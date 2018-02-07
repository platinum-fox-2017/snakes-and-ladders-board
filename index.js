function generateBoard(number) {
    var baris = [];
    var arraySnakeBoard = [];
    var elemenBaris = 10 * 10;
    var counter = 0;
    var unsortedBaris = [];
    var unsortedArraySnakeBoard = [];

    var j = number * number;
    while (counter < number) {
        unsortedBaris.push(j);
        j = j - 1;
        if ((j) % number == 0) {
            unsortedArraySnakeBoard.push(unsortedBaris);
            unsortedBaris = [];
            counter = counter + 1;
        }    
    }

    counter = 0;

    while (counter < number) {
        if (number % 2 == 0) {
            if (counter % 2 == 0) {
                for (var idx = 0; idx < number; idx++) {
                    baris.push(unsortedArraySnakeBoard[counter][idx]);
                }
                arraySnakeBoard.push(baris);
                baris = [];
            } else {
                for (var idx = (number-1); idx >= 0; idx--) {
                    baris.push(unsortedArraySnakeBoard[counter][idx]);
                }
                arraySnakeBoard.push(baris);
                baris = [];
            }
            counter = counter + 1;
        } else {
            if (counter % 2 != 0) {
                for (var idx = 0; idx < number; idx++) {
                    baris.push(unsortedArraySnakeBoard[counter][idx]);
                }
                arraySnakeBoard.push(baris);
                baris = [];
            } else {
                for (var idx = (number-1); idx >= 0; idx--) {
                    baris.push(unsortedArraySnakeBoard[counter][idx]);
                }
                arraySnakeBoard.push(baris);
                baris = [];
            }
            counter = counter + 1;
        }
    }

    return arraySnakeBoard;
}

console.log(generateBoard(15));