const snakeAndLadder = (num) =>{
    let board = []
    for (let row=num; row>=1; row--){
        let rowBoard=[]
        for (let i=1; i<=num; i++){
            row % 2 === 0 ?
            rowBoard.push(num*(row-1)+((num+1)-i)):
            rowBoard.push(num*(row-1)+i)
        }
        board.push(rowBoard)
    }
    return board
}

console.log(snakeAndLadder(8))
