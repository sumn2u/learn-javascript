---
chapter: 8
description: Comprender la elevación de funciones en JavaScript.
---

# Comprender la elevación de funciones en JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use functions and variables before they are declared in the code.

## Elevación de funciones

En JavaScript, las declaraciones de funciones se colocan en la parte superior del ámbito que las contiene. Esto permite llamar a una función antes de que se defina en el código.

## Ejemplo de elevación de funciones

A continuación se muestra un ejemplo para ilustrar la elevación de funciones:

```javascript
console.log(saludo()); // Salida: ¡Hola mundo!

function saludo() {
    return "¡Hola mundo!";
}
```

En este ejemplo, se llama a la función `saludo` antes de definirla, pero funciona porque la declaración de la función se eleva a la parte superior del ámbito.

## Expresiones de función y elevación

A diferencia de las declaraciones de funciones, las expresiones de funciones no se pueden elevar. Esto significa que no se puede llamar a una expresión de función antes de que se defina.

## Ejemplo de expresión de función

He aquí un ejemplo para ilustrar la diferencia:

```javascript
console.log(saludo()); // Salida: TypeError: saludo is not a function

var saludo = function() {
    return "¡Hola mundo!";
};
```

En este ejemplo, la función `saludo` se define como una expresión de función, y llamarla antes de la definición genera un error porque la variable `saludo` se eleva, pero su asignación no.

## Elevación con `let` y `const`

Las variables declaradas con `let` y `const` también se elevan, pero no se inicializan. Esto significa que acceder a ellas antes de su declaración da como resultado un `ReferenceError`.

## Ejemplo con `let` y `const`

```javascript
console.log(saludo); // Salida: ReferenceError: saludo is not defined

let saludo = function() {
    return "¡Hola mundo!";
};
```

En este ejemplo, la variable `saludo` se eleva, pero no se inicializa, lo que genera un `ReferenceError` cuando se accede a ella antes de su declaración.

## Conclusión

Comprender el hoisting es crucial para escribir código JavaScript predecible y libre de errores. Las declaraciones de funciones se elevan, lo que permite llamarlas antes de que se definan, mientras que las expresiones de función no se elevan, lo que genera posibles errores si se llaman antes de su definición. Las variables declaradas con `let` y `const` se elevan pero no se inicializan, lo que genera `ReferenceError` si se accede a ellas antes de su declaración.
