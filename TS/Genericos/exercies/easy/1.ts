/*
Ejercicio 1: Función de identidad
Crea una función genérica que reciba un valor de cualquier tipo y lo devuelva sin modificarlo. 
Debe funcionar con números, strings, objetos, etc.
*/

const identity = <T>(value: T): T => {
    return value
}
interface typeValue<T> {
    value: T
}

const value = identity<string>('hola')
const value2 = identity<number>(2)
const value3 = identity<typeValue<string>>({ value: 'hola' })

