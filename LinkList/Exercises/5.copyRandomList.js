function copyRandomList(head) {
    if (!head) {
        return head
    }

    let verifyRandoms = new Map()
    let copy = new Node(head.val)
    let current = head.next
    verifyRandoms.set(head, copy)
    let initCopy = copy
    while (current !== null) {
        copy.next = new Node(current.val)
        copy = copy.next
        verifyRandoms.set(current, copy)
        current = current.next
    }

    current = head
    copy = initCopy
    while (current !== null) {
        let randomCopy = verifyRandoms.get(current.random)
        copy.random = randomCopy
        copy = copy.next
        current = current.next
    }

    return initCopy

}