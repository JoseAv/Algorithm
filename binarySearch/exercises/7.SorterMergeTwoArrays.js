function findMedianSortedArrays(nums1, nums2) {
    const maxArray = nums1.length >= nums2.length ? nums1 : nums2
    const minArray = nums1.length >= nums2.length ? nums2 : nums1
    const total_left = Math.floor((maxArray.length + minArray.length + 1) / 2)
    let rigth = minArray.length
    let left = 0


    while (rigth >= left) {
        let partition1 = Math.floor((rigth + left) / 2)
        let partition2 = total_left - partition1

        const maxLeft1 = partition1 > 0 ? minArray[partition1 - 1] : -Infinity
        const minRigth1 = partition1 < minArray.length ? minArray[partition1] : +Infinity
        const maxLeft2 = partition2 > 0 ? maxArray[partition2 - 1] : -Infinity
        const minRigth2 = partition2 < maxArray.length ? maxArray[partition2] : +Infinity


        if (maxLeft1 <= minRigth2 && maxLeft2 <= minRigth1) {

            if ((maxArray.length + minArray.length) % 2 !== 0) {
                return Math.max(maxLeft1, maxLeft2)
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRigth1, minRigth2)) / 2
            }

        } else if (maxLeft1 > minRigth2) {
            rigth = rigth - 1
        } else {

            left = left + 1
        }
    }


    return maxArray

}


const nums1 = [0, 0], nums2 = [0, 0]
console.log(findMedianSortedArrays(nums1, nums2))