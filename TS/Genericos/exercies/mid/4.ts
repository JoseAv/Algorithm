// Ejercicio 9: Combinador de arrays
// Diseña una función genérica que tome dos arrays de tipos 
// potencialmente diferentes y los combine en un array de tuplas, emparejando elementos por índice.

const mergeArray = <T, U>(array1: T[], array2: U[]): [T, U][] => {
    const newArray: [T, U][] = []

    for (let i = 0; i < array1.length; i++) {
        const estructure: [T, U] = [array1[i], array2[i]]
        newArray.push(estructure)
    }


    return newArray
}

