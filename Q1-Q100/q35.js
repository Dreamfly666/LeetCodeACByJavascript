// 35.Search Insert Position

var searchInsert = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
}
// runtime 60ms beats 68.66%  memroy 34.4m beats 21.16%
