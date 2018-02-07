function snakeLadders(num){
  let total = num*num
  let result = []
  //generate Board
  for(let i = 0 ; i < num ;i++){
    result.push([])
  }

  for(let i = 0 ; i < num ; i++){
    if(i%2 === 0 && num%2 === 0 || i%2 !== 0 && num%2 !== 0 ){
      for(let j = 0 ; j < num ; j++){
        result[i].push(total)
        total --
      }
    }else{
      for(let j = total-num ; j < total ; j++ ){
        result[i].push(j+1)
      }
      total -= num
    }
  }
  return result
}

console.log(snakeLadders(7))
