
function trap(height) {
    let left = 0
    let maxArea = 0
    while (height[left] <= 0 && left < height.length) {
        left++
    }

    while (left < height.length) {
        let rigth = left + 1
        while (height[rigth] < height[left] && rigth < height.length) {
            rigth++
        }

        if (height[left] <= height[rigth]) {
            let tempIndex = left + 1
            while (tempIndex < rigth) {
                let sumArea = height[left] - height[tempIndex]
                maxArea += sumArea
                tempIndex++
            }
            left = rigth
        } else {
            rigth = height.length - 1
            let tempIndex = rigth - 1
            while (tempIndex > left) {
                let sumArea = height[rigth] - height[tempIndex]
                if (sumArea >= 0) {
                    maxArea += sumArea
                } else {
                    rigth = tempIndex
                }

                tempIndex--
            }
            return maxArea
        }
    }
    return maxArea
}

