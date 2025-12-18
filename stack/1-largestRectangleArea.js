function largestRectangleArea(heights) {
    let maxArea = 0
    const stack = []

    for (let rigth = 0; rigth < heights.length; rigth++) {
        stack.push(heights[rigth])
        let minheigth = heights[rigth]
        for (let left = stack.length - 1; left >= 0; left--) {
            if (stack[left] < minheigth) {
                minheigth = stack[left]
            }

            const size = rigth - left + 1
            const result = minheigth * size
            if (result > maxArea) {
                maxArea = result
            }
        }
    }
    return maxArea
}