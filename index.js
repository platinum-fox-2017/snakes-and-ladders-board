function generateBoard() {
	let num = 10, 
		result = [],
		flag = false;

	if (num % 2 == 0) flag = true;

	for (let i = num; i > 0; i--) {
		let temp = [];

		if (!flag) {
			for (let j = num - 1; j >= 0; j--) {
				temp.push(num*i-j);
			}
		} else {
			for (let j = 0; j < num; j++) {
				temp.push(num*i-j);
			}
		}

		flag = !flag;
		result.push(temp);
	}

	return result;
}

console.log(generateBoard());