---
chapter: 4
pageNumber: 28
---
# Concatenación

La concatenación implica sumar dos o más cadenas, creando una cadena más grande que contiene los datos combinados de esas cadenas originales. La concatenación de una cadena agrega una o más cadenas a otra cadena. Esto se hace en JavaScript de las siguientes maneras.

* usando el operador  **`+`**  
* usando el método `concat()`  
* usando el método del objeto Array `join()`  
* usando el literal de plantilla (introducido en ES6)

El método de String `concat()` acepta la lista de cadenas como parámetros y devuelve una nueva cadena después de la concatenación, es decir, una combinación de todas las cadenas. Mientras que el método de Array `join()` se utiliza para concatenar todos los elementos presentes en una matriz convirtiéndolos en una sola cadena.

El literal de plantilla utiliza una comilla invertida `(``)` y proporciona una manera fácil de crear cadenas multilínea y realizar interpolación de cadenas. Se puede usar una expresión dentro de la comilla invertida usando el signo `$` y llaves `${expresión}`.

```javascript
const icon = '👋';
// usando literal de plantilla
`hi ${icon}`;

// usando el método join()
['hi', icon].join(' ');

// usando el método concat()
''.concat('hi ', icon);

//  usando el operador + 
'hi ' + icon;
// hi 👋
```
