let cache = {};

// This is wrong since the order of coins doesn't matter
const quaters = n => {
  if(n<0) return 0;
  if(n==0) return 1;
  if(cache[n]) return cache[n];

  let no25s = quaters(n-25);
  let no10s = quaters(n-10);
  let no5s = quaters(n-5);
  let no1s = quaters(n-1);
  
  cache[n] = no25s + no10s + no5s + no1s;
  return cache[n];
};

console.log(quaters(10));


//Correct solution
// amount/denom + 1 ways of picking each denomination.
const denoms = [25, 10, 5, 1];
const memo = {};
const makeCoins = (amount, coinIdx) => {
  if(coinIdx >= denoms.length-1) return 1;
  if(memo[`${amount}a${coinIdx}c`]) return memo[`${amount}a${coinIdx}c`];
  let denom = denoms[coinIdx];
  let ways = 0;
  for(let i=0; i*denom <= amount; i++) {
    ways+= makeCoins(amount - i*denom, coinIdx + 1);
  }
  memo[`${amount}a${coinIdx}c`] = ways;
  return ways;
};

console.log(makeCoins(10, 0));