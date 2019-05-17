// 89.Gray Code 格雷编码

var grayCode = function (n) {
    var changeBinaryToDec = function (arr) {
        return arr.map((item) => {
            return parseInt(item, 2)
        })
    }
    var getCode = function (n) {
        var grayCode = new Array(Math.pow(2, n))
        if (n === 0) return [0]
        if (n === 1) {
            grayCode[0] = "0"
            grayCode[1] = "1"
            return grayCode
        }
        var last = arguments.callee(n - 1)
        for (var i = 0; i < last.length; i++) {
            grayCode[i] = "0" + last[i]
            grayCode[grayCode.length - 1 - i] = "1" + last[i]
        }
        return grayCode
    }
    return changeBinaryToDec(getCode(n))
}
console.log(grayCode(3))

// runtime 60ms beats 72.89% memory 34.2m beats 25.26%
