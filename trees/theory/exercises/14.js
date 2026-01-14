class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "null"  
        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data.length <=0) return new TreeNode()
        const newArray = data.split(",")
        let index = 0


        function recursive(data){
            if(!data[index] || data[index]==="null") {
                index ++ 
                return null
            }

            let newRoot = new TreeNode()
            newRoot.val = Number(data[index])
            index++
            newRoot.left = recursive(data)
            newRoot.right = recursive(data)
            return newRoot
        }

        return recursive(newArray)
    }

    
}