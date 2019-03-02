// 28.Implement strStr()

var strStr = function(haystack,needle){
    // if(!needle) return 0
    return haystack.indexOf(needle)
}
// runtime:56ms(beats 77.4%) memory 33.7m(beats84.96%)

console.log(strStr('hello',''))
