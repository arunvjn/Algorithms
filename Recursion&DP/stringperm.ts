const stringPerm = s => {
  let len = s.length;

  const swap = (s, i, j) => {
    let sArr = s.split('');
    let temp = sArr[i];
    sArr[i] = sArr[j];
    sArr[j] = temp;
    return sArr.join('');
  };

  const stringPermRecurse = (s, idx) => {
    if(idx >= len) return console.log(s);
    for(let j=idx;j<len;j++) {
      let swappedString = swap(s, idx, j);
      stringPermRecurse(swappedString, idx+1);
    }
  };

  const insertCharAt = (s: string, char: string, index: number):string => {
    return s.substr(0, index) + char + s.substr(index);
  }

  const stringPermDP = (s: string):string[] => {
    let len = s.length;
    if(len==1) return [s];

    let perms:string[] = [];
    let first: string = s[0];
    let remainder: string = s.substr(1);
    let permsFromRemainder = stringPermDP(remainder);
    for(let perm of permsFromRemainder) {
      for(let i=0;i<=perm.length;i++) {
        perms.push(insertCharAt(perm, first, i));
      }
    }
    // console.log({ permsFromRemainder, perms });
    return perms;
  };

  return stringPermDP(s);

  // return stringPermRecurse(s, 0);

};

console.log(stringPerm("ABC"));
// stringPerm("ABC");