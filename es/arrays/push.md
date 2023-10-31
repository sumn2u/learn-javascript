---
chapter: 6
pageNumber: 45 
description: El método push agrega elementos en una matriz haciendo que el último índice sea el elemento recién agregado. Este método cambia la longitud de la matriz y devuelve una nueva longitud. 
---
# Push

Se pueden insertar ciertos elementos en una matriz haciendo que el último índice sea el elemento recién agregado. Cambia la longitud de una matriz y devuelve una nueva longitud.

Aquí está la sintaxis para usar `push`:

```javascript
matriz.push(elemento1[, ...[, elementoN]]);
```

Los argumentos  `elemento1, ..., elementoN` representan los elementos que serán agregados al final de la matriz.

Por ejemplo:

```javascript
let matriz = [1, 2, 3]; 
matriz.push(4); 

console.log(matriz); 

// Resultado: matriz = [1, 2, 3, 4]
```

También puede usar `push` para agregar elementos al final de un objeto similar a una matriz (como un objeto de argumentos o un objeto NodeList) convirtiéndolo primero en una matriz usando el método `Array.prototype.slice()`:

```javascript
function imprimirArgumentos() {
  let args = Array.prototype.slice.call(argumentos);
  args.push('d', 'e', 'f');
  console.log(args);
}

imprimirArgumentos('a', 'b', 'c'); // Resultado: ["a", "b", "c", "d", "e", "f"]
```

> **Nota**: El método `push`modifica la matriz original. No crea una nueva matriz.
