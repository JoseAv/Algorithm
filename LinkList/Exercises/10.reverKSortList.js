class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null
        }
        let saveList = lists[0]

        for (let i = 1; i < lists.length; i++) {
            saveList = this.reverseList(saveList, lists[i])
        }

        return saveList

    }

    reverseList(list1, list2) {
        if (!list1 || !list2) {
            return list1 ? list1 : list2
        }

        let dummy = new ListNode
        let tail = dummy

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1
                list1 = list1.next
                tail = tail.next
            } else {
                tail.next = list2
                list2 = list2.next
                tail = tail.next

            }
        }
        if (list1) {
            tail.next = list1
        } else {
            tail.next = list2
        }

        return dummy.next

    }


}