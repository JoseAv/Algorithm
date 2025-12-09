/* Ejercicio 2: Primer elemento
   Escribe una función genérica que tome un
   array de cualquier tipo y devuelva el primer elemento.Si el array está vacío, debe devolver undefined.
*/

const fnGeneric = <T>(value: T[]): T[] | undefined => {
    return value.length ? value : undefined
}

fnGeneric(['abc'])
fnGeneric([])