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
 //For Release 0
  if(input % 2 === 0){
    for(var i=0; i<hasil.length; i++){
      if(i % 2 === 0){
        for(var k=0; k<hasil[i].length; k++){
          temp.push(hasil[i][k])
        }
        reverse.push(temp)
      }
      else{
        for(var l=hasil[i].length-1; l>=0; l--){
          temp.push(hasil[i][l])
        }
        reverse.push(temp)
      }
      temp = []
    }
    return reverse
  }
  //For Release 1
  else{
    for(var i=0; i<hasil.length; i++){
      if(i % 2 !== 0){
        for(var k=0; k<hasil[i].length; k++){
          temp.push(hasil[i][k])
        }
        reverse.push(temp)
      }
      else{
        for(var l=hasil[i].length-1; l>=0; l--){
          temp.push(hasil[i][l])
        }
        reverse.push(temp)
      }
      temp = []
    }
    return reverse
  }

}
console.log(generateBoard(10))
console.log(generateBoard(15))
