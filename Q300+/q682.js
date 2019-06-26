// 682.Baseball Game
// stack
var calPoints = function (ops) {
    let result = []
    let pr1, pr2
    ops.forEach(item => {
        switch (item) {
            case "C":
                if (result.length) {
                    result.pop()
                }
                break
            case "D":
                pr1 = result.pop()
                result.push(pr1, pr1 * 2)
                break
            case "+":
                pr1 = result.pop()
                pr2 = result.pop()
                result.push(pr2, pr1, pr2 + pr1)
                break
            default:
                result.push(item * 1)
        }
    })
    return result.reduce((total, num) => {
        return total + num
    })
}

let arr = ["5", "-2", "4", "C", "D", "9", "+", "+"]
console.log(calPoints(arr))
