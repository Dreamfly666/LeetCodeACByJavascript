// 02 Add Two Numbers
function ListNode(val){
    this.val = val
    this.next = null
}
/** 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1,l2){
    var dummy = new ListNode(0)
    var curr = dummy
    var p1 = l1,p2 =l2,carry =0
    while(p1 || p2 || carry > 0){
        var sum = carry
        if(p1){
            sum += p1.val
            p1 = p1.next
        }
        if(p2){
            sum += p2.val
            p2 = p2.next
        }
        var digit = sum % 10
        carry = Math.floor(sum/ 10)
        curr.next = new ListNode(digit)
        curr = curr.next
    }
    return dummy.next
}
// AC Runtime 140ms (beats 44%) Memory 38.3m
