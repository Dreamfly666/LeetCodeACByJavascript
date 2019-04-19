// 83.Remove Duplicates from Sorted List

function ListNode(val) {
    this.val = val
    this.next = null
}
var deleteDuplicates = function (head) {
    if (!head) return head
    if (head && !head.next) return head
    let currentNode = head
    deleteDuplicates(currentNode.next)
    if (currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next
    }
    return currentNode
}
// runtime 80ms beats 46.75% memory 35.5m beats 84.51%
i