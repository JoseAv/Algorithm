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

const s = "x", t = "xy"
console.log(minWindow(s, t))