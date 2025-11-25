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

// Mejor Performance

function isPalindrome(s) {
    let left = 0
    let rigth = s.length - 1

    while (rigth > left) {
        console.log((/^[a-zA-Z0-9]+$/.test(s[left])))

        while (!(/^[a-zA-Z0-9]+$/.test(s[left]))) {
            left++
        }
        while (!(/^[a-zA-Z0-9]+$/.test(s[rigth]))) {
            rigth--
        }

        if (rigth < left) {
            return true
        }

        if (s[left].toLowerCase() !== s[rigth].toLowerCase()) {
            return false
        }
        rigth--
        left++
    }
    return true
}
