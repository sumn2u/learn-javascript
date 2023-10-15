---
chapter: 7
pageNumber: 52
description: La instrucción do... while crea un bucle que ejecuta una instrucción específica hasta que la condición de prueba se evalúa como falsa. La condición se evalúa después de ejecutar la declaración.
---
# Do...While

La instrucción do... while crea un bucle que ejecuta una instrucción específica hasta que la condición de prueba se evalúa como falsa. La condición se evalúa después de ejecutar la declaración. La sintaxis para do... while es

```javascript
do {
  // sentencias
} while (expresión);
```

Veamos, por ejemplo, cómo imprimir números menores de 10 usando el bucle `do... while`:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrementando i en uno
} while (i < 10);
```

> _**Nota**_: `i = i + 1` se puede escribir `i++`.
