function generateBoard(row) {
    let board = []
    let num = 1
    let count = 0

    for (let i = row; i > 0; i--) {
        let block = []
        board.push(block)
        for (let j = 0; j < row; j++) {
            block.push([])
        }
    }
    for (let x = row-1; x >= 0; x--) {
        if (count % 2 === 1) {
            for (let k = board[x].length-1; k >=0; k--) {
                board[x][k] += num
                num++
            }
        }else if (count % 2 === 0){
            for (let l = 0; l < board[x].length; l++) {
                board[x][l] += num
                num++
            }
        }
        count++
    }
    return board
}

console.log(generateBoard(10))
// console.log(generateBoard(15))