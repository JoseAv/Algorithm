function reverseList(head) {
    if (!head) {
        return head
    }

    let current = head
    let prev = null
    while (current !== null) {
        let saveNext = current.next
        current.next = prev
        prev = current
        current = saveNext
    }
    return prev
}