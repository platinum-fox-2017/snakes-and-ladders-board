// Release 0
function generateBoard(num = 10){
    let result = [];

    for (i = num; i > 0; i--){
        result.push([]);
        if (i % 2 === 0){
            for (j = num; j > 0; j-- ){
                add = (i-1) * num;
                result[num-i].push(j+add);
            }
        } else {
            for (k = 1; k <= num; k++){
                add = (i-1) * num;
                result[num-i].push(k+add);
            }
        }
    }
    return result
}

console.log(generateBoard())

// Release 1
console.log(generateBoard(15))
console.log(generateBoard(8))