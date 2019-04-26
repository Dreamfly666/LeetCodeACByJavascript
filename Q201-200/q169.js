// 169.Majority Element

var majorityElement = function(nums) {
    if( nums.length === 1) {
        return nums[0]
    } 
    let map = new Map()
    nums.forEach(num => {
        if(map.get(num)) {
            map.set(num,map.get(num) + 1)
        } else {
            map.set(num,1)
        }
    })
    let size = nums.length/2
    for(let key of map.keys()) {
        if(map.get(key) > size) {
            return key
        }
    }
}
// runtime 64ms beats 98.65% memory 37mb beats 100%
var majorityElement = function(nums) {
    'use strict'
    let map = {}
    if(nums.length === 1) return nums[0]
    for(var i=0;i<nums.length;i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        }
    }
    let size = nums.length/2
    for(var key in map) {
        if(map[key] > size) {
            return key
        }
    }
}
// runtime 68ms beats 87.37% memory 37.7m beats 33.01%
console.log(majorityElement([3,2,3]))