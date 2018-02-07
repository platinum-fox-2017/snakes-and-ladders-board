class SnakeAndLadders{
    constructor(){
        this.hasil = []
        this.numb;
    }

    createBoard(size){
        this.numb = Math.pow(size,2)
        for(let i = 0; i < size; i++){
           let column = []
           for(let j = 0; j< size;j++){
               column.push([])
           }
           this.hasil.push(column)
        }
        return this.hasil
    }

    fillBoard(){
        let number = 1
        let count = 0
        for(let i = this.hasil.length-1;i >= 0; i--){
            
            if(i === this.hasil.length - 1){
                for(let l = 0; l < this.hasil[i].length; l++){
                    this.hasil[i][l] += number
                    number++
                }
            
            }else if(count % 2 === 0){
                for(let j = 0; j < this.hasil[i].length;j++){
                    this.hasil[i][j] += number
                    number++
                }
            }else if(count % 2 === 1){
                for(let k = this.hasil[i].length-1; k >= 0;k--){
                    this.hasil[i][k] += number
                    number++
                }
            }
            count++
        }

        return this.hasil
    }
}

let release0 = new SnakeAndLadders()

release0.createBoard(11)
console.log(release0.fillBoard())