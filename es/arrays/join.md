---
chapter: 6
pageNumber: 56
description: El método join convierte la matriz en una cadena y la une sin modificar la matriz original.  
---
# Join

El método `join` hace que una matriz se convierta en una cadena y lo une todo. No cambia la matriz original. Aquí está la sintaxis para usar `join`:

```javascript
matriz.join([separador]);
```

El argumento `separador` es opcional y especifica el carácter que se usa para separar los elementos en la cadena resultante. Si se omite, los 
elementos de la matriz son separados con una coma (`,`).

Por ejemplo:

```javascript
let matriz = ["uno", "dos", "tres", "cuatro"]; 

console.log(matriz.join(" ")); 

// Resultado: uno dos tres cuatro
```

{% hint style="warning" %}
Se puede especificar cualquier separador pero el predeterminado es una coma `(,)`.
{% endhint %}

En el ejemplo anterior, se utiliza un espacio como separador. También puedes usar `join` para convertir un objeto similar a una matriz (como un objeto de argumentos o un objeto NodeList) en una cadena convirtiéndolo primero en una matriz usando el método `Array.prototype.slice()`:

```javascript
function imprimirArgumentos() {
  console.log(Array.prototype.slice.call(argumentos).join(', '));
}

imprimirArgumentos('a', 'b', 'c'); // Resultado: "a, b, c"
```
