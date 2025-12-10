// Ejercicio 6: Intercambio de tupla
// Escribe una función genérica que tome una tupla de dos elementos y 
// devuelva una nueva tupla con los elementos intercambiados.

const newGenerics = <T, U>(values: [T, U]): [U, T] => {
    const [n1, n2] = values
    return [n2, n1]
}