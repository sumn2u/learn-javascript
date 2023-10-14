---
chapter: 6
pageNumber: 38 
description: Para agregar un elemento al comienzo de una matriz podemos usar el método unshift. Modifica la matriz original y devuelve la nueva longitud de la matriz.
---
# Unshift

El método `unshift` agrega nuevos elementos secuencialmente al inicio o al frente de la matriz. Modifica la matriz original y devuelve la nueva longitud de la matriz. Por ejemplo.

```javascript
let matriz = [0, 5, 10];
matriz.unshift(-5);  // 4

// RESULTADO: matriz = [-5 , 0, 5, 10];
```

{% hint style="warning" %}
El método `unshift()` sobrescribe la matriz original.
{% endhint %}

El método `unshift` toma uno o más argumentos, los cuales representan los elementos que van a ser agregados al principio de la matriz. Agrega los elementos en el orden en que se proporcionan, por lo que el primer elemento será el primer elemento de la matriz.

A continuación se muestra un ejemplo del uso de `unshift` para agregar varios elementos a una matriz:

```javascript
const numeros = [1, 2, 3];
const nuevaLongitud = numeros.unshift(-1, 0);
console.log(numeros); // [-1, 0, 1, 2, 3]
console.log(nuevaLongitud); // 5
```
