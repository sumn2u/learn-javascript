---
layout: editorial
chapter: 27
pageNumber: 304
description: JavaScript detrás de escena.
---

# Capítulo 27

## JavaScript detrás de escena

JavaScript es un lenguaje versátil que se ejecuta en varios entornos, incluidos navegadores y servidores. Comprender cómo funciona JavaScript en segundo plano puede ayudarlo a escribir código más eficiente y eficaz. Esta guía cubre conceptos clave como el motor de JavaScript, el contexto de ejecución, la pila de llamadas, el montón de memoria, el entorno de ejecución y el bucle de eventos.

### Motor de JavaScript

Un motor de JavaScript es un programa o intérprete que ejecuta código JavaScript. Los motores populares como V8 (usado en Google Chrome y Node.js), SpiderMonkey (usado en Firefox) y JavaScriptCore (usado en Safari) analizan el código en un árbol de sintaxis abstracta (AST), lo compilan en código de bytes o código de máquina y luego lo ejecutan.

### Contexto de ejecución

Un contexto de ejecución es un entorno en el que se evalúa y ejecuta el código JavaScript. Hay tres tipos: global,
función y evaluación. Cada contexto tiene una fase de creación, donde se crean las variables, las funciones y la palabra clave `this`, y una fase de ejecución, donde se ejecuta el código línea por línea.

### Pila de llamadas

La pila de llamadas es una estructura de datos que realiza un seguimiento de las llamadas a funciones en el modo LIFO (último en entrar, primero en salir). Ayuda al motor de JavaScript a gestionar la ejecución de múltiples funciones al enviar y recibir llamadas a funciones a medida que se invocan y se completan.

### Montón de memoria

El montón de memoria es una región de la memoria donde se almacenan los objetos. JavaScript utiliza la recolección de elementos no utilizados para administrar la memoria, liberando automáticamente la memoria que ya no se utiliza, lo que evita fugas de memoria y optimiza el rendimiento.

### Entorno de ejecución

El entorno de ejecución proporciona los recursos necesarios para que JavaScript se ejecute. En un navegador, esto incluye el
modelo de objetos de documento (DOM), las API web y el motor de JavaScript. En Node.js, incluye el sistema de archivos, el módulo HTTP y otras API específicas de Node.js.

### Bucle de eventos

El bucle de eventos permite que JavaScript realice operaciones sin bloqueos al transferir tareas al núcleo del sistema siempre que sea posible. Verifica continuamente la pila de llamadas y procesa la cola de devolución de llamadas, lo que permite la programación asincrónica y la ejecución eficiente del código.
