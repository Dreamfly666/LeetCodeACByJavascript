// 07 Rverse Integer 整数反转
// use array and toString way to solve this problem and is not the high-efficiency one
// split join parseInt combine ifelse

var reverse = function (x) {
    let num = 0
    let absX = Math.abs(x)
    let range = Math.pow(2, 31)
    let temp
    while (absX !== 0) {
        temp = absX % 10
        num = num * 10 + temp
        absX = Math.floor(absX / 10)
    }
    if (x > 0 && x < range && num < range) {
        return num
    } else if (x < 0 && x > -range - 1 && -num > -range - 1) {
        return num * -1
    } else {
        return 0
    }
}

// runtime 104ms beats 94.52% memory 35.2m beats 97.95%
// console.log(reverse(-Math.pow(2,31)))


var reverse1 = function(x) {
    let num = 0, tmp,absX = Math.abs(x),range = Math.pow(2,31)
    while(absX) {
        tmp = absX % 10
        num = num * 10 + tmp
        absX = Math.floor(absX/10)
    }
    if( x > 0 && x <= range-1 && num <= range-1) {
        return num
    } else if( x < 0 && x >= -range && -num >= -range) {
        return -num
    } else {
        return 0
    }
}
// 范围就是-range 到 range-1 
