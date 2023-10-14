---
chapter: 6
pageNumber: 44
description: Las matrices tienen una propiedad llamada length que mide la longitud de una matriz. 
---
# Length

Las matrices tienen una propiedad llamada `length`, y es más o menos exactamente como suena, es la longitud de la matriz.

```javascript
let matriz = [1, 2, 3];

let l = matriz.length;

// Resultado: l = 3
```

La propiedad length también establece el número de elementos en la matriz. Por ejemplo.

```javascript
let frutas = ["Plátano", "Naranja", "Manzana", "Mango"];
frutas.length = 2;

console.log(frutas);
// Resultado: ['Plátano', 'Naranja']
```

También puede usar la propiedad `length` para obtener el último elemento de una matriz usándola como un índice. Por ejemplo:

```javascript
console.log(frutas[frutas.length - 1]); // Resultado: Naranja
```

Puede también usar la propiedad `length`para agregar elementos al final de una matriz. Por ejemplo:

```c
frutas[frutas.length] = "Piña";
console.log(frutas); // Resultado: ['Plátano', 'Naranja', 'Piña']
```

{% hint style="info" %}
La propiedad `length`se actualiza automáticamente cuando se agregan o eliminan elementos de la matriz.
{% endhint %}

También vale la pena señalar que la propiedad `length` no es un método, por lo que no es necesario utilizar paréntesis al acceder a ella. Es simplemente una propiedad del objeto Array a la que puede acceder como cualquier otra propiedad de objeto.
