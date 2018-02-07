function generateBoard(){
  var board = [];
  var boardPerbaris = [];
  var barisKe = 0;
  for(var i = 100; i > 0; i--){
    if(boardPerbaris.length < 10){
      boardPerbaris.push(i);
    }
    if(boardPerbaris.length === 10){
      barisKe++;
      if(barisKe % 2 === 0){
        var boardPerbarisTerbalik = [];
        for(var j = boardPerbaris.length - 1; j > 0; j-- ){
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

console.log(generateBoard());
