function isBalanced(root) {
    let currentBalanced = true

    function recursive(root) {
        if (!root) return [0]
        const maxLeft = recursive(root.left)
        const maxRight = recursive(root.right)

        let sum = maxLeft - maxRight
        if (sum > 1 || sum < -1) {
            currentBalanced = false
        }

        let prom = Math.max(maxLeft, maxRight)
        return prom + 1

    }
    recursive(root)

    return currentBalanced

}