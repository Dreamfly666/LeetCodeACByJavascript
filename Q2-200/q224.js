// 224 Basic Calculator

const tokensize = (s) => {
    const tokens = []
    let number = null
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
            case ")":
            case "+":
            case "-":
                if (number !== null) tokens.push(number)
                number = null
                tokens.push(s[i])
                break
            case " ":
                break
            default:
                number = number !== null ? number * 10 + parseInt(s[i]) : parseInt(s[i])
        }
    }
    if (number !== null) tokens.push(number)
    return tokens
}

const calculate = (s) => {
    const tokens = tokensize(s)
    const stack = []
    let result = 0
    let sign = 1
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        if (token === "(") {
            stack.push(result)
            stack.push(sign)
            result = 0
            sign = 1
        } else if (token === ")") {
            result = stack.pop() * result + stack.pop()
        } else if (token === '+') {
            sign = 1
        } else if (token === '-') {
            sign = -1
        } else if (typeof token === 'number') {
            result += sign * token
        }
    }
    return result
}
let s = "2-(2+3)"
console.log(calculate(s))