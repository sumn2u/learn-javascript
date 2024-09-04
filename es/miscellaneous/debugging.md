---
chapter: 19
pageNumber: 122
description: En programación, pueden ocurrir errores al escribir código. Podría deberse a errores sintácticos o lógicos. El proceso de encontrar errores puede llevar mucho tiempo y ser complicado y se denomina depuración de código.
---
# Depuración

En programación, pueden ocurrir errores al escribir código. Podría deberse a errores sintácticos o lógicos. El proceso de encontrar errores puede llevar mucho tiempo y ser complicado y se denomina depuración de código.

Afortunadamente, la mayoría de los navegadores modernos vienen con depuradores integrados. Estos depuradores se pueden activar y desactivar, lo que obliga a informar los errores. También es posible configurar puntos de interrupción durante la ejecución del código para detener la ejecución y examinar las variables. Para esto, hay que abrir una ventana de depuración y colocar la palabra clave `debugger` en el código JavaScript. La ejecución del código se detiene en cada punto de interrupción, lo que permite a los desarrolladores examinar los valores de JavaScript y reanudar la ejecución del código.

También se puede utilizar el método `console.log()` para imprimir los valores de JavaScript en la ventana del depurador.

```javascript
const a = 5, b = 6;
const c = a + b;
console.log(c);
// Resultado : c = 11;
```

## Herramientas de desarrollo del navegador

Los navegadores modernos vienen equipados con potentes herramientas de desarrollo que ayudan a depurar JavaScript, inspeccionar HTML y CSS y monitorear las solicitudes de red. A continuación se ofrece una breve descripción general de algunas herramientas esenciales:

**Chrome DevTools:** Las herramientas para desarrolladores de Google Chrome ofrecen una amplia gama de funciones para depurar aplicaciones web.

**Firefox DevTools:** Las herramientas de desarrollo de Mozilla Firefox son otra excelente opción que ofrece capacidades similares.

**Microsoft Edge DevTools:** Para los usuarios de Microsoft Edge, las herramientas de desarrollo integradas brindan funciones de depuración esenciales.

**Safari Web Inspector:** Web Inspector de Safari es un sólido conjunto de herramientas para depurar y crear perfiles de aplicaciones web.

## Usando puntos de interrupción

Los navegadores modernos ofrecen herramientas para desarrolladores con capacidades de depuración.
Establezca puntos de interrupción para pausar la ejecución del código e inspeccionar variables y pilas de llamadas.
Recorra el código para comprender su flujo.
Herramientas de desarrollo del navegador

Los navegadores proporcionan un conjunto de herramientas para desarrolladores que le permiten inspeccionar HTML, CSS y JavaScript.
Puede acceder a ellos haciendo clic derecho en una página web y seleccionando "Inspeccionar" o presionando `F12` o `Ctrl+Shift+I`.
Las características clave incluyen:

**Consola:** Ver e interactuar con la salida de la consola.

**Elementos:** Inspeccionar y modificar el DOM.

**Fuentes:** Depurar JavaScript con puntos de interrupción y observar expresiones.

**Red:** Supervise las solicitudes y respuestas de la red.

## Usando la declaración del depurador

Inserte la declaración `debugger` en su código para crear puntos de interrupción mediante programación.
Cuando el código encuentre el depurador, pausará la ejecución y abrirá las herramientas de desarrollo del navegador.
