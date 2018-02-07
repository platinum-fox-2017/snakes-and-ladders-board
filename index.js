function generateBoard(input){
  var board = [];
  var separateBoard = []
  for(var i=(input*input); i>0; i--){
    if(separateBoard.length===input){
      board.push(separateBoard);
      separateBoard = [];
      separateBoard.push(i);
    } else {
      separateBoard.push(i);
    }
  }
  board.push(separateBoard);
  if(input%2===0){
    for(var j=0; j<input; j++){
      if(j%2!==0){
        for(var k=1; k<board[j].length; k++){
          for(var l=0; l<=k-1; l++){
            var belakang = board[j][k];
            var depan = board[j][l];
            if(board[j][k]<board[j][l]){
              board[j][l]=belakang;
              board[j][k]=depan;
            }
          }
        }
      }
    }
  } else {
    for(var c=0; c<input; c++){
      if(c%2===0){
        for(var v=1; v<board[c].length; v++){
          for(var b=0; b<=v-1; b++){
            var belakang = board[c][v];
            var depan = board[c][b];
            if(board[c][v]<board[c][b]){
              board[c][b]=belakang;
              board[c][v]=depan;
            }
          }
        }
      }
    }
  }

  return board;
}

console.log(generateBoard(8));
