function generateBoard(num) {
  let result = [];
  let count = Math.pow(num, 2);
 
  if (count % 2 === 0) {
    for (let i = 0; i < num; i++) {
      let rows = [];
      result.push(rows);
      if (i % 2 === 0) {
        for (let j = 0; j < num; j++) {
          rows.push(count);
          count--;
        }
      } else if (i % 2 !== 0) {
        count -= num - 1;
        for (let j = 0; j < num; j++) {
          rows.push(count);
          count++;
        }
        count -= num + 1;
      }
    }
  } else if (count % 2 !== 0) {
    count -= num - 1;
    for (let i = 1; i <= num; i++) {
      let rows = [];
      if (i % 2 === 0) {
        for (let j = 0; j < num; j++) {
          rows.push(count);
          count--;
        }
        result.push(rows);
        count -= num - 1;
      } else if (i % 2 !== 0) {
        for (let j = 0; j < num; j++) {
          rows.push(count);
          count++;
        }
        result.push(rows);
        count -= num + 1;
      }
    }
  }

  return result;
}

console.log(generateBoard(5));
console.log(generateBoard(10));