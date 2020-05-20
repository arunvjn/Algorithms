let maze = [
  [ 1 , 1, 0, 1],
  [ 1, 1, 1, 0],
  [1, 1, 1 , 0],
  [0, 0, 1, 1]
];


let MAX_ROW = maze.length - 1;
let MAX_COL = maze[0].length - 1;

let isOrigin = (row, col) => {
  return row === 0 && col === 0;
};

let findPath = (row, col) => {
  let path = [];
  let memo = {};
  
  // Check if there is a path between r-1, c || r, c-1 to the origin 
    // if yes add r,c to the path list and return true
    // else return false
  let factoryDP = (row, col) => {
    if(memo[`r${row}c{col}`]) return true;
    if(row > MAX_ROW || col > MAX_COL || col < 0 || row < 0 || !maze[row][col]) {
      return false;
    }
    if(isOrigin(row, col) || factoryDP(row-1, col) || factoryDP(row, col-1)) {
      path.push([row, col]);
      memo[`r${row}c{col}`] = true;
      return memo[`r${row}c{col}`];
    }
  };
  factoryDP(row, col);
  return path;
};


// Find all path
let findPathDFS = (row, col, path) => {
  if(row > MAX_ROW || col > MAX_COL || col < 0 || row < 0 || !maze[row][col]) {
    return;
  }
  findPathDFS(row, col-1, [...path, [row, col]]);
  findPathDFS(row-1, col, [...path, [row, col]]);

  if(isOrigin(row, col)) {
    path.push([row, col]);
    console.log(path);
  }
};

// Find all paths
// findPathDFS(3, 3, []);

// Find one path and return
console.log(findPath(3, 3));