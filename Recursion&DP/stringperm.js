const stringPerm = s => {
  let len = s.length;

  swap = (s, i, j) => {
    let sArr = s.split('');
    let temp = sArr[i];
    sArr[i] = sArr[j];
    sArr[j] = temp;
    return sArr.join('');
  };

  stringPermRecurse = (s, idx) => {
    if(idx >= len) return console.log(s);
    for(let j=idx;j<len;j++) {
      let swappedString = swap(s, idx, j);
      stringPermRecurse(swappedString, idx+1);
    }
  };

  stringPermDP = (s):string[] => {
    let len = s.length;
    if(len)
  };

  return stringPermRecurse(s, 0);

};

stringPerm("ABC");