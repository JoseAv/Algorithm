// Ejercicio 3: Par de valores
// Crea una función genérica que acepte dos valores de cualquier tipo(pueden ser diferentes entre sí) y los devuelva como una tupla.

const newGenericos = <T, U>(value: T, value2: U): [T, U] => {
    return [value, value2]
}
// Esto crea una tupla [T,U] -> solo puede recibir 2 elementos
// Esto un array de 2 tipos (T | U)[]
// Esto es un array de un tipo o de otro T[] | U[] pero no los 2

