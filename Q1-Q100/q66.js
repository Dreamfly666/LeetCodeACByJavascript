// 66.Plus One
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            break
        } else {
            digits[i] = 0
        }
    }
    if (digits[0] === 0) digits.unshift(1)
    return digits
}
// runtime 60ms beats 76.16 memory 33.8m beats 30.53%
console.log(plusOne([1, 2, 3]))