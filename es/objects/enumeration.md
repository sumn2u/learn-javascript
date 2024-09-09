---
chapter: 9
pageNumber: 100
description: La enumeración se refiere al proceso de iterar sobre las propiedades de un objeto y realizar una determinada acción para cada propiedad. Una forma de enumerar las propiedades de un objeto es utilizar el bucle `for-in`. El bucle `for-in` itera sobre las propiedades enumerables de un objeto en un orden arbitrario, y para cada propiedad ejecuta un bloque de código determinado.
---
# Enumeración

La _enumeración_ se refiere al proceso de iterar sobre las propiedades de un objeto y realizar una determinada acción para cada propiedad. Hay varias formas de enumerar las propiedades de un objeto en JavaScript.

Una forma de enumerar las propiedades de un objeto es utilizar el bucle `for-in`. El bucle `for-in` itera sobre las propiedades enumerables de un objeto en un orden arbitrario, y para cada propiedad ejecuta un bloque de código determinado.

La declaración `for in` puede recorrer todos los nombres de propiedades de un objeto. La enumeración incluirá funciones y propiedades del prototipo.

```javascript
let fruta = {
    manzana: 2,
    naranja: 5,
    pera: 1,
  },
  oracion = "Tengo ",
  cantidad;
for (clase in fruta) {
  cantidad = fruta[clase];
  oracion += cantidad + " " + clase + (cantidad === 1 ? "" : "s") + ", ";
}
// La siguiente línea elimina la coma final.
oracion = oracion.substr(0, oracion.length - 2) + ".";
// Tengo 2 manzanas, 5 naranajas, 1 pera.
```

Otra forma de enumerar las propiedades de un objeto es utilizar el método `Object.keys()`, que devuelve una matriz de los nombres de propiedades enumerables del propio objeto.

For example:

```typescript
let objeto = {
  foo: 'bar',
  baz: 'qux'
};

let propiedades = Object.keys(objeto);
propiedades.forEach(function(propiedad) {
  console.log(propiedad + ': ' + objeto[propiedad]);
});

// foo: bar
// baz: qux
```
