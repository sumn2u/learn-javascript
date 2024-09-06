---
chapter: 27
pageNumber: 257
description: Comprensión de las pilas de llamadas en JavaScript
---


# Comprensión de las pilas de llamadas en JavaScript

En JavaScript, una pila de llamadas es una estructura de datos que utiliza el principio de último en entrar, primero en salir (LIFO) para almacenar y administrar temporalmente la invocación de una función (llamada).

## ¿Qué es una pila de llamadas?

Una pila de llamadas es responsable de realizar un seguimiento de las llamadas a funciones en su código. La pila de llamadas ayuda al intérprete de JavaScript a realizar un seguimiento de qué función se está ejecutando actualmente y qué funciones se invocan desde dentro de esa función, etc.

Cuando un script llama a una función, el intérprete de JavaScript agrega esa función a la pila de llamadas y luego comienza a ejecutarla. Todas las funciones que son llamadas por esa función se agregan a la pila de llamadas más arriba y se ejecutan donde se alcanzan sus llamadas.

Cuando finaliza la función actual, el intérprete la saca de la pila y reanuda la ejecución donde la dejó en la última línea de código que se ejecutó.

### Ejemplo de una pila de llamadas

A continuación se muestra un ejemplo básico para comprender cómo funciona una pila de llamadas:

```javascript
function primeraFuncion() {
    console.log("Se llama la primera función.");
    segundaFuncion();
    console.log("La primera función está realizada.");
}

function segundaFuncion() {
    console.log("Se llama la segunda función.");
    terceraFuncion();
    console.log("La segunda función está realizada.");
}

function terceraFuncion() {
    console.log("Se llama la tercera función.");
}

primeraFuncion();
```

**Output:**

```text
Se llama la primera función.
Se llama la segunda función.
Se llama la tercera función.
La segunda función está realizada.
La primera función está realizada.
```

## Cómo funciona la pila de llamadas

1. Cuando se llama a `primeraFuncion`, se agrega a la pila de llamadas.
2. Dentro de `primeraFuncion`, se llama a `segundaFuncion`, por lo que se agrega a la pila de llamadas.
3. Dentro de `segundaFuncion`, se llama a `terceraFuncion`, por lo que se agrega a la pila de llamadas.
4. `terceraFuncion` se completa y se elimina de la pila de llamadas.
5. `segundaFuncion` se reanuda, se completa y se elimina de la pila de llamadas.
6. `primeraFuncion` se reanuda, se completa y se elimina de la pila de llamadas.

## Desbordamiento de pila

Un desbordamiento de pila ocurre cuando hay demasiadas llamadas de función en la pila de llamadas. Esto puede suceder con funciones recursivas que no tienen un caso base para detener la recursión.

```javascript
function funcionRecursiva() {
    funcionRecursiva();
}

funcionRecursiva();
```

Esto generará un error "Se excedió el tamaño máximo de la pila de llamadas" (En la consola aparecerá el error en inglés: "RangeError: Maximum call stack size exceeded").
