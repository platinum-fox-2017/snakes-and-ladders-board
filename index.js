function generateBoard(num) {
  let board = []
  for (var i = 0; i < num; i++) {
    var newArray = []
    if (num % 2 === 0) {
      if (i % 2 === 1) {
        for (var j = 1; j <= num; j++) {
          newArray.push(j)
        }
      }
      else {
        for (var j = num; j >0 ; j--) {
          newArray.push(j)
        }
      }
    }
    else {
      if (i % 2 === 1) {
        for (var j = num; j > 0; j--) {
          newArray.push(j)
        }
      }
      else {
        for (var j = 1; j <= num ; j++) {
          newArray.push(j)
        }
      }
    }
    board.push(newArray)
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < num; j++) {
      board[i][j] += ((num-1-i) * num)
    }
  }

  return board
}

console.log(generateBoard(13));
