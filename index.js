"use strict"

const generateBoard = size =>{
	let board = []
	for(let i = 0;i<size;i++){
		board.push([])
		let numUp = 1
		let numDown =size
		for(let j =0;j<size;j++){
			if(size % 2 ===0){
				if(i % 2 !== 0){
					board[i].push(numUp+(size*(size-1-i)))
					numUp++
				}else{
					board[i].push(numDown+(size*(size-1-i)))
					numDown--
				}
			}else{
				if(i % 2 === 0){
					board[i].push(numUp+(size*(size-1-i)))
					numUp++
				}else{
					board[i].push(numDown+(size*(size-1-i)))
					numDown--
				}
			}	
		}
	}
	// for(let i=0;i<size;i++){
	// 	for(let j=0;j<size;j++){
	// 		board[i][j]+=size*(size-1-i)
	// 	}
	// }
	
	return board
}
console.log(generateBoard(10))
console.log(generateBoard(7))