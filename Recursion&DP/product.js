// Find product of 2 numbers without using * or / and using minimum operations

// 8*9 => 4*9 + 4*9 => 2*9 + 2*9 + 2*9 + 2*9 => 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 
// Use >> to achive divide by 2

let cache = {};
let productRecurseMemo = (small, big) => {
  if(small == 0) return 0;
  if(small == 1) return big;
  if(cache[small] !== undefined) return cache[small];
  var halfValue = product(small>>1, big);

  if(small % 2) {
    cache[small] = halfValue + product(small-(small>>1), big);
  } else {
    cache[small] = halfValue + halfValue;
  }
  return cache[small];
};

let productRecurse = (small, big) => {
  if(small == 0) return 0;
  if(small == 1) return big;

  var halfValue = product(small>>1, big);

  if(small % 2) {
    return halfValue + product(small-(small>>1), big);
  } else {
    return halfValue + halfValue;
  }

};

let productRecurseOptimal = (small, big) => {
  if(small == 0) return 0;
  else if(small == 1) return big;

  let halfValue = product(small >> 1, big);
  if(small%2 == 0) {
    return halfValue + halfValue;
  } else {
    return halfValue + halfValue + big;
  }
};

let product = (a, b) => {
  // Min is computed since it would reach 1/0 faster when >>1
  let min, max;
  min = a < b ? [a, max=b][0] : [b, max=a][0];
  return productRecurse(min, max);
};

console.log(product(5, 5));