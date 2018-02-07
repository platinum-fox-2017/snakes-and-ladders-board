'use strict'
function generateBoard(input){
  var luas=input*input;
  var counter=0;
  var arrTemp=[];
  var arrBoard=[];
  var arrTimpa=[];
  var arrReturn=[];

  while(counter<input){
    arrTemp.push(luas);
    luas--;
    if(luas%input===0){
      arrBoard.push(arrTemp);
      arrTemp=[];
      counter++;
    }
  }

  if(input%2===0){
    for(let i=0;i<input;i++){
      if(i%2===0){
        for(let j=0;j<input;j++){
          arrTimpa.push(arrBoard[i][j])
        }
      arrReturn.push(arrTimpa)
      }
      else{
        for(let k=input-1;k>=0;k--){
          arrTimpa.push(arrBoard[i][k])
        }
      arrReturn.push(arrTimpa)
      }
      arrTimpa=[];
    }
    return arrReturn;
  }
  else{
    for(let i=0;i<input;i++){
      if(i % 2 !== 0){
        for(let j=0; j<input; j++){
          arrTimpa.push(arrBoard[i][j])
        }
        arrReturn.push(arrTimpa)
      }
      else{
        for(let k=input-1;k>=0;k--){
          arrTimpa.push(arrBoard[i][k])
        }
        arrReturn.push(arrTimpa)
      }
      arrTimpa=[];
    }
  }
  return arrReturn;
}
console.log(generateBoard(15));
