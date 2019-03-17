// 69.Sqrt(x)
var mySqrt = function(x){
    let s = Math.sqrt(x)
    return Math.floor(s)
}
// runtime 80ms beats 86.65% memory 35.7m beats 41.07%
let s = mySqrt(8)
console.log(s)