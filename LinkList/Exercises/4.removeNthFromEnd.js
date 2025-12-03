function removeNthFromEnd(head, n) {
    if (!head || !head.next) {
        return null
    }

    let fast = head
    let slow = head
    let prev = null
    while (fast) {
        if (n <= 0) {
            prev = slow
            slow = slow.next
        }
        n--
        fast = fast.next
    }
    if (!prev) {
        head = head.next
        return head
    }
    prev.next = slow.next
    return head
}