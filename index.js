const snakeAndLadder = () =>{
    let board = []
    for (let row=10; row>=1; row--){
        let rowBoard=[]
        for (let i=1; i<=10; i++){
            row % 2 === 0 ?
            rowBoard.push(10*(row-1)+(11-i)):
            rowBoard.push(10*(row-1)+i)
        }
        board.push(rowBoard)
    }
    return board
}

console.log(snakeAndLadder())
