// Ejercicio 4: Wrapper de valor
// Diseña una interfaz genérica llamada Box que contenga una propiedad
// "value" de tipo genérico.Luego crea una función que tome un valor y lo envuelva en un Box.

interface IGenericos<T> {
    value: T
}

const fnNoGenerico = <T>(value: T): IGenericos<T> => {
    return { value }
}

const newTipo = fnNoGenerico('string')