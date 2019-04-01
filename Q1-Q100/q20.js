// 20 Valid Parentheses
/**
 * @param {string} s
 * @param {boolean}
 */
var isValid = function (s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i])
        } else {
            let last = stack.pop()

            if (map[last] + map[s[i]] !== 0) return false
        }
    }
    if (stack.length > 0) return false
    return true
}

// runtime 72ms(beats 41.3%) memory 33.7mb(beats 91.99%)
let s = '))'
console.log(isValid(s))