## Que son los Genericos? 

Son una forma de nosotros indicar que tipo debe de usar nuestra clase,funcion, objeto, etc... y este puede adopar diferentes interfaces o tipos, nosotros debemos de pasarlo para que el lo entienda y el se adecua a la interfas deseada. Esto nos permite reutilizar Codigo.

Ejemplo:

#### Funcion sin generico
``` javaScript
function getArrayItems:(items:any []): any [] {
return new Array().concat(items);
}
```

#### Funcion con Generico

``` javaScript
function getArray<T>(items: T[]) : T[] {
return new Array<T>().concat(items);
}
```

Resumen
- 1. getArray<T>: Aqui definimos el generico es decir indicamos que nombre tendra el generico Creado
- 2. con la T ahora a items va a ser un arreglo de ese tipo que indicamos
- 3. La tercera T indica el valor que vamos a devolver, un generico de tipo arreglo
- 4. La cuarta indicamos que vamos a crear un nuevo array del tipo T 

#### Como pasamos la interfaces o el tipa que queremos usar

Para hacer esto nada mas tenemos que utilizar <> y dentro el tipo

Ejemplo:

``` javaScript
const Genericos = getArray<string>(['Hola'])
```

#### Mas de un Generico

Podemos Utilizar mas de un generico en una funcion, clase,obj, etc...

Ejemplo:

``` javaScript
    function identity<T, U>(value: T, message: U): T{
        console.log(message)
        return value
    }
```

#### Metodos de los genericos

Cuando tenemos Genericos y queremos aplicarles algun metodo por ejemplo sumar, restar, pushear a un arreglo tipado, crear un objeto con un tipo en concreto de dato este ya que no sabe que valor tiene el generico entonces al no saber nos marcara error en alguna operacion que podamos usar

Ejemplo

``` javaScript
function identity<T, U> (value: T, message: U) : T{
let result: T = value + value; // Error
console.log(message);
return result
}
```

#### Limitar los tipos que puede tener un generico

Con el problema de las operaciones por ejemplo un '+' podemos indicar que tipo puede ser el generico y que extienda de el, el tipo T

Ejemplo: 

``` javaScript
const typeEjemplo = string | number
function identity<T extends typeEjemplo, U> (value: T, message: U) : T{
let result: T = value + value; // Error
console.log(message);
return result
}
```

pero como se puede ver esto aun nos daria un error este error se da ya que '+' actua diferente cuando es un string o cuando es number.

Ejemplo: 

``` javaScript
let newString = 'a' + 'a' // 'aa'
let newNumber = 1 + 1 // 2
```

Al no saber que posibilidad es entonces nos da el error.
Como solucionamos esto, indicando al js que tipo de operacion vamos a hacer utilizando typeof que nos permite saber que tipo de dato tenemos

Ejemplo: 

``` js
type Valid Types = string number
function identity<T extends ValidTypes, U> (value: T, message: U) {
let result: ValidTypes = ||
if (typeof value 'number') {
result = value + value // suma
} else if (typeof value = 'string') {
result = value + value // concatenación
}
console.log(message);
return result
}

```

El typeof solo sirve para tipos primitivos, function, boolean, symbol y object pero para las clases tenemos que usar el instanceof