// 17.
var letterCombinations = function (digits) {
    // 建立号码键盘映射
    let map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 一定要注意边界条件
    if(!digits.length) return []
    if(digits.length === 1) return map[digits].split('')
    // 将输入字符串按单字符分隔成数组 234 => [2,3,4]
    let num = digits.split('')
    // 保存键盘映射后的字符内容 234 => ['abc','def','ghi']
    let code = []

    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    })

    let comb = (arr) => {
        // 临时变量保存前两个组合运算结果
        let tmp = []
        // 最外层循环是遍历第一个元素，里面的循环是遍历第二个元素
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }   
        arr.splice(0, 2, tmp)
        // console.log(tmp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            // console.log(tmp)
            return tmp
        }
        return arr[0]
        // 想明白这个tmp到底是什么？
    }
    return comb(code)
}
// beats 96.52% 

let digits = '2'
console.log(letterCombinations(digits))
