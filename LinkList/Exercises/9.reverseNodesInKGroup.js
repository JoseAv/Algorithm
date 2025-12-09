class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let conteo = 0
        let current = head
        while (current) {
            current = current.next
            conteo++
        }
        if (conteo < k) return head
        return this.recursiveNode(head, conteo, k)

    }

    recursiveNode(NodeCurrent, conteo, k) {
        if (conteo < k) {
            return NodeCurrent
        }
        let saveNode = NodeCurrent
        let prev = null
        let tempIndex = k
        while (tempIndex > 0) {
            let saveNext = NodeCurrent.next
            NodeCurrent.next = prev
            prev = NodeCurrent
            NodeCurrent = saveNext
            tempIndex--
        }
        let saveInit = this.recursiveNode(NodeCurrent, (conteo - k), k)
        saveNode.next = saveInit

        return prev
    }
}