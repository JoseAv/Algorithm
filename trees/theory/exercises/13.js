  function  maxPathSum(root) {
        let sumTotal = -Infinity

    function recursive(root){
            if(!root) return 0

            let valueMid = root.val

            let valueLeft = recursive(root.left)  
            let valueRight = recursive(root.right)

            let leftToUse = Math.max(0, valueLeft)
            let rightToUse = Math.max(0, valueRight)

            let sum = valueMid + leftToUse + rightToUse

            let maxValueRoot = sum >= valueMid ? sum  : valueMid
            if(maxValueRoot > sumTotal){
                sumTotal = maxValueRoot
            }

            return valueMid + Math.max(0,valueLeft, valueRight)
        }
     recursive(root)
     return sumTotal
        
    }