class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0
        let y = 0
        let x = 0
        let count = 0
        let maxCount = 0
        const saveWord = new Set()
        while (y < s.length && x < s.length) {
            const xValue = s[x]
            const yValue = s[y]
            if (!saveWord.has(xValue)) {
                saveWord.add(xValue)
                count++
                if (count > maxCount) {
                    maxCount = count
                }
                x++
            } else {
                saveWord.delete(yValue)
                count--
                y++
            }
        }
        return maxCount
    }
}
