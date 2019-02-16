// Rverse Integer
// use array and toString way to solve this problem and is not the high-efficiency one
// split join parseInt combine ifelse

var reverse = function (x) {
    let num = 0
    let absX = Math.abs(x)
    let range = Math.pow(2,31)
    let temp
    while(absX !==0){
        temp = absX % 10
        num = num*10 + temp
        absX = Math.floor(absX/10)
    }
if(x > 0 && x < range && num < range){
    return num
} else if(x < 0 && x > -range-1 && -num > -range-1){
    return num * -1
}else {
    return 0
}
}
console.log(reverse(-Math.pow(2,31)))
var reverse1 = function(x){
    
}