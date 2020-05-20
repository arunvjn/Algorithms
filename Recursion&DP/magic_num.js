let magicNumber = (arr, start, end) => {
  if(start > end) return -1;
  let mid = Math.floor((start + end)/2);

  if(mid === arr[mid]) return mid;
  else if(mid < arr[mid]) return magicNumber(arr, start, mid - 1);
  else return magicNumber(arr, mid + 1, end);
};


let magicNumbersWithDupes = (arr, start, end) => {
  if(start > end) return -1;
  let mid = Math.floor((start + end)/2);

  if(mid === arr[mid]) return mid;
  let res = -1;
  // If A[5] is 3, A[4] should not be in the search space since A[4] <= A[5] i.e <= 3. We can reduce the space by the line below.
  let left = Math.min(mid-1, arr[mid]);
  res = magicNumbersWithDupes(arr, start, left);
  if(res > -1) return res;

  // Similarly if A[5] is 7, A[6] cannot be a magic number it cannot be less that 7, [7, end]
  let right = Math.max(mid+1, arr[mid]);
  res = magicNumbersWithDupes(arr, right, end);
  if(res > -1) return res;
  return res;
};

let arr = [-1,0,0,3,5,5, 5, 5, 7, 8];
console.log(magicNumbersWithDupes(arr, 0 , arr.length-1));