   function goodNodes(root) {
        let count = 0

        function recursive (root,maxValue = -Infinity){
            if(!root)return

            if(root.val >= maxValue){
                count++
                maxValue = root.val
            }

            recursive(root.right, maxValue)
            recursive(root.left, maxValue)
        }

        recursive(root)
        return count

    }