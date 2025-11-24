// Primer Intento

function isPalindrome(s) {
    const words = s.toLowerCase().split("").filter((e) => /^[a-zA-Z0-9]+$/.test(e)).join("")
    let lastIndex = words.length - 1

    for (let i = 0; i < words.length; i++) {
        if (lastIndex === i) {
            return true
        }
        const leftValue = words[i]
        const rigthValue = words[lastIndex]
        if (leftValue !== rigthValue) {
            return false
        }
        lastIndex--
    }
    return true
}