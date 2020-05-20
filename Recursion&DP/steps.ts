class Steps {
  totalSteps: number;
  constructor(n: number) {
    this.totalSteps = n;
  }
  getWaysRecursively() {
    let start: number = Date.now();
    let memo = {};
    const factory = (n: number) => {
      if(n<4) return n;
      if(memo[n]) return memo[n];
      memo[n] = factory(n-1) + factory(n-2) + factory(n-3);
      return memo[n];
    }
    return factory(this.totalSteps);
  }
  getWays() {
    let start: number = Date.now();
    let noOfWays: number[] = [0, 1, 2, 3];
    for(let i=4;i<=this.totalSteps;i++) {
      noOfWays[i] = noOfWays[i-3] + noOfWays[i-2] + noOfWays[i-1];
    }
    return noOfWays[this.totalSteps];
  }
}

const steps = new Steps(37);

console.log(steps.getWays());
console.log(steps.getWaysRecursively());



