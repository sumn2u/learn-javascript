---
chapter: 6
pageNumber: 52  
description: El método map itera sobre una matriz y modifica su elemento mediante una retrollamada. Esta retrollamada se aplica a cada elemento de la matriz. 
---
# Map

El método `Array.prototype.map()` itera sobre una matriz y modifica sus elementos usando una función callback. Luego, la función callback se aplicará a cada elemento de la matriz.

Aquí está la sintaxis para usar `map`.

```javascript
let nuevaMatriz = viejaMatriz.map(function(elemento, indice, matriz) {
  // elemento: elemento actual que está siendo procesado en la matriz
  // indice: índice del elemento actual que está siendo procesado en la matriz
  // matriz: se invocó el mapa de matriz
  // Elemento de retorno que se agregará a nuevaMatriz
});
```

Por ejemplo, digamos que tiene una matriz de números y desea crear una nueva matriz que duplique los valores de los números en la matriz original. Podrías hacer esto usando un `map` como este.

```javascript
const numeros = [2, 4, 6, 8];

const numerosDoblados = numeros.map(numero => numero * 2);

console.log(numerosDoblados);

// Resultado: [4, 8, 12, 16]
```

También puede usar la sintaxis de función flecha para definir la función que se pasa a `map`.

```javascript
let doubledNumbers = numbers.map((number) => {
   return number * 2;
});
```
o

```typescript
let doubledNumbers = numbers.map(number => number * 2);
```

{% hint style="info" %}
El método `map()` no ejecuta la función para elementos vacíos y no cambia la matriz original.
{% endhint %}
