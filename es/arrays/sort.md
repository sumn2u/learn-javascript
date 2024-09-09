---
chapter: 6
pageNumber: 60
description: El método sort ordena los elementos de una matriz en un orden específico. De forma predeterminada, clasifica los elementos como cadenas y los organiza en orden ascendente según sus valores de unidad de código UTF-16.  
---
# Sort

El método `sort` ordena los elementos de una matriz en un orden específico (ascendente o descendente). De forma predeterminada, el método `sort` ordena los elementos como cadenas y los organiza en orden ascendente según sus valores de unidad de código UTF-16.


Aquí está la sintaxis para usar `sort`:

```javascript
matriz.sort([funcionDeComparacion]);
```

El argumento `funcionDeComparacion` es opcional y especifica una función que define el orden de clasificación. Si se omite, los elementos se ordenan en orden ascendente según su representación en cadena.

Por ejemplo:

```javascript
let ciudades = ["California", "Barcelona", "Paris", "Kathmandu"];
let ciudadesOrdenadas = ciudades.sort(); 

console.log(ciudadesOrdenadas);

// Resultado: ['Barcelona', 'California', 'Kathmandu', 'Paris']

```

{% hint style="info" %}
Los números se pueden ordenar incorrectamente cuando se ordenan. Por ejemplo, "35" es mayor que "100", porque "3" es mayor que "1".
{% endhint %}

Para solucionar el problema de clasificación en números, se utilizan funciones de comparación. Las funciones de comparación definen el orden de clasificación y devuelven un valor **negativo**, **cero** o **positivo** según argumentos, como este:

* Un valor negativo si `a` debe ordenarse antes que `b`
* Un valor positivo si `a` debe ordenarse después de `b`
* `0` si `a` y `b` son iguales y su orden no importa

```javascript
const puntos = [40, 100, 1, 5, 25, 10];
puntos.sort((a, b) => {return a-b});

// Resultado: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
El método `sort()` anula la matriz original.
{% endhint %}
