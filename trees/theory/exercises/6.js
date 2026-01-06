function isSubtree(root, subRoot) {
    let sameTree = false

    function recursive(root, subRoot) {
        if (!root || !subRoot) {
            return
        }

        if (root.val === subRoot.val) {
            sameTree = true
            searchSame(root, subRoot)

            if (sameTree) {
                return
            }
        }

        recursive(root.left, subRoot)
        recursive(root.right, subRoot)


    }

    function searchSame(root, subRoot) {
        if (!root && !subRoot) {
            return
        }

        if (!root || !subRoot) {
            sameTree = false
            return
        }

        if (root.val !== subRoot.val) {
            sameTree = false
            return
        }

        searchSame(root.left, subRoot.left)
        searchSame(root.right, subRoot.right)
    }


    recursive(root, subRoot)

    return sameTree

}
