---
chapter: 19
pageNumber: 143
description: Los literales de plantilla son literales delaminados con comillas invertidas (` `) y se usan en la interpolación de variables y expresiones en cadenas.
---
# Literales de plantilla

Los literales de plantilla son literales delimitados con comillas invertidas `(``)` y se usan en la interpolación de variables y expresiones en cadenas.

```javascript
let texto1 = `¡Hola mundo!`;
// literales de plantilla con código simple y doble dentro de una sola cadena
let texto2 = `A menudo lo llaman "Johnny"`;
// literales de plantilla con cadenas multilínea
let texto3 =
`El rápido
zorro marrón
salta
sobre el perro perezoso`;

// literales de plantilla con interpolación variable
const nombre = "John";
const apellido = "Doe";

const textoBienvenida = `¡Bienvenido ${nombre}, ${apellido}!`;

// plantilla de literales con interpolación de expresiones
const precio = 10;
const IVA = 0.25;

const total = `Total: ${(precio * (1 + IVA)).toFixed(2)}`;
```
