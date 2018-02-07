const generateBoard = (number) => {
    let board = []
    for (let i = number; i > 0; i--) {
        let temp = []
        if (i % 2 !== 0) {
            for (let j = 1; j <= number; j++) {
                temp.push(number * i - number + j)
            }
        } else {
            for (let j = number; j > 0; j--) {
                temp.push(number * i - number + j)
            }
        }
        board.push(temp)
    }
    return board
}
console.log(generateBoard(10))