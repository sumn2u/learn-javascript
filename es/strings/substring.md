---
chapter: 4
pageNumber: 38
---
# Substring

`string.substring()` es una función incorporada en JavaScript que se utiliza para devolver la parte de la cadena dada desde el índice inicial hasta el índice final. La indexación comienza desde cero (0).

Sintaxis:

string.substring(indiceInicial, indiceFinal)

## Sintaxis

*str.substr(inicio , longitud)

* usando el método `substr()`
* usando el literal de plantilla (introducido en ES6)

El método substr() tiene en cuenta:

Parámetros: Aquí indiceInicial e indiceFinal describen la parte de la cadena que se tomará como subcadena. Aquí el indiceFinal es opcional.

Valor devuelto: Devuelve una cadena nueva que es parte de la cadena dada. El código de JavaScript que muestra el trabajo de la función string.substring():

```javascript
// Ejemplo 1:
// JavaScript para ilustrar el método substr()

const str = "GeeksforGeeks";
const result = str.substring(8);
console.log(result);



//Salida
'Geeks'

```

```javascript

// Ejemplo 2: 
// Tomamos una cadena y la troceamos
let string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2,5)
c = string.substring(2,9)

//Imprimiendo una nueva cadena que son
// la parte de la cadena dada
console.log(a);
console.log(b);
console.log(c);


//Salida
'geeksforgeeks'
'eks'
'eksforg'
```
