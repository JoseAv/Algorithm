class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const newValue = this.keyStore.get(key) ? this.keyStore.get(key) : []
        this.keyStore.set(key, [...newValue, [value, timestamp]])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = ''
        const arrayKey = this.keyStore.get(key)
        if (!arrayKey) {
            return result
        }

        let right = arrayKey.length - 1
        let left = 0
        while (right >= left) {
            const mid = Math.floor(left + (right - left) / 2)
            const [value, time] = arrayKey[mid]
            if (time <= timestamp) {
                result = value
            }

            if (timestamp >= time) {
                left = mid + 1
            }

            if (timestamp < time) {
                right = mid - 1
            }
        }
        return result
    }
}