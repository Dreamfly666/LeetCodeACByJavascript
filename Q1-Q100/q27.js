// 27.Remove Element

var removeElement = function(nums,val){
    if(nums.length === 0) return 0
    let cur = val,index = 0
    while(index < nums.length){
        if(cur === nums[index]){
            nums.splice(index,1)
        } else{
            index++
        }
    }
    return nums.length
}
let nums = [0,1,2,2,3,0,5]
// runtime 60ms(beats 56.5%) memory 33.8m(beats 30.14%)
// summary:for循环的时候，不能控制迭代操作index++,对于这种在循环中改变原数组的容易造成
// 遗漏元素，此时应该用while循环
console.log(removeElement(nums,2))