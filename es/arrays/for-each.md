---
chapter: 6
pageNumber: 46
description: El método forEach ejecuta una función proporcionada una vez para cada elemento de la matriz.  
---
# For Each

El método `forEach` ejecuta una función proporcionada una vez para cada elemento de la matriz. Aquí está la sintaxis para usar `forEach`:

```javascript
array.forEach(function(elemento, indice, matriz) {
  // elemento: elemento actual que se está procesando en la matriz
  // indice: índice del elemento actual que se está procesando en la matriz
  // matriz: la matriz donde se invoca foreach 
});
```

Por ejemplo, digamos que tiene una serie de números y desea imprimir el doble de cada número en la consola. Podrías hacer esto usando `forEach` así:

```typescript
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero * 2);
});
```

También puedes usar la sintaxis de la función de flecha para definir la función pasada a `forEach`:

```typescript
numeros.forEach((numero) => {
  console.log(numero * 2);
});
```

o

```typescript
numeros.forEach(numero => console.log(numero * 2));
```

El método `forEach` no modifica la matriz original. Simplemente itera sobre los elementos de la matriz y ejecuta la función proporcionada para cada elemento.

{% hint style="warning" %}
El método `forEach()` no se ejecuta para la declaración vacía.
{% endhint %}
