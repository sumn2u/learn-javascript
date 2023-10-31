---
chapter: 19
pageNumber: 95
description: Currying es una técnica avanzada en programación funcional para transformar una función con múltiples argumentos en una secuencia de funciones anidadas. Transforma una función invocable como f(a,b,c) a invocable como f(a)(b)(c). No llama a una función, sino que la transforma.
---
# Currying

`Currying` es una técnica avanzada en programación funcional para transformar una función con múltiples argumentos en una secuencia de funciones anidadas. Transforma una función invocable como `f(a,b,c)` a invocable como `f(a)(b)(c)`. No llama a una función, sino que la transforma.

Para comprender mejor la técnica del currying, creemos una función simple `agregar` que toma tres argumentos y devuelve la suma de ellos. Luego, creamos una función `agregarCurry` que toma una única entrada y devuelve una serie de funciones con su suma.

```javascript
// Versión normal
const agregar = (a, b, c)=>{
    return a+ b + c
}
console.log(agregar(2, 3, 5)) // 10

// Versión cambiada con la técnica de currying
const agregarCurry = (a) => {
    return (b)=>{
        return (c)=>{
            return a + b + c
        }
    }
}
console.log(agregarCurry(2)(3)(5)) // 10
```

Aquí podemos ver que tanto la versión con curry como la sin curry arrojaron el mismo resultado. El curry puede ser beneficioso por muchas razones, algunas de las cuales se mencionan aquí.

* Ayuda a evitar pasar la misma variable una y otra vez.
* Divide la función en partes más pequeñas con una única responsabilidad, lo que hace que la función sea menos propensa a errores.
* Se utiliza en programación funcional para crear una función de alto orden.
