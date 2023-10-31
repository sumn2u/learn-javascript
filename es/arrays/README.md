---
layout: editorial
chapter: 6
pageNumber: 36
description: Un array (matriz, en español) es una lista de datos y es parte fundamental de la programación. Aquí podemos almacenar una gran cantidad de datos de diferentes tipos.
---

# Capítulo 6

## Matrices

Las matrices son una parte fundamental de la programación. Una matriz es una lista de datos. Podemos almacenar una gran cantidad de datos en una variable, lo que hace que nuestro código sea más legible y más fácil de entender. También hace que sea mucho más fácil realizar funciones sobre datos relacionados.

Los datos de las matrices se denominan **elementos**.

Aquí hay una matriz simple:

```javascript
// 1, 1, 2, 3, 5, y 8 son los elementos en esta matriz
let numeros = [1, 1, 2, 3, 5, 8];
```

Las matrices se pueden crear fácilmente usando literales de matriz o con una palabra clave `new`.

```javascript
const coches = ["Saab", "Volvo", "BMW"]; // usando literales de matriz
const coches = new Array("Saab", "Volvo", "BMW"); // usando la palabra clave new
```

Se utiliza un número de índice para acceder a los valores de una matriz. El índice del primer elemento de una matriz es siempre `0`, ya que los índices de las matrices comienzan con `0`. El número de índice también se puede utilizar para cambiar los elementos de una matriz.


```javascript
const coches = ["Saab", "Volvo", "BMW"];
console.log(coches[0]); 
// Resultado: Saab

coches[0] = "Opel"; // cambiando el primer elemento de la matriz
console.log(coches);
// Resultado: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}
Las matrices son un tipo especial de objeto. Uno puede tener [objetos](../objects/) en una matriz.
{% endhint %}

La propiedad `length` de una matriz devuelve el recuento de elementos numéricos. Los métodos soportados por Array se muestran a continuación:

| Nombre            | Descripción                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | Devuelve dos o más matrices combinadas                                                                                                                  |
| `join()`          | Une todos los elementos de una matriz en una cadena                                                                                                     |
| `push()`          | Agrega uno o más elementos al final de la matriz y devuelve la longitud                                                                                 |
| `pop()`           | Elimina el último elemento de una matriz y devuelve ese elemento                                                                                        |
| `shift()`         | Elimina el primer elemento de una matriz y devuelve ese elemento                                                                                        |
| `unshift()`       | Agrega uno o más elementos al frente de una matriz y devuelve la longitud                                                                               |
| `slice()`         | Extrae la sección de una matriz y devuelve la nueva matriz.                                                                                             |
| `at()`            | Devuelve el elemento en el índice especificado o `undefined`                                                                                            |
| `splice()`        | Elimina elementos de una matriz y (opcionalmente) los reemplaza y devuelve la matriz                                                                    |
| `reverse()`       | Transpone los elementos de una matriz y devuelve una referencia a una matriz                                                                            |
| `flat()`          | Devuelve una nueva matriz con todos los elementos de la submatriz concatenados en ella de forma recursiva hasta la profundidad especificada             |
| `sort()`          | Ordena los elementos de una matriz en su lugar y devuelve una referencia a la matriz                                                                    |
| `indexOf()`       | Devuelve el índice de la primera coincidencia del elemento de búsqueda.                                                                                 |
| `lastIndexOf()`   | Devuelve el índice de la última coincidencia del elemento de búsqueda.                                                                                  |
| `forEach()`       | Ejecuta una devolución de llamada en cada elemento de una matriz y devuelve undefined                                                                   |
| `map()`           | Devuelve una nueva matriz con un valor de retorno al ejecutar `callback` en cada elemento de la matriz.                                                 |
| `flatMap()`       | Ejecuta `map()` seguido de `flat()` de profundidad 1                                                                                                    |
| `filter()`        | Devuelve una nueva matriz que contiene los elementos para los cuales `callback` devolvió `true`                                                         |
| `find()`          | Devuelve el primer elemento para el cual `callback` devolvió `true`                                                                                     |
| `findLast()`      | Devuelve el último elemento para el cual `callback` devolvió `true`                                                                                     |
| `findIndex()`     | Devuelve el índice del primer elemento para el cual `callback` devolvió `true`                                                                          |
| `findLastIndex()` | Devuelve el índice del último elemento para el cual `callback` devolvió `true`                                                                          |
| `every()`         | Devuelve `true` si `callback` devuelve `true` para cada elemento en la matriz                                                                           |
| `some()`          | Devuelve `true` si `callback` devuelve `true` para al menos un elemento en la matriz                                                                    |
| `reduce()`        | Usa `callback(acumulador, valorActual, indiceActual, matriz)` con el propósito de reducir y devuelve el valor final devuelto por la función `callback`  |
| `reduceRight()`   | Funciona de forma similar a `reduce()` pero comienza con el último elemento                                                                             |
