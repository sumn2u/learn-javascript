---
chapter: 27
pageNumber: 309
description: Comprender el bucle de eventos en JavaScript.
---

# Comprender el bucle de eventos en JavaScript

El bucle de eventos es un concepto fundamental en JavaScript que permite la programación asincrónica. Es responsable de ejecutar código, recopilar y procesar eventos y ejecutar subtareas en cola.

## Cómo funciona el bucle de eventos

JavaScript es de un solo subproceso, lo que significa que puede ejecutar un fragmento de código a la vez. El bucle de eventos permite que JavaScript realice operaciones sin bloqueos al delegar operaciones al núcleo del sistema siempre que sea posible.

### Componentes del bucle de eventos

1. **Pila de llamadas**: La pila de llamadas es donde el motor de JavaScript realiza un seguimiento de las llamadas a funciones.
2. **API web**: las proporciona el navegador (o Node.js) e incluyen cosas como `setTimeout`, `eventos DOM` y `solicitudes HTTP`.
3. **Cola de devolución de llamada**: aquí es donde las funciones se ponen en cola para ejecutarse después de que se borre la pila de llamadas.
4. **Bucle de eventos**: el bucle de eventos verifica continuamente la pila de llamadas para ver si está vacía. Si lo está, toma el primer evento de la cola de devolución de llamadas y lo envía a la pila de llamadas.

### Ejemplo del bucle de eventos

A continuación se muestra un ejemplo sencillo para ilustrar cómo funciona el bucle de eventos:

```javascript
console.log("Comenzar");

setTimeout(() => {
    console.log("Se acabó el tiempo");
}, 0);

console.log("Fin");
```

**Salida:**

```text
Comenzar
Fin
Se acabó el tiempo
```

### Explicación del bucle de eventos

1. Se ejecuta `console.log("Comenzar")` y se imprime "Comenzar".
2. Se llama a `setTimeout` y la devolución de llamada se envía a la API web. El hilo principal continúa.
3. Se ejecuta `console.log("Fin")` y se imprime "Fin".
4. El bucle de eventos comprueba la pila de llamadas y la encuentra vacía. Luego envía la devolución de llamada `setTimeout` a la pila de llamadas.
5. Se ejecuta la devolución de llamada `setTimeout` y se imprime "Se acabó el tiempo".

### Bucle de eventos en acción

A continuación se muestra un ejemplo más complejo para demostrar el bucle de eventos en acción:

```javascript
console.log("Comenzar");

setTimeout(() => {
    console.log("Se acabó el tiempo 1");
}, 1000);

setTimeout(() => {
    console.log("Se acabó el tiempo 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promesa");
});

console.log("Fin");
```

**Salida:**

```text
Comenzar
Fin
Promesa
Se acabó el tiempo 2
Se acabó el tiempo 1
```

### Explicación del bucle de eventos en acción

1. Se ejecuta `console.log("Comenzar")` y se imprime "Comenzar".
2. Se llama a `setTimeout` con un retraso de 1000 ms y se envía la devolución de llamada a la API web.
3. Se llama a `setTimeout` con un retraso de 0 ms y se envía la devolución de llamada a la API web.
4. Se llama a `Promise.resolve().then` y se envía la devolución de llamada a la cola de microtareas.
5. Se ejecuta `console.log("Fin")` y se imprime "Fin".
6. El bucle de eventos verifica la pila de llamadas y la encuentra vacía. Luego procesa primero la cola de microtareas, ejecuta la devolución de llamada `Promise` e ​​imprime "Promesa".
7. Luego, el bucle de eventos procesa la cola de devolución de llamada, ejecuta `setTimeout` con un retraso de 0 ms e imprime "Se acabó el tiempo 2".
8. Finalmente, se ejecuta `setTimeout` con un retraso de 1000ms y se imprime "Se acabó el tiempo 1".

### Microtareas vs Macrotareas

Las microtareas (por ejemplo, las Promesas) tienen mayor prioridad que las macrotareas (por ejemplo, `setTimeout`). El bucle de eventos procesa todas las microtareas antes de pasar a la siguiente macrotarea.

### Ejemplos de microtareas y macrotareas

```javascript
console.log("Comenzar");

setTimeout(() => {
    console.log("Se acabó el tiempo");
}, 0);

Promise.resolve().then(() => {
    console.log("Promesa 1");
}).then(() => {
    console.log("Promesa 2");
});

console.log("Fin");
```

**Salida:**

```Text
Comenzar
Fin
Promisa 1
Promisa 2
Se acabó el tiempo
```

### Explicación de microtareas y macrotareas

1. Se ejecuta `console.log("Comenzar")` y se imprime "Comenzar".
2. Se llama a `setTimeout` y se envía la devolución de llamada a la API web.
3. Se llama a `Promise.resolve().then` y se envía la devolución de llamada a la cola de microtareas.
4. Se ejecuta `console.log("Fin")` y se imprime "Fin".
5. El bucle de eventos procesa la cola de microtareas, ejecuta las devoluciones de llamada de `Promise` e ​​imprime "Promesa 1" y "Promesa 2".
6. A continuación, el bucle de eventos procesa la cola de devoluciones de llamada, ejecuta la devolución de llamada de `setTimeout` e imprime "Se acabó el tiempo".
