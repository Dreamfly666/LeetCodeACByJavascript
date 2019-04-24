// 136.Single Number

var singleNumber = function(nums) {
    var a = 0
    for(let val of nums) a ^= val
    return a
}

console.log(singleNumber([5,5,1,1,5,3,3]))

// runtime 64ms beats 81.72% memory 36.8mb beats 43.59%i
