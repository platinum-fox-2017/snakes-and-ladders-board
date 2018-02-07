function generateBoard() {
    var baris = [];
    var arraySnakeBoard = [];
    var elemenBaris = 10 * 10;
    var counter = 0;

    while (counter < 10) {
        baris.push(elemenBaris);
        elemenBaris = elemenBaris - 1;
        if ((elemenBaris) % 10 == 0) {
            arraySnakeBoard.push(baris);
            baris = [];
            counter = counter + 1;
        }
    }
    return arraySnakeBoard;
}

console.log(generateBoard());

