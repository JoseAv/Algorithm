const pow = (x, n) => {

    if (n === 1) {
        return x
    }

    return x * pow(x, n - 1)

}


console.log(pow(2, 3))
console.log(pow(2, 6))
console.log(pow(8, 2))
console.log(pow(5, 5))


