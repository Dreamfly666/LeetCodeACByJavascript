// 09 alindrome Number

/**
 * @param {number} x
 * @param {boolean}
 */
var isPalindrome1 = function(x) {
    if(x < 0) return false
    let absX = Math.abs(x),temp,nums = 0
    while(absX){
        temp = absX % 10
        nums  = nums * 10 + temp
        absX = Math.floor(absX / 10)
    }
    console.log(nums)
    if(nums === x) return true
    return false
}
// runtime 352ms(beats 8.3%) memory 47.8m (beats 100%)


//
/**
 * @param {number} x
 * @param {boolean}
 */
var isPalindrome2 = function(x){
    let str = x + ''
    let left = 0,right = str.length - 1
    while(left < right){
        if(str[left] != str[right]) return false
        left++
        right--
    }
    return true
}
// runtime 276ms(beats 40.25%) memory 45.7m(beats 100%)
let x = 2222


