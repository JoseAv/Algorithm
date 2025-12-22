function searchMatrix(matrix, target) {
    let right = matrix.length - 1
    let left = 0

    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2)
        let midRigth = matrix[mid].length - 1
        let midLeft = 0

        let midRigthValue = matrix[mid][midRigth]
        let midLeftValue = matrix[mid][midLeft]

        if (target <= midRigthValue && target >= midLeftValue) {
            while (midRigth >= midLeft) {
                let midMid = midLeft + Math.floor((midRigth - midLeft) / 2)
                let midValue = matrix[mid][midMid];

                if (midValue === target) {
                    return true
                }

                if (midValue > target) {
                    midRigth = midMid - 1
                }

                if (midValue < target) {
                    midLeft = midMid + 1
                }
            }
        }

        if (target <= midRigthValue) {
            right = mid - 1
        }

        if (target >= midLeftValue) {
            left = mid + 1
        }

    }

    return false
}


const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3

console.log(searchMatrix(matrix, target))