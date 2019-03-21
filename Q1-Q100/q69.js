/*
 * @Author: lishanpeng 
 * @Date: 2019-03-20 11:16:50 
 * @Last Modified by: lishanepng
 * @Last Modified time: 2019-03-21 11:14:51
 */
// 69.Sqrt(x)
var mySqrt = function (x) {
    let s = Math.sqrt(x)
    return Math.floor(s)
}
// runtime 80ms beats 86.65% memory 35.7m beats 41.07%
let s = mySqrt(8)

var mysqrt1 = function (x) {
    let i = 0
    while (i * i <= x) {
        i++
    }
    return i - 1
}
// runtime 104ms beats 27.06% memory 35.6m beats 42.86%
let res = mysqrt1(7)
console.log(res)

var mysqrt2 = function (x) {
    for (var i = 0;; i++) {
        if (i * i > x) {
            return i - 1
        }
    }
    return false
}