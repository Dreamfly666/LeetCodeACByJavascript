// 58.Length of Last Word

var lengthOfLastWord = function (s) {
    let arr = s.trim().split(' ')
    return arr[arr.length - 1].length
}
// runtime 56ms beats 78.16% memory 33.7m beats 66.94%
let re = lengthOfLastWord('hello world')

console.log(re)


