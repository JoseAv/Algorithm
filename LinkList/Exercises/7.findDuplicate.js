function findDuplicate(nums) {
    let fast = nums[0] // 1
    let slow = nums[0] // 1

    while (true) {

        fast = nums[nums[fast]] // 3 // 3 
        slow = nums[slow]       // 2 // 3
        if (fast === slow) {
            break
        }
    }

    slow = nums[0] // 1
    while (slow !== fast) {
        fast = nums[fast] //2
        slow = nums[slow] //2
    }
    return slow

}