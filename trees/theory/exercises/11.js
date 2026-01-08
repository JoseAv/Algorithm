   function kthSmallest(root, k) {
        let nodo = null
        let count = 0
    function recursive(root,k){
        if(!root || nodo) return

        recursive(root.left, k)

        count++
        if(count === k){
            nodo = root.val
        }

        recursive(root.right,k) 
    }
    recursive(root,k)
    return nodo

    }