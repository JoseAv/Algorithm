function maxArea(heights) {

    let i = 0
    let j = heights.length - 1
    let max = 0
    while (i < j) {
        const leftValue = heights[i]
        const rightValue = heights[j]
        const move = (j - i)
        if (leftValue <= rightValue) {
            const sum = leftValue * move
            if (sum > max) {
                max = sum
            }
            i++
        } else {
            const sum = rightValue * move
            if (sum > max) {
                console.log(rightValue)
                console.log(move)
                max = sum
            }
            j--
        }
    }
    return max
}

const height = [1, 7, 2, 5, 4, 7, 3, 6]

console.log(maxArea(height))