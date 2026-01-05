function invertTree(root) {
    const head = root

    function recursive(root) {
        if (!root) {
            return
        }
        const left = root.left
        const right = root.right
        root.left = right
        root.right = left
        recursive(right)
        recursive(left)
    }
    recursive(root)

    return head
}