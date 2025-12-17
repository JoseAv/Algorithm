function characterReplacement(s, k) {
    let rigth = 0
    let left = 0
    let maxCount = 0
    let saveValues = {}


    while (rigth < s.length && left < s.length) {

        if (saveValues[s[rigth]]) {
            saveValues[s[rigth]]++
        } else {
            saveValues[s[rigth]] = 1
        }

        // esto debe hacerse asi porque al hacer ... dentro de una funcion toma todos los argumentos del array de esta forma 1,2,3,4 como valores separados
        // pero si solo dejamos el array pasara que cuando tiene un valor lo intenera converir a string y luego a number por eso al principio funciona
        // pero despues da nan ya que mas de 2 valores lo toma como  '1,2' y esto a number da nan pero '1' aunque este en un arreglo da 1
        let max_frequency = Math.max(...Object.values(saveValues))
        let result = (rigth - left + 1) - max_frequency <= k ? true : false
        if (!result) {
            while (!result) {
                saveValues[s[left]]--
                max_frequency = Math.max(...Object.values(saveValues))
                left++
                result = (rigth - left + 1) - max_frequency <= k ? true : false
            }
        }
        let tempCount = (rigth - left + 1)
        if (maxCount < tempCount) {
            maxCount = tempCount
        }
        rigth++
    }
    return maxCount

}


const s = "AAABABB", k = 1

console.log(characterReplacement(s, k))

console.log(Math.max([1]))
console.log(Number(['1.3', '1.2']))
console.log(...[1, 2, 3])