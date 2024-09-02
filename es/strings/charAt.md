---
chapter: 4
pageNumber: 37
---
# CharAt

El método `str.charAt()` devuelve el carácter en el índice dado del índice de cadena que mantiene la posición del elemento de la matriz.

* usando el método `charAt()`
* usando el literal de plantilla (introducido en ES6)

El método charAt() tiene en cuenta:

* **Argumentos**: El único argumento en esta función es el índice en la cadena de donde se extraerá el carácter único.
* **Índice**: El rango de este índice está entre 0 y longitud - 1. Si no se especifica el índice entonces se devuelve el primer carácter de la cadena ya que el índice usado por defecto para esta función es 0.
* **Valor de Retorno**: Devuelve un único carácter localizado en el índice especificado como el argumento de la función. Si el índice está fuera de rango, esta función devolverá una cadena vacía.

```javascript
//Ejemplo 1:
function func() {
    // Cadena original
    let str = 'JavaScript es un lenguaje orientado a objetos';

    // Encontrando el carácter en el índice dado
    let value = str.charAt(0);
    let value1 = str.charAt(4);
    console.log(value);
    console.log(value1);
}
func();

//Salida
j
s

//Ejemplo 2: 
function func() {

    // Original string
    let str = 'JavaScript es un lenguaje orientado a objetos';

    // Finding the character at given index
    let value = str.charAt(9);
    console.log(value);
}
func();


//Output
t
```
