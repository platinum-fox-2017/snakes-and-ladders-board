function generateBoard(num) {
    let arr = [];
    let count = 1;

    for(let i = num - 1; i >= 0; i--) {
        let temp = []

        if(num % 2 === 0) {
            if (i % 2 === 0) {
                for (let j = num - 1; j >= 0; j--) {
                    temp[j] = count;
                    count++;
                }
            } else {
                for (let j = 0; j < num; j++) {
                    temp[j] = count;
                    count++;
                }
            }
        } else {
            if (i % 2 === 1) {
                for (let j = num - 1; j >= 0; j--) {
                    temp[j] = count;
                    count++;
                }
            } else {
                for (let j = 0; j < num; j++) {
                    temp[j] = count;
                    count++;
                }
            }
        }

        
        arr[i] = temp
    }    

    return arr
}

console.log(generateBoard(15))
console.log(generateBoard(6))