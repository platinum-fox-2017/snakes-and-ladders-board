function generateboard(panjang){
  var counter=panjang*panjang
  var output=[]
  for(let i=0;i<panjang;i++){
    output.push([])
    var ganjilgenap=counter/panjang

    if(ganjilgenap%2===0){
      for(let j=0;j<panjang;j++){
        output[i].push(counter)
        counter--
      }
    }else{
      var counterkiri=1
      for(let j=0;j<panjang;j++){
        output[i].push(counter-panjang+counterkiri)
        counterkiri+=2
        counter--
      }
    }

  }

  console.log(output)
}

generateboard(10)
