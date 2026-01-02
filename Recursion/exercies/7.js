function sumNumRecursive(n, total = 0) {
    if (n === 0) return total

    const sumNumber = n % 10
    total += sumNumber
    const reduceNumber = Math.floor(n / 10)
    return sumNumRecursive(reduceNumber, total)
}


console.log(1234 % 10)
console.log(Math.floor(1234 / 10))

console.log(sumNumRecursive(1234712302003004005))