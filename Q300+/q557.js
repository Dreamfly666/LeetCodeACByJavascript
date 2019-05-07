// 557.Reverse Words in a String III

let  reverseWords = function(s) {
    return s.split(' ').map(item => {
        return item.split('').reverse().jion('')
    }).jion(' ')
}

// runtime 72ms beats 100% memory 42.1m beats 48.53%
