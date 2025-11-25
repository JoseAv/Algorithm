function twoSum(numbers, target) {
    let left = 0
    let rigth = numbers.length - 1

    while (left < rigth) {
        const result = numbers[left] + numbers[rigth]
        if (result === target)
            return [left + 1, rigth + 1]

        if (result > target) {
            rigth--
        } else {
            left++
        }
    }
}