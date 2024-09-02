---
chapter: 4
pageNumber: 36
---
# Split

El método split() divide una cadena en una lista de subcadenas y las devuelve como una matriz.

* usando el método `split()`
* usando el literal de plantilla (introducido en ES6)

El método split() tiene en cuenta:

* **Separador (opcional)** - El patrón (cadena o expresión regular) que describe dónde debería ocurrir cada división.
* **Límite (opcional)** - Un entero no negativo que limita el número de partes en las que se dividirá la cadena dada.

```javascript
console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const texto = "Java es asombroso. Java es divertido.";

let patron = ".";
let textoNuevo = texto.split(patron);
console.log(textoNuevo); // [ 'Java es asombroso', ' Java es divertido', '' ]

let patron1 = ".";
// solo divide la cadena al máximo en partes
let textoNuevo1 = texto.split(patron1, 2);
console.log(textoNuevo1); // [ 'Java es asombroso', ' Java es divertido' ]

const texto2 = "JavaScript ;  Python ;C;C++";
let patron2 = ";";
let textoNuevo2 = texto2.split(patron2);
console.log(textoNuevo2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// usando una expresión regular
let patron3 = /\s*(?:;|$)\s*/;
let textoNuevo3 = texto2.split(patron3);
console.log(textoNuevo3); // [ 'JavaScript', 'Python', 'C', 'C++' ]

//Output
[ 'A', 'B', 'C', 'D', 'E', 'F' ]
[ 'Java es asombroso', ' Java es divertido', '' ]
[ 'Java es asombroso', ' Java es divertido' ]
[ 'JavaScript ', '  Python ', 'C', 'C++' ]
[ 'JavaScript', 'Python', 'C', 'C++' ]
```
