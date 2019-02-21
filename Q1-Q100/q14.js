// Longest Common Prefix
var longestCommonPrefix1 = function (strs) {
    let commonPrefix = ''
    if (strs.length === 0) {
        return commonPrefix
    }
    let first = strs[0]
    for (let i = 0; i < first.length; i++) {
        let char = first[i]
        let startPos = i
        for (let k = 1; k < strs.length; k++) {
            if (!strs[k].startsWith(char, startPos)) return commonPrefix
        }
        commonPrefix = commonPrefix + char
    }
    return commonPrefix
}
let strs = ["f", "flaower", "flaow"]
// console.log(longestCommonPrefix1(strs))

var longestCommonPrefix = function (strs) {
    let ans = strs.length > 0 ? strs[0] : ''
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(ans)) {
            for (let j = 0; j < ans.length; j++) {
                if (ans[j] != strs[i][j]) {
                    ans = ans.slice(0, j)
                }
            }
        }
    }
    return ans
}
console.log(longestCommonPrefix(strs))