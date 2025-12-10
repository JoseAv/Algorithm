// Ejercicio 7: Filtro genérico
// Implementa una función genérica que reciba un array y
// una función de predicado, y devuelva un nuevo array solo con los elementos que cumplan el predicado.

const numbers = [1, 2, 3, 4, 5, 6, 7]
const fnFilter = <T>(values: T[], predic: (values: T) => boolean): T[] => {
    return values.filter(predic)
}

const predic = <T>(value: T): boolean => {
    if (typeof value === 'number') {
        return value > 3;
    }
    return false;
}

fnFilter<number>(numbers, predic)