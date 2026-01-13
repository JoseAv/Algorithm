class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        function recursive(prevStart,prevEnd,inoStart,inoEnd){

            // alguno de los 2 vacios
            if(prevStart > prevEnd || inoStart > inoEnd) return null

            // obtenemos el valor mid
            let preOrderMidValue = preorder[prevStart]
            // buscamos ese valor en el index para dividir
            const indexMidIno = inorder.indexOf(preOrderMidValue)
            // creamos nuevo Tree
            const newRoot = new  TreeNode(preOrderMidValue)
            // Sacamos la parte izquierda de inorder
            const leftSize = indexMidIno - inoStart;

            // Calculamos, si se va a la izquierda, mid sera a prevStart+1
            // ahora su parte izquierda es todos los valores que tiene mas prevStart
            // y la parte izquiera de ino es, desde el inicio hasta mitad - 1
            newRoot.left = recursive((prevStart + 1),(prevStart + leftSize),inoStart ,indexMidIno-1)

            // si nos vamos a la derecha es desde el inicio + cantidad de lado izquierdo + 1
            // hasta donde definie prevEnd
            // y el lado derecho de ino es medio +1 hasta donde estaba declarado al inicio
            newRoot.right = recursive((prevStart + leftSize+1),prevEnd,indexMidIno+1,inoEnd)

            return newRoot
        }

    return recursive(0,preorder.length - 1,0,inorder.length - 1)

    }
}


