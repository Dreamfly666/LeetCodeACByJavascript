// 155. Min Stack

var MinStack = function () {
    this.stack = []
    this.min = 0
    this.needCalc = true
}
MinStack.prototype.push(x) = function () {
    this.stack[this.stack.length] = x
    if (x < this.min) {
        this.min = x
    }
}
MinStack.prototype.pop = function () {
    if (this.stack[this.stack.length - 1] === this.min) {
        this.needCalc = !this.needCalc
    }
    this.stack.splice(this.stack.length - 1, 1)
}
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}
MinStack.prototype.getMin = function () {
    if (this.needCalc) {
        let s = this.stack
        this.min = s[0]
        for (var i = 1; i < s.length; i++) {
            if (s[i] < this.min) {
                this.min = s[i]
            }
        }
        this.needCalc = !this.needCalc
    }
    return this.min
}
// runtime 114ms beats 79.16% memory 44.4m beats 37.78%