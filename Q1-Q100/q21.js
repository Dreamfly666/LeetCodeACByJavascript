// Merge Two Sorted Lists

function ListNode(val){
    this.val = val
    this.next = null
}
// recursion
var mergeTwoLists = function(l1,l2){
    if(l1 == null) return l2
    if(l2 == null) return l1

    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    } else{
        l2.next = mergeTwoLists(l1,l2.next)
        return  l2
    }
}
// runtime 84ms(beats 36.49) memory 35.5mb(beats 81.34)
