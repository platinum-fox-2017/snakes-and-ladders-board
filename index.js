function generateBoard(num) {
    var board=[];
    var n=1;
    for(var i=0; i<num; i++) {
        board.splice(0,0,[]);
        for(var j=0; j<num; j++) {
            if(i%2===0) {board[0].push(n);}
            else {board[0].splice(0,0,n);}
            n++;
        }
    }
    return board;
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));