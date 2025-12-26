function findMin(nums) {
    let right = nums.length - 1
    let left = 0
    let result = Infinity
    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2)
        let valueMid = nums[mid]
        if (valueMid < result) {
            result = valueMid
        }

        if (valueMid > nums[right]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result
}   
