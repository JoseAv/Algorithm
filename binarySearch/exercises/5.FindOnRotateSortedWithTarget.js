function search(nums, target) {
    let right = nums.length - 1
    let left = 0
    while (right >= left) {



        let mid = Math.floor(left + (right - left) / 2)
        let valueMid = nums[mid]
        let valueLeft = nums[left]
        if (valueMid === target) {
            return mid
        }

        if (valueLeft <= valueMid) {

            if (valueLeft <= target && target <= valueMid) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        if (valueLeft > valueMid) {
            if (valueMid <= target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}

const nums = [5, 1, 3], target = 5



console.log(search(nums, target))