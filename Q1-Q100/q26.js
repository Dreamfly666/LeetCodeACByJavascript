// 26.Remove Duplicate from Sorted Array 
// do not allocate extra space for another array,you must do this by modifying the 
// the input arrary with O(1) extra memory
/**
 * @param {number[]} nums
 * @param {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return nums.length
    let cur = nums[0]
    let index = 1
    while (index < nums.length) {
        if (cur != nums[index]) {
            cur = nums[index]
            index++
        } else {
            nums.splice(index, 1)
        }
    }
    return nums.length
}


// runtime 104ms(beats 49.3%)  memory  37.5m(beats 16.9%)
let arr = [0, 0, 1, 1, 2]
console.log(removeDuplicates(arr))

