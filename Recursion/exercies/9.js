function recursive(n1, n2) {
    const max = n1 > n2 ? n1 : n2
    const min = n1 < n2 ? n1 : n2

    function MCD(n1, n2) {

        if (n2 <= 0) {
            return n1
        }

        return MCD(n2, (n1 % n2))

    }

    return MCD(max, min)


}

console.log(recursive(270, 192))