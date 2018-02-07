function generateBoard(num){
    var result = [];
    var startNumber = num*num;

    if(startNumber%2==0){
        for(let i=1; i<=num; i++){
            if(i%2!==0){
                let row = [];
                for(let j=0; j<num; j++){
                    if(i==0){
                        row.push(startNumber);
                    }else{
                        row.push(startNumber);
                    }
                    startNumber--;
                }
                result.push(row);
                startNumber -= num-1;
            }else if(i%2==0){
                let row = [];
                for(let j=0; j<num; j++){
                    if(j==0){
                        row.push(startNumber);
                    }else{
                        row.push(startNumber);
                    }
                    startNumber++;
                }
                result.push(row);
                startNumber -= num+1;
            }
        }
    }else if(startNumber%2!==0) {
        startNumber -= num-1;
        for(let i=1; i<=num; i++){
            if(i%2==0){
                let row = [];
                for(let j=0; j<num; j++){
                    if(i==0){
                        row.push(startNumber);
                    }else{
                        row.push(startNumber);
                    }
                    startNumber--;
                }
                result.push(row);
                startNumber -= num-1;
            }else if(i%2!==0){
                let row = [];
                for(let j=0; j<num; j++){
                    if(j==0){
                        row.push(startNumber);
                    }else{
                        row.push(startNumber);
                    }
                    startNumber++;
                }
                result.push(row);
                startNumber -= num+1;
            }
        }
    }

    return result;
}

console.log(generateBoard(15));