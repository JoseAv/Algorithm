function minWindow(s, t) {
    const countTotal = t.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    let result = ''
    for (let i = 0; i < s.length; i++) {
        const value = s[i]
        if (value in countTotal) {
            let j = i
            const tempCountTotal = { ...countTotal }
            let temArray = ''
            let sum = false
            while (j < s.length && sum === false) {

                const tempWords = s[j]
                if (tempCountTotal[tempWords]) {
                    tempCountTotal[tempWords]--
                }

                sum = Math.max(...Object.values(tempCountTotal)) <= 0
                temArray += tempWords
                j++
            }
            if (sum && (!result || temArray.length < result.length)) {
                result = temArray
            }
        }

    }

    return result
}

// const s = "x", t = "xy"
// console.log(minWindow(s, t))


// Mi forma funciona pero no es un slide windows optimizado, esta es la forma mas optimizada

function minWindow(s, t) {
    const need = t.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    const comprobate = {}
    let result = [Infinity, 0, 0]
    let right = 0
    let left = 0
    let countFormed = 0
    const requied = Object.keys(need).length
    while (right < s.length) {
        const valueRight = s[right]
        comprobate[valueRight] = (comprobate[valueRight] || 0) + 1

        if (need[valueRight] && need[valueRight] === comprobate[valueRight]) {
            countFormed++
        }

        while (left <= right && countFormed === requied) {
            const valueLeft = s[left]
            const moved = right - left + 1
            if (result[0] > moved) {
                result = [moved, left, right]
            }

            comprobate[valueLeft]--
            left++
            if (need[valueLeft] && comprobate[valueLeft] < need[valueLeft]) {
                countFormed--
            }
        }

        right++
    }
    return result[0] === Infinity ? '' : s.substring(result[1], result[2] + 1)
}


const s = "aaaaaaaaaaaabbbbbcdd", t = "abcdd"
console.log(minWindow(s, t))