---
chapter: 7
pageNumber: 50
description:  Un bucle for es una potente estructura de control que se utiliza para ejecutar un bloque de código varias veces, ya sea para un número específico de iteraciones o en un rango definido. Es muy versátil y se usa comúnmente para iterar a través de matrices, cadenas y otros objetos iterables.
---
# For

La forma más sencilla de bucle es la declaración for. Éste tiene una sintaxis similar a una declaración if, pero con más opciones:

```javascript
for (condicion; condicion_finalizacion; cambio) {
    // hazlo, hazlo ahora
}
```

Veamos cómo ejecutar el mismo código diez veces usando un bucle `for`:

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // haz este código diez veces
}
```

> _**Nota**_: `i = i + 1` se puede escribir `i++`.

Para recorrer las propiedades de un objeto o una matriz también se puede utilizar un bucle `for in`.

```javascript
for (clave in objeto) {
  // bloque de código a ejecutar
}
```

A continuación se muestran ejemplos de bucle `for in` para un objeto y una matriz:

```javascript
const persona = {nombre:"John", apellido:"Doe", edad:25};
let info = "";
for (let x in persona) {
  info += persona[x];
}

// Resultado: info = "JohnDoe25"

const numeros = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numeros) {
  txt += numeros[x];
}

// Resultado: txt = '45491625'
```

El valor de objetos iterables como `Arrays`, `Strings`, `Maps`, `NodeLists` se puede iterar usando la declaración `for of`.

```javascript
let lenguaje = "JavaScript";
let text = "";
for (let x of lenguaje) {
text += x;
}
```
