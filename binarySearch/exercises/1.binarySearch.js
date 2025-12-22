function search(nums, target) {
    let right = nums.length - 1
    let left = 0
    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        let valueMid = nums[mid]

        if (valueMid === target) {
            return mid
        }


        if (valueMid < target) {
            left = mid + 1
        }

        if (valueMid > target) {
            right = mid - 1
        }
    }
    return -1
}