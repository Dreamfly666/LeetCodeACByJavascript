// Two Sum
/** 
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 * 
 */

var twoSum = (nums, target) => {
    let map = {},
        res = [],
        i
    for (i = 0; i < nums.length; i++) {
        //  不能使用map[nums[i]] 因为可能是0 那么也是false
        if (map.hasOwnProperty(nums[i])) {
            res[0] = map[nums[i]]
            res[1] = i
        }
        map[target - nums[i]] = i
    }
    return res
}
// 时间复杂度 O(n)
// runtime: 68ms beat 83%  memory:37mb beat 5.44%


var twoSum1 = (nums, target) => {
    for (var i = 0; i < nums.length; i++) {
        // 得到满足条件的目标值
        var dif = target - nums[i]
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] === dif) {
                return [i, j]
            }
        }
        return false
    }
}
var data = [ 1,2,3]

// 时间复杂度：O(n^2）
//  runtime 116ms beat 56.21%  memory 35.1mb beat 21.76%
console.log(twoSum1([1, 2], 35))

