function countNumber(n) {
    if (typeof n !== 'number' && isNaN(n)) return
    const characters = String(n)


    function recursive(ch, count = 0) {
        if (ch[count] === undefined) {
            return count
        }
        return recursive(ch, count + 1)
    }
    return recursive(characters)
}


console.log(countNumber(12345))

