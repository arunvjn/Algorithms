var Steps = /** @class */ (function () {
    function Steps(n) {
        this.totalSteps = n;
    }
    Steps.prototype.getWays = function () {
        var noOfWays = [0, 1, 2, 3];
        for (var i = 4; i <= this.totalSteps; i++) {
            noOfWays[i] = noOfWays[i - 3] + noOfWays[i - 2] + noOfWays[i - 1];
        }
        return noOfWays[this.totalSteps];
    };
    return Steps;
}());
var steps = new Steps(4);
console.log(steps.getWays());
