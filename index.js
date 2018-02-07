function generateBoard(dimensi){
  var board = [];
  var boardPerbaris = [];
  var barisKe = 0;
  var dimensiSeluruhBoard = dimensi * dimensi;

  for(var i = dimensiSeluruhBoard; i > 0; i--){
    if(boardPerbaris.length < dimensi){
      boardPerbaris.push(i);
    }
    if(boardPerbaris.length === dimensi){
      barisKe++;
      if(barisKe % 2 === 0){
        var boardPerbarisTerbalik = [];
        for(var j = boardPerbaris.length - 1 ; j >= 0; j-- ){
            boardPerbarisTerbalik.push(boardPerbaris[j]);
        }
        board.push(boardPerbarisTerbalik)
        
      } else {
        board.push(boardPerbaris);
      }
      boardPerbaris = []
    }

  }
  return board;

}

console.log(generateBoard(10));
