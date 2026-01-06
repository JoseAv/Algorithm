function diameterOfBinaryTree(root) {
    let max = -100
    function recursive(root) {
        if (!root) return 0

        const maxLeft = recursive(root.left)
        const maxRight = recursive(root.right)
        const sum = maxLeft + maxRight
        const prom = Math.max(maxLeft, maxRight)
        if (sum > max) {
            max = sum
        }
        return prom + 1

    }
    recursive(root)

    return max

}