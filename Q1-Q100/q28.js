// 28.Implement strStr()

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // if(!needle) return 0
    const slen = haystack.length
    const plen = needle.length
    if (slen == plen) return haystack == needle ? 0 : -1
    // <= notice
    for (let i = 0; i <= slen - plen; i++) {
        let j
        for (j = 0; j < plen; j++) {
            if (haystack[i + j] !== needle[j]) {
                break
            }
        }
        if (j == plen) return i
    }
    return -1
}
// runtime:64ms(beats 55.49%) memory 33.8m(beats66.37%)

console.log(strStr('mississippi', 'pi'))