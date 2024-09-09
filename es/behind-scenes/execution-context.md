---
chapter: 27
pageNumber: 312
description: Comprender el contexto de ejecución en JavaScript.
---

# Comprender el contexto de ejecución en JavaScript

En JavaScript, un contexto de ejecución es un entorno en el que se evalúa y ejecuta el código. Es un concepto fundamental que ayuda a gestionar el alcance y el comportamiento de las variables y funciones.

## Tipos de contexto de ejecución

Existen tres tipos principales de contextos de ejecución en JavaScript:

1. **Contexto de ejecución global**: este es el contexto predeterminado en el que el código comienza a ejecutarse. Crea un objeto global (por ejemplo, `window` en los navegadores) y configura el alcance global.
2. **Contexto de ejecución de función**: se crea siempre que se invoca una función. Cada función tiene su propio contexto de ejecución.
3. **Contexto de ejecución de evaluación**: se crea cuando el código se ejecuta dentro de la función `eval`.

## Fases de Ejecución Contexto

Cada contexto de ejecución pasa por dos fases:

1 . **Fase de creación**: en esta fase, el motor de JavaScript configura el entorno para que se ejecute el código. Implica:

- Crear el enlace `this`.
- Configurar la cadena de alcance.
- Crear el objeto variable (variables, funciones y argumentos).

2 . **Fase de ejecución**: en esta fase, el motor de JavaScript ejecuta el código línea por línea.

### Ejemplo de contexto de ejecución

A continuación se muestra un ejemplo para ilustrar cómo funcionan los contextos de ejecución:

```javascript
var globalVar = "Soy una variable global";

function outerFunction() {
    var outerVar = "Soy una variable externa";

    function innerFunction() {
        var innerVar = "Soy una variable interna";
        console.log(globalVar); // Accede a la variable global
        console.log(outerVar);  // Acceder a la variable externa
        console.log(innerVar);  // Accede a la variable interna
    }

    innerFunction();
}

outerFunction();
```

**Salida:**

```text
Soy una variable global
Soy una variable externa
Soy una variable interna
```

### Explicación del ejemplo de contexto de ejecución

1 . **Contexto de ejecución global**:

- Se crea `globalVar` y se le asigna el valor "Soy una variable global".
- Se crea `outerFunction` y se almacena en memoria.

2 . **Contexto de ejecución de función (outerFunction)**:

- Se crea `outerVar` y se le asigna el valor "Soy una variable externa".
- Se crea `innerFunction` y se almacena en memoria.

3 . **Contexto de ejecución de función (innerFunction)**:

- Se crea `innerVar` y se le asigna el valor "Soy una variable interna".
- Las sentencias `console.log` acceden a las variables desde sus respectivos ámbitos.

### Cadena de alcance y entorno léxico

La cadena de alcance es una lista de todos los objetos variables a los que tiene acceso el código que se está ejecutando actualmente. El entorno léxico es el entorno en el que se escribe el código y determina la cadena de alcance.

### Ejemplo de cadena de alcance

```javascript
var a = 10;

function foo() {
    var b = 20;

    function bar() {
        var c = 30;
        console.log(a + b + c); // Accede a variables de todos los ámbitos.
    }

    bar();
}

foo();
```

**Salida:**

```text
60
```

### Explicación del ejemplo de cadena de alcance

1. **Ámbito global**: contiene `a`.
2. **Ámbito de función (foo)**: contiene `b` y tiene acceso a `a`.
3. **Ámbito de función (bar)**: contiene `c` y tiene acceso a `a` y `b`.

### Elevación

La elevación es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven a la parte superior de su ámbito contenedor durante la fase de creación.

### Ejemplo de elevación

```javascript
console.log(hoistedVar); // Salida: undefined
var hoistedVar = "Estoy levantado";

hoistedFunction(); // Salida: Soy una función elevada
function hoistedFunction() {
    console.log("Soy una función elevada");
}
```

### Explicación del ejemplo de elevación

- `hoistedVar` se declara pero no se inicializa durante la fase de creación, por lo que es "indefinido" cuando se accede a él.
- `hoistedFunction` está completamente izado y puede ser llamado antes de su declaración.
