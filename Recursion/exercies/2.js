const sumNums = (n) => {

    if (n === 1) {
        return 1
    }

    return n + sumNums(n - 1)
}


console.log(sumNums(5))
console.log(sumNums(3))
console.log(sumNums(10))
