---
chapter: 19
pageNumber: 102
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
