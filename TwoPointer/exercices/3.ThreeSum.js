function threeSum(nums) {
    const orderArray = nums.sort((a, b) => a - b)
    const combination = {}
    const result = []
    let i = 0

    while (i < orderArray.length) {
        let j = i + 1
        let k = nums.length - 1
        if (j === k) {
            return result
        }
        while (j < k) {
            const sum = orderArray[i] + orderArray[j] + orderArray[k]
            if (sum === 0) {
                const key = `${orderArray[i]}${orderArray[j]}${orderArray[k]}`
                if (!combination[key]) {
                    combination[key] = key
                    result.push([orderArray[i], orderArray[j], orderArray[k]])
                }
                j++
                k--
            }

            if (sum < 0) {
                j++
            }
            if (sum > 0) {
                k--
            }
        }
        i++
    }
    return result
}
