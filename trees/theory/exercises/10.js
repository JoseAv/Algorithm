   function isValidBST(root) {
        let result = true

    function recursive(root,min= -Infinity,max= +Infinity){

        if(!root ) return

        if(root.val<= min || root.val >= max){
            result = false
        }

        recursive(root.right,root.val,max)
        recursive(root.left,min,root.val)
    }

    recursive(root)
    return result

    }