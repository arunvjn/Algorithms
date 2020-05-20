// {a1} => {}, {a1}
// {a1, a2} => {}, {a1}, {a2}, {a1, a2}
// {a1, a2, a3} => {}, {a1}, {a2}, {a1, a2}, {a3}, {a1, a3}, {a2, a3}, {a1, a2, a3}
// Subsets of a3 are all elements of a2 and a3 added to all elements of a2;
let findSubsets = (arr, index) => {
  if(index == arr.length) return [[]];

  let childSubsets = findSubsets(arr, index+1);

  let allSubsets = childSubsets.map(ss => ss.concat(arr[index]));

  allSubsets = allSubsets.concat(childSubsets);

  return allSubsets;
};


// 2 states for every element (included/excluded)
let findSubsets2 = (arr, index) => {
  let allSubsets = [];

  findSubsetsFactory = (arr, index, ss) => {
    if(index >= arr.length) { 
      return allSubsets.push(ss); 
    }
    findSubsetsFactory(arr, index+1, ss);
    findSubsetsFactory(arr, index+1, [...ss, arr[index]]);
  };

  findSubsetsFactory(arr, index, []);
  return allSubsets;
};




console.log(JSON.stringify(findSubsets2([1, 2, 3], 0)));