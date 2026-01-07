function lowestCommonAncestor(root, p, q) {
    let result = null

    function recursive(root) {
        if (!root) return false

        const left = recursive(root.left)
        const right = recursive(root.right)

        let comprobateValues = root.val === p.val || root.val === q.val
        if ((left && right) || (comprobateValues && left) || (comprobateValues && right)) {
            result = root
            return false
        }

        return comprobateValues || left || right
    }

    recursive(root)
    return result

}