---
chapter: 8
pageNumber: 56
Title: Set Timeout
---

# Set Timeout

El método global `setTimeout` se utiliza para agregar un retraso (en milisegundos) antes de que se ejecute una función.

Por ejemplo, en este ejemplo, después de escribir "Listo..." en la consola, la función `arranca()` tiene que esperar 3 segundos antes de ejecutarse.

```js
console.log("Listo...");

function arranca() {
console.log("¡ya está!");
}

setTimeout(arranca, 3000);

// Salida: "Listo..." y luego, después de 3 segundos, "¡ya está!"
```

## Clear Timeout

El método global `clearTimeout` se utiliza para eliminar cualquier método `setTimeout()` que esté almacenado en variables. Por ejemplo, cambiemos nuestro último ejemplo almacenando `setTimeout()` en una variable

```js
console.log("Listo...");

function arranca() {
console.log("¡ya está!");
}

let tiempoAntesDeComenzar = setTimeout(arranca, 3000);

clearTimeout(tiempoAntesDeComenzar);
// Detiene la ejecución de la función en su totalidad
```
