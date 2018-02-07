// Solution 1 : Counting up and using swap function ------------------------------------------------
function generateBoard(n){
  let count = 1;
  let flag = 1;
  let arrayResult = new Array;
  for(let i = 0; i < n; i++){
    let tempArray = new Array;
    for(let j = 0; j <n; j++){
      if(flag%2==1){
        tempArray.push(count++);
      }
      else {
        tempArray.push(count--);
      }
    }
    count = (flag++%2==1)?count+n-1:count+n+1;
    arrayResult.push(tempArray);
  }
  swapArray(arrayResult);
  return arrayResult;
}

function swapArray (arr){
  for(let i = 0; i < Math.floor(arr.length/2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}


// Solution 2 : Counting down, not using swap function ------------------------------------------------

function generateBoard(n){
  let flag = n%2;
  let count = (flag==1)?(n*n-n+1):(n*n);
  let arrayResult = new Array;
  for(let i = 0; i < n; i++){
    let tempArray = new Array;
    for(let j = 0; j <n; j++){
      if(flag==1){
        tempArray.push(count++);
      }
      else {
        tempArray.push(count--);
      }
    }
    count = (flag%2==1)?count-n-1:count-n+1;
    flag = (flag+1)%2;
    arrayResult.push(tempArray);
  }
  return arrayResult;
}


function generateBoard(n){
  
}
console.log(generateBoard(5));
