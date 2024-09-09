---
layout: editorial
chapter: 19
pageNumber: 133
description: JavaScript es un lenguaje de programación popular conocido principalmente por su uso en el desarrollo web. Una de las características clave que diferencia a JavaScript de muchos otros lenguajes es su naturaleza de subproceso único. Esto significa que el código JavaScript se ejecuta en un único hilo principal del navegador o del entorno de ejecución.
---

# Naturaleza de un solo hilo de JavaScript

JavaScript es un lenguaje de programación de un solo subproceso que ejecuta código de forma secuencial en un subproceso principal. Se basa en patrones asincrónicos sin bloqueo para manejar tareas de manera eficiente sin bloquear el hilo principal, lo que garantiza la capacidad de respuesta en las aplicaciones web. Si bien simplifica la concurrencia, requiere un uso eficaz de retrollamadas y programación basada en eventos.

## Comprensión de JavaScript de un solo subproceso

A continuación se presentan algunos puntos clave que debe comprender sobre la ejecución de un solo subproceso de JavaScript:

1. **Un subproceso, una tarea:** JavaScript opera dentro de un único subproceso de ejecución, lo que significa que solo puede realizar una tarea a la vez. Este hilo a menudo se denomina "hilo principal" o "bucle de eventos".

2. **Bloqueo versus no bloqueo:** El código JavaScript es inherentemente no bloqueante. Esto significa que cuando se encuentra una operación que requiere mucho tiempo (como una solicitud de red o lectura de un archivo), JavaScript no espera a que se complete. En cambio, delega la tarea a otra parte del entorno (por ejemplo, el navegador o el tiempo de ejecución de Node.js) y continúa ejecutando otro código.

3. **Programación asincrónica:** Para manejar operaciones que pueden consumir mucho tiempo sin bloquear el hilo principal, JavaScript depende en gran medida de patrones de programación asincrónica. Funciones como retrollamadas, promesas y async/await permiten a los desarrolladores trabajar con operaciones asincrónicas de manera efectiva.

4. **Basado en eventos:** JavaScript a menudo se describe como "basado en eventos". Esto significa que escucha y responde a eventos, como interacciones del usuario (clics, pulsaciones de teclas), temporizadores o respuestas de la red. Cuando ocurre un evento, se ejecuta la función de retrollamada correspondiente.

5. **Modelo de concurrencia:** Si bien JavaScript se ejecuta en un solo subproceso, el modelo de concurrencia permite la ejecución simultánea de código. Esto se logra mediante mecanismos como el bucle de eventos, que gestiona la ejecución de tareas asincrónicas de una manera que garantiza la capacidad de respuesta y el comportamiento sin bloqueo.

6. **Interacción entre el navegador y el entorno:** En el desarrollo web, JavaScript interactúa con el modelo de objetos de documento (DOM) del navegador y otras API del navegador. Para mantener una interfaz de usuario receptiva, el código JavaScript debe ejecutarse de manera rápida y eficiente y delegar operaciones que consumen mucho tiempo a subprocesos separados cuando sea necesario.

## Ejemplo asincrónico de un solo subproceso

```javascript
// Simular una operación asincrónica con una retrollamada
function simularOperacionAsincrona(retrollamada) {
  setTimeout(function () {
    console.log("Operación asíncrona completada.");
    retrollamada();
  }, 2000); // Simula un retardo de 2 segundos
}

console.log("Inicio del programa");

// Inicia una operación asíncrona
simularOperacionAsincrona(function () {
  console.log("Retrollamada ejecutada: manejando el resultado.");
});

console.log("Fin del programa");
```

En este ejemplo, demostramos la naturaleza de subproceso único de JavaScript y cómo maneja operaciones asincrónicas mediante retrollamadas.

### Explicación del código

- Definimos una función `simularOperacionAsincrona` que simula una operación asíncrona usando `setTimeout`. Esta función toma una retrollamada como argumento, la cual se ejecutará cuando se complete la operación asíncrona.

- Iniciamos el programa escribiendo en la consola "Inicio del programa".

- Iniciamos la operación asíncrona usando `simularOperacionAsincrona`, pasándole una función de retrollamada. Esta función se ejecutará después de un retardo de dos segundos.

- Inmediatamente después de iniciar la operación asincrónica, escribimos en la consola "Fin del programa".

### Flujo de ejecución

- Cuando ejecute este código, notará que aunque la operación asincrónica tarda 2 segundos en completarse, el programa no se bloquea. El mensaje "Fin del programa" se muestra inmediatamente después de iniciar la operación asincrónica, lo que demuestra el comportamiento sin bloqueo de JavaScript.

- Después del retraso de 2 segundos, la "operación asíncrona se completó". Se registra el mensaje, seguido de "Retrollamada ejecutada: manejando el resultado", lo que indica que la función retrollamada se ejecutó cuando finalizó la operación asincrónica.

### Conclusiones clave

- JavaScript opera en un solo hilo y las operaciones asincrónicas se manejan mediante retrollamadas.

- La naturaleza de un solo subproceso permite que JavaScript siga respondiendo incluso durante tareas que requieren mucho tiempo.

- Las retrollamadas son un mecanismo fundamental para trabajar con código asincrónico en JavaScript.

## Beneficios y desafíos

### Beneficios

- Simplicidad: la ejecución de un solo subproceso simplifica el modelo de programación y reduce el riesgo de errores complejos relacionados con la concurrencia.
- Previsibilidad: la naturaleza de un solo subproceso hace que sea más fácil razonar sobre el orden de ejecución y el estado de su programa.

### Desafíos

- Operaciones de bloqueo: las operaciones de larga duración pueden potencialmente bloquear el hilo principal, lo que genera una mala experiencia del usuario, especialmente en aplicaciones web.
- Infierno de retrollamadas: el uso excesivo de retrollamadas (a menudo denominado "el infierno de retrollamadas") puede hacer que el código sea más difícil de leer y mantener.
- Cuello de botella de concurrencia: las tareas vinculadas a la CPU no pueden utilizar completamente los procesadores multinúcleo porque JavaScript se ejecuta en un solo subproceso.

En resumen, la naturaleza de un solo subproceso de JavaScript es una característica definitoria del lenguaje. Si bien simplifica ciertos aspectos de la programación, también presenta desafíos en términos de manejar tareas asincrónicas y garantizar aplicaciones receptivas. El uso eficaz de patrones asincrónicos y la comprensión del modelo basado en eventos son esenciales para los desarrolladores de JavaScript.
