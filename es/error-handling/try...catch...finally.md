---
chapter: 12
pageNumber: 116
description: try catch finally permite a los desarrolladores manejar con elegancia las excepciones (errores) que pueden ocurrir durante la ejecución de un bloque de código y garantizar que ciertas acciones de limpieza siempre se ejecuten, independientemente de si se lanzó una excepción o no.
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

{% exercise %}
Escriba una función `divideNumbers()` que tome dos argumentos, numerador y denominador, y devuelva el resultado de dividir el numerador por el denominador usando las siguientes configuraciones.

{% initial %}
function divideNumbers(numerator, denominator) {
    try {
      // Pruebe la declaración para dividir el numerador por el denominador.
    } catch (error) {
      // imprimir mensaje de error
    } finally {
      // imprimir que la ejecución ha finalizado
    }
   // return result
  }
  let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
  let result;
    try {
      result = numerator / denominator;
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      console.log('Función terminada de ejecutarse');
    }
    return result;
  }
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
