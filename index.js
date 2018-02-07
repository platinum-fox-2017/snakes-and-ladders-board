function generateBoard(input){
  var hasil = []
  var kali = input * input
  var penambah = 0
  var arr = []
  var reverse = []
  var temp = []

  while(penambah < input){
    arr.push(kali)
    kali = kali - 1
    if(kali % input === 0){
      hasil.push(arr)
      penambah = penambah + 1
      arr = []
    }
  }

  for(var i=0; i<hasil.length; i++){
    if(i % 2 === 0){
      for(var j=0; j<hasil[i].length; j++){
        temp.push(hasil[i][j])
      }
      reverse.push(temp)
    }
    else{
      for(var k=hasil[i].length-1; k>=0; k--){
        temp.push(hasil[i][k])
      }
      reverse.push(temp)
    }
    temp = []
  }
    return reverse
}

console.log(generateBoard(10))
