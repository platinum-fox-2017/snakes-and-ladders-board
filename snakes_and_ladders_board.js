function generateBoard(value){
  let result = [];

  for(let i=value; i>0; i--){
    let row = [];
    if(i%2 !== 0){
      for(let j=(i-1)*value+1; j<=value*i; j++){
        row.push(j)
      }
    } else {
      for(let j=value*i; j>=(i-1)*value+1; j--){
        row.push(j)
      }
    }
    result.push(row)
  }
  return result;
}

console.log(generateBoard(15));
