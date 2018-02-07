// Release 0 & 1
let generateBoard = (input) => {
    let outside =[];
    let inside =[];
    let total = input * input;
    for(let i=0; i<input; i++){
        outside.push(inside);
        if(i%2 === 0){
            for(let j=0; j<input; j++){
                outside[i].push(total);
                total--;
            }
        } else if(i%2 !==0){
            total -= (input-1);
            for(let j=0; j<input; j++){
                outside[i].push(total);
                total++;
            }
            total -= (input+1);    
        }
        inside =[];
    }
     return (outside);
}

console.log(generateBoard(10));
console.log(generateBoard(5));