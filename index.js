function generateBoard(length) {
  let slBoard = []
  let slNum = length*length

  for(let i=0; i<length; i++) {
    slBoard.push([])
    if(length % 2 == 0 && slBoard.length % 2 == 1) {
      for(let j=slNum; j>=(slNum-length)+1; j--) {
        slBoard[i].push(j)
      }
      slNum -= length;
    } else {
      for(let k=(slNum-length)+1; k<=slNum; k++) {
        slBoard[i].push(k)
      }
      slNum -= length;
    }
  }
  return slBoard
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
