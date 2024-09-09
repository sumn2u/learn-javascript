---
chapter: 6
pageNumber: 55 
description: El método pop eliminan el último elemento de una matriz y devuelven el resultado. Este método cambia la longitud de la matriz.
---
# Pop

El método `pop` elimina el último elemento de una matriz y devuelve ese elemento. Este método cambia la longitud de la matriz.

Aquí está la sintaxis para usar `pop`:

```javascript
array.pop();
```

Por ejemplo:

```javascript
let matriz = ["uno", "dos", "tres", "cuatro", "cinco"]; 
matriz.pop(); 

console.log(matriz); 

// Resultado: ['uno', 'dos', 'tres', 'cuatro']
```

Puede también usar el método `pop` en conjunción con un bucle para eliminar todos los elementos de una matriz. Aquí tiene un ejemplo de cómo 
podría hacer esto:

```javascript
while (matriz.length > 0) {
  matriz.pop();
}

console.log(matriz); // Resultado: []
```

{% hint style="warning" %}
El método `pop` solo funciona en matrices, y no en otros objetos que sean similares a matrices, como objetos de argumentos u objetos NodeList. Si necesita extraer elementos de uno de estos tipos de objetos, primero deberá convertirlo en una matriz utilizando el método `Array.prototype.slice()`.

{% endhint %}
