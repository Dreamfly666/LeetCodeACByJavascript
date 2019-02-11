// Two Sum
/** 
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 * 
*/
var twoSum = (nums,target) =>{  
    let map = {},res = [],i
    for(i=0;i<nums.length;i++){
        if(map.hasOwnProperty(nums[i])){
            res[0] = map[nums[i]]
            res[1] = i
        }
        map[target-nums[i]] = i
    }
    return res
}
console.log(twoSum([2,3,5],7))
