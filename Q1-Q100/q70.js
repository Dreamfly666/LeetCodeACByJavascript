// 70.Climbing Stairs
/** 
 * @param {number} n
 * @return  {number}
*/
var climbStairs = function(n){
    if (n === 1) return 1;
    if (n === 2) return 2;
    let afterOneStep = 2,
        afterTwoSteps = 1,
        current;
    for (let i = 2; i < n; i++) {
        current = afterOneStep + afterTwoSteps;
        afterTwoSteps = afterOneStep;
        afterOneStep = current;
    }
    return current;
}

console.log(climbStairs(10))