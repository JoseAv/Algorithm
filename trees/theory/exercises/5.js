function isSameTree(p, q) {
    let sameTree = true

    function recursive(p, q) {

        if (!p && !q) {
            return null
        }

        if (!p || !q) {
            sameTree = false
            return
        }

        if (p.val !== q.val) {
            sameTree = false
            return
        }

        recursive(p.left, q.left)
        recursive(p.right, q.right)
    }

    recursive(p, q)
    return sameTree
}