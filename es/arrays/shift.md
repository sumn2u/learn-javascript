---
chapter: 6
pageNumber: 41  
description: El método shift elimina el primer elemento de índice de la matriz y mueve todos los índices hacia la izquierda. Modifica la matriz original.
---
# Shift

El método `shift` elimina el primer índice de esa matriz y mueve todos los índices hacia la izquierda. Cambia la matriz original. Aquí está la sintaxis para usar `shift`:

```javascript
array.shift();
```

Por ejemplo:

```javascript
let array = [1, 2, 3]; 
array.shift(); 

// Resultado: array = [2,3]
```

También puede utilizar el método `shift` junto con un bucle para eliminar todos los elementos de una matriz. A continuación se muestra un ejemplo de cómo podría hacer esto:

```javascript
while (array.length > 0) {
  array.shift();
}

console.log(array); // Resultado: []
```

{% hint style="warning" %}
El método `shift` solo funciona en matrices, y no en otros objetos que sean similares a matrices, como objetos de argumentos u objetos NodeList. Si necesita cambiar elementos de uno de estos tipos de objetos, primero deberá convertirlo en una matriz utilizando el método `Array.prototype.slice()`.{% endhint %}
