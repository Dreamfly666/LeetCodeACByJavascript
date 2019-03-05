// 无重复的最长字串
// 03 Longest Substring Without Repeating Characters
// Given a string,find the length of the longest substring without repeating characters
var lengthOfLongestSubstring = function (s) {
    // 非重复子串的开始索引
    var start = 0
    var max = 0
    var visitedCharByPosition = {}
    for(var position =0;position < s.length;position++){
        var nextChar = s[position]
        // visitedCharByPosition[nextChar] >= start 
        if(nextChar in visitedCharByPosition && visitedCharByPosition[nextChar] >= start){
            start = visitedCharByPosition[nextChar] + 1
            visitedCharByPosition[nextChar] = position
        } else {
            visitedCharByPosition[nextChar] = position
            max = Math.max(max,position +1 - start)
        }
    }
    return max
}
let s = "vdvffv"
console.log(lengthOfLongestSubstring(s))

var lengthOfLongestSubstring1 = function (s) {
    let start = 0,max = 0,map = {}
    for(let i = 0;i < s.length;i++){
        let curChar = s[i]
        if(curChar in map && map[curChar] >= start ){
            start = map[curChar] + 1
            map[curChar] = i
        }else {
            map[curChar] = i
            max = Math.max(max,i+1-start)
        }
    }
    return max
}
console.log(lengthOfLongestSubstring1(s))
