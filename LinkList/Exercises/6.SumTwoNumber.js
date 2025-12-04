// Funciona pero no es lo pedido o necesario

function addTwoNumbers(l1, l2) {
    let list1String = ''
    let list2String = ''
    while (l1 || l2) {
        if (l1) {
            list1String = `${l1.val}` + list1String
            l1 = l1.next
        }
        if (l2) {
            list2String = `${l2.val}` + list2String
            l2 = l2.next
        }
    }

    let resultSum = (`${Number(list1String) + Number(list2String)}`).split('').reverse()

    let ResultNodo = new ListNode(resultSum[0])
    let response = ResultNodo
    for (let i = 1; i < resultSum.length; i++) {
        ResultNodo.next = new ListNode(resultSum[i])
        ResultNodo = ResultNodo.next
    }
    return response
}

// version recomendada echa por mi

function addTwoNumbers(l1, l2) {
    let resultSum = (l1.val + l2.val) % 10
    let carry = (l1.val + l2.val) >= 10 ? 1 : 0
    let nodoResult = new ListNode(resultSum)
    let iniNodoResult = nodoResult
    l1 = l1.next
    l2 = l2.next

    while (l1 || l2) {
        if (l1 && l2) {
            resultSum = (l1.val + l2.val + carry) % 10
            carry = (l1.val + l2.val + carry) >= 10 ? 1 : 0
            nodoResult.next = new ListNode(resultSum)
            l1 = l1.next
            l2 = l2.next
        } else if (l1) {
            resultSum = (l1.val + carry) % 10
            carry = (l1.val + carry) >= 10 ? 1 : 0
            nodoResult.next = new ListNode(resultSum)
            l1 = l1.next
        } else {
            resultSum = (l2.val + carry) % 10
            carry = (l2.val + carry) >= 10 ? 1 : 0
            nodoResult.next = new ListNode(resultSum)
            l2 = l2.next
        }
        nodoResult = nodoResult.next
    }

    if (carry > 0) {
        nodoResult.next = new ListNode(carry)
    }
    return iniNodoResult
}

// mejor version sin repeticion hecha por mi, con dummy y carry

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode()
    let tail = dummy
    let carry = 0

    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let resultSum = (val1 + val2 + carry) % 10
        carry = (val1 + val2 + carry) >= 10 ? 1 : 0
        tail.next = new ListNode(resultSum)
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        tail = tail.next
    }

    if (carry > 0) {
        tail.next = new ListNode(carry)
    }
    return dummy.next
}