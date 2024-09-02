---
chapter: 6
pageNumber: 48
description: Las matrices son una colección de elementos y a cada elemento se le asigna una posición numérica llamada índice. Los índices están basados en cero, lo que significa que el primer elemento de la matriz tiene un índice de 0, el segundo tiene un índice de 1 y así sucesivamente.  
---
# Índices

Entonces tienes tu conjunto de elementos de datos, pero ¿qué pasa si quieres acceder a un elemento específico? Ahí es donde entran los índices. Un **índice** se refiere a un lugar en la matriz. Los índices progresan lógicamente uno por uno, pero cabe señalar que el primer índice de una matriz es `0`, como ocurre en la mayoría de los lenguajes. Los corchetes `[]` se utilizan para indicar que se está haciendo referencia a un índice de una matriz.

```javascript
// Esto es una matriz de cadenas
let frutas = ["manzana", "plátano", "piña", "fresa"];

// Establecemos la variable platano al valor del segundo elemento de
// la matriz de frutas. Recuerde que los índices comienzan en 0, por lo que 1 es el
// segundo elemento. Resultado: plátano = "plátano"
let platano = frutas[1];
```

También puede utilizar un índice de matriz para establecer el valor de un elemento en una matriz:

```javascript
let matriz = ['a', 'b', 'c', 'd', 'e'];
//  indices:   0    1    2    3    4
matriz[4] = 'f';
console.log(matriz); // Resultado: ['a', 'b', 'c', 'd', 'f']
```

Tenga en cuenta que si intenta acceder o configurar un elemento utilizando un índice que está fuera de los límites de la matriz (es decir, un índice menor que 0 o mayor o igual a la longitud de la matriz), obtendrá un valor `undefined`.

```javascript
console.log(matriz[5]); // Salida: undefined
matriz[5] = 'g';
console.log(matriz); // Resultado: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
