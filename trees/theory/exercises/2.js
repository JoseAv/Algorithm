function maxDepth(root) {
    if (!root) return 0
    const maxLeft = this.maxDepth(root.left)
    const maxRight = this.maxDepth(root.right)
    const max = Math.max(maxLeft, maxRight)
    return max + 1
}