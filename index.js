function generateBoard(dimensi){
  var board = [];
  var boardPerbaris = [];
  var barisKe = 0;
  var dimensiSeluruhBoard = dimensi * dimensi;

  for(var i = dimensiSeluruhBoard; i > 0; i--){
      boardPerbaris.push(i);
    if(boardPerbaris.length === dimensi){
      barisKe++;
      if(dimensi % 2 ===  0){
        if(barisKe % 2 === 0){
          var boardPerbarisTerbalik = [];
          for(var j = boardPerbaris.length - 1 ; j >= 0; j-- ){
              boardPerbarisTerbalik.push(boardPerbaris[j]);
          }
          board.push(boardPerbarisTerbalik)
        } else {
          board.push(boardPerbaris);
        }
      } else {
        if(barisKe % 2 != 0){
          var boardPerbarisTerbalik = [];
          for(var j = boardPerbaris.length - 1 ; j >= 0; j-- ){
              boardPerbarisTerbalik.push(boardPerbaris[j]);
          }
          board.push(boardPerbarisTerbalik)
        } else {
          board.push(boardPerbaris);
        }
      }
      boardPerbaris = []
    }
  }
  return board;

}

console.log(generateBoard(5));
