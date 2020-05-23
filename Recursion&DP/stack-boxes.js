

const stackBoxes = (arr) => {
  let n = arr.length;
  if(n==1) return arr[0];

  const stackBoxesDp = (level) => {
    if(level == n-1) return arr[n-1];

    let stack = stackBoxesDp(level + 1);
    let currentBox = arr[level];

    if(currentBox.w > stack.w && currentBox.d > stack.d)
      return { w: currentBox.w, d: currentBox.d, h: currentBox.h+stack.h };

    return stack.h > currentBox.h ? stack : currentBox;  
  };

  return stackBoxesDp(0);
};

console.log(stackBoxes([{
  h: 10,
  w: 10, 
  d: 9
}, {
  h: 9,
  w: 8, 
  d: 9
}, {
  h: 8,
  w: 8, 
  d: 8
}, {
  h: 7,
  w: 7, 
  d: 7
}]).h);

