const arr = [
  ['red', 'blue', 'green', 'red'],
  ['red', 'green', 'green', 'red'],
  ['red', 'yellow', 'green', 'red'], 
  ['red', 'green', 'green', 'red']
];
const MAX_ROW = arr.length;
const MAX_COL = arr[0].length;
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
];

const paintColor = (point, oldColr, newColr) => {
    let queue = [point];

    while(queue.length) {
      let currentPoint = queue.shift();
      let currentRow = currentPoint[0];
      let currentCol = currentPoint[1];

      if(currentRow < 0 || currentRow >= MAX_ROW || currentCol < 0 || currentCol >= MAX_COL) continue;

      if(arr[currentRow][currentCol] !== oldColr) continue;

      arr[currentRow][currentCol] = newColr;

      for(let dir of DIRS) {
        let newRow = currentRow + dir[0];
        let newCol = currentCol + dir[1];  
        queue.push([newRow, newCol]);
      }

    }

};

paintColor([0, 3], 'green', 'black');
console.log(arr);