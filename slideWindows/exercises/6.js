function maxSlidingWindow(nums, k) {
    let rigth = k - 1
    let left = 0
    const saveResult = []

    while (rigth < nums.length) {
        let temIndex = left
        let temMaxNumber = nums[temIndex]
        while (temIndex <= rigth) {
            if (nums[temIndex] > temMaxNumber) {
                temMaxNumber = nums[temIndex]
            }
            temIndex++
        }
        saveResult.push(temMaxNumber)
        left++
        rigth++
    }
    return saveResult
}


const nums = [1, 2, 1, 0, 4, 2, 6], k = 3

console.log(maxSlidingWindow(nums, k))