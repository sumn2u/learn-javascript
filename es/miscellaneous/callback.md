---
chapter: 19
pageNumber: 126
description: Una retrollamada es una función que se pasa como argumento a otra función, se ejecuta más tarde y se usa a menudo para operaciones asincrónicas. El infierno de las retrollamadas, también conocido como la "pirámide de la perdición", ocurre cuando las retrollamadas anidadas dan como resultado un código ilegible e imposible de mantener.
---

# Funciones de retrollamada (Callback function, en inglés) en JavaScript

Las funciones de retrollamada son un concepto fundamental en JavaScript, que permite la programación asincrónica y basada en eventos. Este documento de Markdown proporciona una explicación detallada de las funciones de retrollamada, su propósito y cómo usarlas de manera efectiva.

## ¿Qué es una función de retrollamada?

- Una **función de retrollamada** es una función de JavaScript que se pasa como argumento a otra función.
- Por lo general, se invoca o ejecuta más adelante, a menudo después de alguna operación o evento asincrónico.
- Las retrollamadas son esenciales para manejar tareas como la recuperación de datos, el manejo de eventos y el comportamiento asincrónico.

## ¿Por qué utilizar funciones de retrollamada?

- **Operaciones asincrónicas**: las retrollamadas son cruciales para administrar operaciones asincrónicas como lectura de archivos, solicitudes de API y temporizadores.
- **Manejo de eventos**: se utilizan para responder a eventos como clics en botones, entradas de usuarios o respuestas de red.
- **Código modular**: las retrollamadas ayudan a escribir código modular y reutilizable al separar los cometidos y promover el principio de responsabilidad única.

## Anatomía de una función de retrollamada

Una función de retrollamada típica tiene la siguiente estructura:

```javascript
function funcionRetrollamada(arg1, arg2, ..., retrollamada) {
    // Realiza algunas operaciones
    // ...
    
    // Llama a la función de retrollamada cuando ha terminado
    retrollamada(resultado);
}
```

- **funcionRetrollamada** es la función que toma una retrollamada como argumento. Puede realizar algunas operaciones de forma asincrónica.
- Eventualmente llama a la función **retrollamada** y le pasa un resultado o un error.

## Manejando errores en funciones de retrollamadas

En JavaScript, las funciones de retrollamada pueden manejar errores por convención. Es común pasar un objeto de error como primer argumento o usar el segundo argumento para representar errores. Los desarrolladores deben buscar errores y manejarlos adecuadamente dentro de la función de retrollamada.

## Enfoques alternativos a las retrollamadas

1. **Promesas**: Las promesas ofrecen una forma estructurada de manejar el código asincrónico y los errores. Tienen tres estados: pendiente, cumplido y rechazado. Las promesas utilizan los métodos `.then()` y `.catch()` para manejar escenarios de éxito y error.

2. **Async/Await**: Async/await es una adición más reciente a JavaScript. Simplifica el código asincrónico al permitir a los desarrolladores escribirlo en un estilo más sincrónico. Está construido sobre Promises (el objeto en JavaScript que representa a las promesas) y es especialmente útil para manejar operaciones asincrónicas con un flujo de código más lineal.

3. **Emisores de eventos**: en Node.js, la clase `EventEmitter` le permite crear arquitecturas personalizadas basadas en eventos para manejar tareas asincrónicas.

## Infierno de retrollamadas (Pirámide de retrollamadas) y ejemplo

El infierno de retrollamadas, también conocido como la "pirámide de la perdición", es un problema común en JavaScript cuando se trabaja con funciones de retrollamada profundamente anidadas. Este fenómeno ocurre cuando se encadenan múltiples operaciones asincrónicas una tras otra, lo que dificulta la lectura y el mantenimiento del código. Este documento de Markdown explica el infierno de las retrollamadas y proporciona un ejemplo sencillo.

## ¿Qué es un infierno de retrollamadas?

- El **infierno de retrollamadas** ocurre cuando funciones asincrónicas se anidan entre sí, lo que genera estructuras de código profundamente sangradas.
- Hace que el código sea más difícil de entender, depurar y mantener debido a niveles excesivos de sangría.
- El infierno de retrollamadas a menudo resulta del manejo secuencial de múltiples operaciones asincrónicas, como realizar solicitudes de API o leer/escribir archivos.

## Ejemplo de un infierno de retrollamadas

```javascript
operacionAsincrona1(function (resultado1) {
    // Retrollamada 1
    operacionAsincrona2(resultado1, function (resultado2) {
        // Retrollamada 2
        operacionAsincrona3(resultado2, function (resultado3) {
            // Retrollamada 3
            operacionAsincrona4(resultado3, function (resultado4) {
                // Retrollamada 4
                operacionAsincrona5(resultado4, function (resultado5) {
                    // Retrollamada 5
                    // ... etcétera
                });
            });
        });
    });
});
```

## Problemas con el infierno de retrollamadas

- **Legibilidad**: el infierno de retrollamadas conduce a un código con sangría profunda, lo que dificulta su lectura y comprensión. Esto puede dificultar la revisión del código y la colaboración.

- **Mantenibilidad**: a medida que se agregan más operaciones asincrónicas, el infierno de retrollamadas hace que el código base sea difícil de mantener. Modificar la funcionalidad existente o agregar nuevas funciones se vuelve propenso a errores.

- **Manejo de errores**: la gestión de errores se vuelve compleja en las retrollamadas anidadas. Manejar excepciones y propagar errores a niveles superiores puede resultar un desafío.

## Mitigar el infierno de las retrollamadas

### 1. Funciones nombradas

- Divida las funciones de retrollamada en funciones separadas con nombre. Esto mejora la legibilidad del código al dar nombres significativos a funciones individuales.

### 2. Promesas

- Las promesas proporcionan una forma más estructurada de manejar el código asincrónico. Le permiten encadenar operaciones asincrónicas, haciendo que el código sea más lineal y más fácil de leer.

### 3. Async/Await

- Async/await es una adición más reciente a JavaScript. Simplifica el código asincrónico al permitirle escribirlo en un estilo más sincrónico. Está construido sobre Promises y es especialmente útil para manejar operaciones asincrónicas con un flujo de código más lineal.

### 4. Modularización

- Organice el código en módulos más pequeños y reutilizables. Esto reduce la complejidad de las funciones individuales y facilita la gestión de operaciones asincrónicas.

## Conclusión

El manejo eficaz de errores es crucial en la programación asincrónica. Las retrollamadas pueden manejar errores por convención, pero enfoques alternativos como Promises, async/await y emisores de eventos proporcionan formas más estructuradas y legibles de administrar código asincrónico. La elección de qué enfoque utilizar depende de los requisitos específicos y las preferencias de estilo de codificación.

El infierno de retrollamadas es un problema común en JavaScript cuando se trabaja con funciones de retrollamada profundamente anidadas para manejar operaciones asincrónicas. Puede generar código que sea difícil de leer, mantener y depurar. Las estrategias de mitigación, como el uso de funciones con nombre, promesas, async/await o modularización, pueden mejorar significativamente la estructura y la legibilidad del código cuando se trata de tareas asincrónicas, lo que hace que su código sea más fácil de mantener y resistente a errores.
