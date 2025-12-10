// Ejercicio 10: Cache genérico
// Crea una clase genérica Cache que pueda almacenar valores de cualquier tipo usando strings como keys.Debe tener métodos para set, get y has.

class CacheGeneric<T>{
    saveData:Record<string, T>

    constructor(){
        this.saveData = {} 
    }


    set(key:string,data:T){
        this.saveData[key] = data 
    }

    get(key:string){
       return this.saveData[key]
    }

    has(key:string){
        return Object.hasOwn(this.saveData,key)
    }

}