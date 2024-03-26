---
chapter: 6
pageNumber: 59 
description:  Para agregar un elemento al comienzo de una matriz podemos usar el método inverso. Modifica la matriz original y devuelve la nueva longitud de la matriz.
---
# Reverse

El método `reverse` se puede utilizar en cualquier tipo de matriz, incluidas matrices de cadenas, matrices de números y matrices de objetos. Por ejemplo.

```javascript
let usuarios = [{
  nombre: "John Smith",
  edad: 30
}, {
  nombre: "Jane Doe",
  edad: 25
}];

usuarios.reverse();

console.log(usuarios);

// RESULTADO: 
[{
  nombre: "Jane Doe",
  edad: 25
}, {
  nombre: "John Smith",
  edad: 30
}];
```

El método `reverse` transpone los elementos del objeto de matriz que llama en su lugar, mutando la matriz y devolviendo una referencia a la matriz.
A continuación se muestra un ejemplo del uso de `reverse` de una matriz:

```javascript
const numeros = [1, 2, 3];
const nuevaLongitud = numeros.reverse();
console.log(numeros); // [3, 2, 1]
```
