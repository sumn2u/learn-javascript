---
chapter: 19
pageNumber: 144
description: El hoisting es un comportamiento predeterminado en JavaScript para mover declaraciones en la parte superior. Mientras se ejecuta un código, se crea un contexto de ejecución global y se ejecuta. En la fase de creación, JavaScript mueve la declaración de variable y función a la parte superior de la página, lo que se conoce como elevación..
---
# Hoisting (Alzado)

El alzado o elevación es un comportamiento predeterminado en JavaScript para mover declaraciones en la parte superior. Mientras se ejecuta un código, se crea un contexto de ejecución global: **creación** y **ejecución**. En la fase de creación, JavaScript mueve la declaración de variables y funciones a la parte superior de la página, lo que se conoce como elevación.

```javascript
// elevación de la variable
console.log(contador);
let contador = 1; // lanza la excepción ReferenceError: contador is not defined
```

Aunque el `contador` está presente en la memoria del montón pero no se ha inicializado, genera un error. Esto sucede debido al izado (hoisting, en inglés), la variable `contador` se iza aquí.

```javascript
    // función de elevación
    const x = 20,
    y = 10;

    let resultado = agregar(x,y); // ❌ Uncaught ReferenceError: add is not defined
    console.log(resultado);

    let agregar = (x, y) => x + y; 
```

Aquí, la función `agregar` se activa e inicializa con `undefined` en la memoria del montón en la fase de creación del contexto de ejecución global. Por lo tanto, arroja un error.
