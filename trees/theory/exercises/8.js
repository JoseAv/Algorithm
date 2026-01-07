function levelOrder(root) {
    if (!root) return []

    let arrayResult = [[root.val]]
    function recursive(root, count = 1) {
        if (!root) return

        recursive(root.left, count + 1)
        recursive(root.right, count + 1)

        if (root.left && root.right) {
            if (!arrayResult[count]) {
                arrayResult[count] = [root.left.val, root.right.val]
                return
            }
            arrayResult[count] = [...[arrayResult[count]], root.left.val, root.right.val]

        } else if (root.left || root.right) {
            let result = root.left ? root.left : root.right
            if (!arrayResult[count]) {
                arrayResult[count] = [result.val]
                return
            }
            arrayResult[count] = [...[arrayResult[count]], result.val]
        }

    }
    recursive(root)
    return arrayResult
}