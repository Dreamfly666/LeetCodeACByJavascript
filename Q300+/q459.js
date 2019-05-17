// 459.Repeated Substring Pattern
var repeatedSubstringPattern = function(s) {
    var reg = /^(\w+)\1+/
    // 重复多个补获组 
    return reg.test(s)
}

