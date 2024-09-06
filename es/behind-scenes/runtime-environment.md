---
chapter: 27
pageNumber: 262
description: Comprender el entorno de ejecución en JavaScript.
---

# Comprender el entorno de ejecución en JavaScript

El entorno de ejecución en JavaScript es el contexto en el que se ejecuta el código. Incluye el motor de JavaScript, la pila de llamadas, el montón de memoria y las API proporcionadas por el entorno (como el navegador o Node.js).

## Motor de JavaScript

El motor de JavaScript es responsable de ejecutar el código. Entre los motores más populares se encuentran V8 (usado en Chrome y Node.js), SpiderMonkey (usado en Firefox) y JavaScriptCore (usado en Safari).

## Pila de llamadas

La pila de llamadas es una estructura de datos que lleva un registro de las llamadas a funciones. Cuando se llama a una función, se agrega a la parte superior de la pila. Cuando la función retorna, se elimina de la pila.

### Ejemplo de pila de llamadas

````javascript
function primera() {
    console.log("Primera función");
    segunda();
}

function segunda() {
    console.log("Segunda función");
    tercera();
}

function tercera() {
    console.log("Tercera función");
}

primera();
````

**Salida:**

````text
Primera función
Segunda función
Tercera función
````

## Montón de memoria

El montón de memoria es donde se almacenan los objetos, las cadenas y los cierres. Lo administra el recolector de elementos no utilizados, que recupera la memoria que ya no se utiliza.

### Ejemplo de asignación de memoria

```javascript
let obj = {
    name: "John",
    age: 30
};

let arr = [1, 2, 3, 4, 5];
```

## Bucle de eventos

El bucle de eventos es responsable de gestionar las operaciones asincrónicas. Revisa continuamente la pila de llamadas y la cola de tareas, y ejecuta las tareas de la cola cuando la pila está vacía.

### Ejemplo de bucle de eventos

````javascript
console.log("Comenzar");

setTimeout(() => {
    console.log("Se acabó el tiempo");
}, 0);

console.log("Final");
````

**Salida:**

```text
Comenzar
Final
Se acabó el tiempo
```

## IPAs proporcionadas por el entorno

El entorno de ejecución proporciona varias IPAs que puedes usar en tu código. En un navegador, estas incluyen DOM, fetch y setTimeout. En Node.js, estas incluyen operaciones del sistema de archivos, solicitudes HTTP y más.

### Ejemplo de IPA del navegador

```javascript
document.getElementById("myButton").addEventListener("click", () => {
    alert("¡Botón pulsado!");
});
```

### Ejemplo de IPA de Node.js

````javascript
const fs = require('fs');

fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
````

## Conclusión

Comprender el entorno de ejecución en JavaScript es fundamental para escribir código eficiente y eficaz. Si conoce cómo funcionan la pila de llamadas, el montón de memoria, el bucle de eventos y las API proporcionadas, podrá gestionar mejor la ejecución y el rendimiento de su código.
