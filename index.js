// release 0
function snekArr(){
  let board = [];
  let boardSize = { length: 10, height: 10 };
  let countLine = 1;
  let reverseBox = [];
  let reverseMark = 0;
  for (var downCount = 100; downCount > 0 ; downCount--) {

    reverseBox.push(downCount)
    if (countLine === 10) {
      countLine = 0;
      reverseMark += 1;
      if (reverseMark % 2 === 0) {
        reverseBox.reverse();
      }
      board.push(reverseBox),
      reverseBox = [];
    }
    for (var rows = 0; rows < board.length; rows++) {
    }
    countLine += 1;
  }
  return board;
}

console.log(snekArr());

// release 1
function snekArrDynamic(dimension){
  let board = [];
  let boardSize = { length: dimension, height: dimension };
  let maxSteps = dimension * dimension;
  let countLine = 1;
  let reverseBox = [];
  if (dimension % 2 !== 0) {
    var reverseMark = 1;
  } else {
    reverseMark = 0;
  }

  for (var downCount = maxSteps; downCount > 0 ; downCount--) {

    reverseBox.push(downCount)
    if (countLine === dimension) {
      countLine = 0;
      reverseMark += 1;
      if (reverseMark % 2 === 0) {
        reverseBox.reverse();
      }
      board.push(reverseBox),
      reverseBox = [];
    }
    for (var rows = 0; rows < board.length; rows++) {
    }
    countLine += 1;
  }
  return board;
}

console.log(snekArrDynamic(15));
