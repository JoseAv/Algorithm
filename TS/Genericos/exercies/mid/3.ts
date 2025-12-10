// Ejercicio 8: Transformación de objeto
// Crea una función genérica que tome un objeto y una función de transformación,
// y devuelva un nuevo objeto con los mismos keys pero con los valores transformados.

interface Ivalues {
    price: number
    nota: number
}

const newValues: Ivalues = { price: 200, nota: 100 }

const converfunction = <T extends object, U>(value: T, fnConvert: (data: T[keyof T]) => U) => {
    const result = {} as Record<keyof T, U>
    Object.entries(value).forEach(([key, val]) => {
        result[key as keyof T] = fnConvert(val);
    });
    return result
}

const fnConvert = (val: number): string => {
    return val.toString()
}

