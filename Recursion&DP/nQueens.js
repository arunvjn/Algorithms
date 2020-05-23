const nQueens = n => {
  
  ways = 0;

  nqueenRecurse = (column, placedQueens = {}) => {
    if(column == n) 
      return ways++;
    placedQueens = Object.create(placedQueens);  
    for(let row=0;row<n;row++) {
      if(isValidPosition(column, row, placedQueens)) {
        placedQueens[column] = row;
        nqueenRecurse(column+1, placedQueens);
      }
    }
  };

  isValidPosition = (column, row, placedQueens) => {
    if(placedQueens[column] == row) return false;

    for(let col in placedQueens) {
      if(placedQueens[col] == row) return false;
    }

    for(let c = column-1, r = row-1; c>-1 && r>-1; c--,r--) {
      if(placedQueens[c] == r) return false;
    }
    for(let c = column-1, r = row+1; c>-1 && r<n; c--,r++) {
      if(placedQueens[c] == r) return false;
    }

    return true;

  };

  nqueenRecurse(0);
  return ways;

};

console.log(nQueens(8));