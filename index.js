const snakeBoard = grid => {
  let board = [];
  let count = grid*grid
  for (let i = grid; i > 0; i--) {
    let arr = []
    let limit = count-grid
    if (i % 2 === 0) {
      for (let j = count; j > limit; j--) {
          arr.push(j)
          count -= 2
      }
    } else {
      for (let j = limit+grid+1; j < count+grid+1; j++) {
        arr.push(j)
      }
    }
    board.push(arr)
  }
  return board
}

console.log(snakeBoard(10));
