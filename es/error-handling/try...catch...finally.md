---
chapter: 12
pageNumber: 116
description: >-
  try catch finally permite a los desarrolladores manejar con elegancia las
  excepciones (errores) que pueden ocurrir durante la ejecución de un bloque de
  código y garantizar que ciertas acciones de limp
---

# try...catch...finally

Podemos agregar una construcción más a `try...catch` llamada `finally`, este código se ejecuta en todos los casos. es decir, después de `try` cuando no hay ningún error y después de `catch` en caso de error. La sintaxis de `try...catch...finally` se muestra a continuación.

```javascript
try {
   // intenta ejecutar el código
} catch (err) {
    // maneja los errores
} finally {
   // se ejecuta siempre
}
```

Ejecutando código de ejemplo del mundo real.

```javascript
try {
  alert( 'try' );
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

En el ejemplo anterior, el bloque `try` se ejecuta primero, seguido de `finally`, ya que no hay errores.
