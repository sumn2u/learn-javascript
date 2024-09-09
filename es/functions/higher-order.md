---
chapter: 8
pageNumber: 74
description: Las funciones de orden superior son funciones que manipulan otras funciones. Posee un poder considerable ya que permite la composición funcional, la abstracción y la capacidad de generar código que es versátil y fácilmente reutilizable.
---
# Funciones de orden superior

Las funciones de orden superior son funciones que manipulan otras funciones. Por ejemplo, una función puede tomar otras funciones como argumentos y/o producir una función como valor de retorno. Estas técnicas funcionales _elegantes_ son construcciones poderosas disponibles en JavaScript y otros lenguajes de alto nivel como python, lisp, etc.

Ahora crearemos dos funciones simples, `add_2` y `double`, y una función de orden superior llamada `map`. `map` aceptará dos argumentos, `func` y `list` (por lo tanto, su declaración comenzará con `map(func,list)`) y devolverá una matriz. `func` (el primer argumento) será una función que se aplicará a cada uno de los elementos de la matriz `list` (el segundo argumento).

```javascript
// Define dos funciones simples
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// map es una función interesante que acepta 2 argumentos:
//  func    la función a llamar
//  list    una matriz de valores para llamar a la función
let map = function (func, list) {
  let output = []; // lista de salida
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
};

// Usamos map para aplicar una función a una lista completa
// de entradas para "asignarlas" a una lista de salidas correspondientes
map(add_2, [5, 6, 7]); // => [7, 8, 9]
map(double, [5, 6, 7]); // => [10, 12, 14]
```

Las funciones del ejemplo anterior son simples. Sin embargo, cuando se pasan como argumentos a otras funciones, se pueden componer de formas imprevistas para construir funciones más complejas.

Por ejemplo, si notamos que utilizamos las invocaciones `map(add_2,...)` y `map(double,...)` muy a menudo en nuestro código, podríamos decidir que queremos crear dos listas de propósito especial. funciones de procesamiento que tienen incorporada la operación deseada. Usando la composición de funciones, podríamos hacer esto de la siguiente manera:

```javascript
process_add_2 = function (list) {
  return map(add_2, list);
};
process_double = function (list) {
  return map(double, list);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Ahora creemos una función llamada `buildProcessor` que toma una función `func` como entrada y devuelve un procesador `func`, es decir, una función que aplica `func` a cada entrada en la lista.

```javascript
// una función que genera un procesador de listas que realiza
let buildProcessor = function (func) {
  let process_func = function (list) {
    return map(func, list);
  };
  return process_func;
};
// llamar a buildProcessor devuelve una función que se llama con una entrada de lista

// usando buildProcessor podríamos generar los procesadores add_2 y de lista doble de la siguiente manera:
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Veamos otro ejemplo. Crearemos una función llamada `buildMultiplier` que toma un número `x` como entrada y devuelve una función que multiplica su argumento por `x`:

```javascript
let buildMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
};

let double = buildMultiplier(2);
let triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```
