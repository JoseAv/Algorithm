function checkInclusion(s1, s2) {

    const hashS1 = {}
    for (let values of s1) {
        hashS1[values] = (hashS1[values] || 0) + 1
    }

    const hashS2 = {}
    for (let i = 0; i < s1.length; i++) {
        hashS2[s2[i]] = (hashS2[s2[i]] || 0) + 1

    }

    let comprobation = comprobationValues(hashS1, hashS2)
    if (comprobation) return comprobation

    let left = 0
    let rigth = s1.length


    while (rigth < s2.length && left < s2.length) {
        hashS2[s2[rigth]] = (hashS2[s2[rigth]] || 0) + 1
        hashS2[s2[left]]--
        if (hashS2[s2[left]] <= 0) delete hashS2[s2[left]]

        const comprobation = comprobationValues(hashS1, hashS2)
        if (comprobation) return comprobation

        left++
        rigth++
    }

    return false
}

function comprobationValues(hashS1, hashS2) {
    let comprobation = true
    for (let [key, valueS1] of Object.entries(hashS1)) {
        let valueS2 = hashS2[key]

        if (!valueS2 || valueS2 !== valueS1) {
            return false
        }
    }
    return comprobation
}


const s1 = "abc", s2 = "lecabee"
console.log(checkInclusion(s1, s2))