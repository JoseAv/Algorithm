function minEatingSpeed(piles, h) {

    let right = piles[0]
    let left = 0
    for (let banana of piles) {
        if (banana > right) {
            right = banana
        }
    }

    let result = null
    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2)

        let promK = 0
        for (let banana of piles) {
            let countTimeForBanana = Math.ceil(banana / mid)
            promK += countTimeForBanana
        }
        if (promK <= h) {
            if (!result || mid < result) {
                result = mid
            }
        }

        if (promK > h) {
            left = mid + 1
        }

        if (promK <= h) {
            right = mid - 1
        }
    }
    return result
}


const piles = [312884470], h = 312884469
// Expected output:2
console.log(minEatingSpeed(piles, h))