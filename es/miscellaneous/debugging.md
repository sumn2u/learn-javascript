---
chapter: 19
pageNumber: 152
description: En programación, pueden ocurrir errores al escribir código. Podría deberse a errores sintácticos o lógicos. El proceso de encontrar errores puede llevar mucho tiempo y ser complicado y se denomina depuración de código.
---
# Depuración

En programación, es común que ocurran errores mientras se escribe el código. Estos pueden ser errores sintácticos o lógicos. La depuración de código es el proceso de identificar, aislar y corregir estos errores, lo cual puede ser un proceso complicado y que consume tiempo.

Afortunadamente, la mayoría de los navegadores modernos incluyen depuradores integrados. Estos depuradores pueden activarse y desactivarse para forzar la notificación de errores. También es posible establecer puntos de interrupción durante la ejecución del código, lo que permite detener su ejecución y examinar las variables. Para ello, se debe abrir la ventana de depuración y colocar la palabra clave debugger en el código JavaScript. La ejecución se detendrá en cada punto de interrupción, permitiendo al desarrollador examinar los valores y luego reanudar la ejecución.

## La técnica de console.log()

Una de las formas más simples y populares de depurar código es utilizando la función console.log(). Esta permite seguir el flujo del código y examinar los valores de las variables en momentos específicos de la ejecución.

```javascript
function calcularTotal(precio, porcentajeImpuesto) {
  const impuesto = precio * porcentajeImpuesto;
  console.log('Impuesto calculado:', impuesto);  // Salida para inspección
  const total = precio + impuesto;
  return total;
}

calcularTotal(100, 0.2);
```

Usa `console.log()` para:

- Verificar si una función se está ejecutando.
- Imprimir el valor de las variables.
- Monitorear el flujo de control (por ejemplo, si se cumple una condición).

Otras funciones útiles de console:

- `console.error()` – para registrar errores.
- `console.warn()` – para advertencias.
- `console.table()` – para imprimir datos en forma de tabla.
- `console.trace()` – para imprimir el seguimiento de llamadas (stack trace).

## Uso de puntos de interrupción (Breakpoints)

Un punto de interrupción es una línea en tu código donde la ejecución se detendrá para que puedas examinar el estado actual: valores de variables, pila de llamadas, cadena de alcance (scope), entre otros.

Los navegadores modernos ofrecen herramientas para desarrolladores con capacidades de depuración.

### Cómo establecer puntos de interrupción
1. Abre el panel Sources en las DevTools.
2. Navega hasta tu archivo de script.
3. Haz clic en el número de línea donde quieres que la ejecución se detenga.

Una vez pausado el código, puedes:

- **Step over (pasar por encima)** – avanzar a la siguiente línea.
- **Step into (entrar en)** – entrar dentro de una llamada a función.
- **Step out (salir de)** – salir de la función actual.
- **Resume (reanudar)** – continuar la ejecución hasta el siguiente punto de interrupción.

Los puntos de interrupción no son intrusivos y pueden agregarse o eliminarse sin modificar el código fuente.

## Herramientas para desarrolladores del navegador

Los navegadores modernos vienen equipados con potentes herramientas de desarrollo que ayudan a depurar JavaScript, inspeccionar HTML y CSS y monitorear las solicitudes de red. A continuación se ofrece una breve descripción general de algunas herramientas esenciales:

**Chrome DevTools:** Las herramientas para desarrolladores de Google Chrome ofrecen una amplia gama de funciones para depurar aplicaciones web.

**Firefox DevTools:** Las herramientas de desarrollo de Mozilla Firefox son otra excelente opción que ofrece capacidades similares.

**Microsoft Edge DevTools:** Para los usuarios de Microsoft Edge, las herramientas de desarrollo integradas brindan funciones de depuración esenciales.

**Safari Web Inspector:** Web Inspector de Safari es un sólido conjunto de herramientas para depurar y crear perfiles de aplicaciones web.

### Acceso a las herramientas del navegador
Los navegadores ofrecen herramientas para inspeccionar HTML, CSS y JavaScript. Podemos acceder a ellas:
Haciendo clic derecho sobre la página y seleccionando "Inspeccionar" o presionando `F12` o `Ctrl + Shift + I` / `Cmd + Option + I` (Mac)

### Paneles clave en las herramientas del navegador
- **Console (Consola)**: Muestra registros, errores y permite ejecutar JavaScript en tiempo real.
- **Elements / Inspector**: Permite examinar y modificar el HTML y CSS del documento.
- **Sources**: Lugar donde se depura JavaScript usando puntos de interrupción.
- **Network (Red)**: Visualiza la carga de recursos, tiempos, y solicitudes/respuestas.
- **Performance / Memory**: Útil para identificar cuellos de botella y fugas de memoria.

Podemos insertar la instrucción debugger directamente en el código para crear un punto de interrupción de forma programada. Cuando el código encuentra debugger, se pausará la ejecución y se abrirán las herramientas de desarrollo del navegador (si están abiertas).

### Expresiones de vigilancia y alcance (Watch & Scope)
En las DevTools puedes vigilar variables o expresiones. Esto es útil cuando depuras lógica compleja o haces seguimiento de una variable a lo largo del tiempo.

- Usa el panel Watch para seguir expresiones como usuario.nombre o carrito.length.
- Examina los alcances Local, Closure y Global para inspeccionar las variables disponibles en cada contexto.

### Rastreo de pila y Call Stack
Cuando el código se detiene en un punto de interrupción (o tras un error), puedes inspeccionar el panel de Call Stack:

- Muestra la secuencia de funciones llamadas que llevaron hasta el punto actual.
- Al hacer clic en un marco (frame), puedes examinar variables en ese contexto.
Entender la pila de llamadas es esencial para corregir comportamientos inesperados producidos por un flujo de ejecución incorrecto.

## Estrategias comunes de depuración

- **Simplifica el problema**: Intenta aislar el ejemplo más pequeño y reproducible.
- **Usa afirmaciones (assertions)**: Verifica manualmente supuestos en tu código.
- **Depuración con pato de goma (rubber duck debugging)**: Explica tu código a otra persona (¡o a un objeto!) para descubrir errores lógicos.
- **Busca mensajes de error**: Los errores de JavaScript a menudo contienen información útil.
- **Verifica la compatibilidad con navegadores**: No todos los navegadores se comportan igual.
- **Usa linters**: Herramientas como ESLint pueden detectar errores comunes antes de que se ejecute el código.
