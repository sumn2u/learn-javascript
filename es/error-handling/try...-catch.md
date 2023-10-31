---
layout: editorial
chapter: 12
pageNumber: 68
description: En la programación, los errores ocurren por varias razones, algunos se deben a errores de código, otros se deben a una entrada incorrecta y otras cosas imprevisibles. La captura de prueba ayuda a evitar que todo el script se detenga o falle cuando se produce un error, lo que nos permite manejar con elegancia casos excepcionales y proporcionar un comportamiento alternativo.
---

# Capítulo 12

## Manejo de errores

En la programación, los errores ocurren por varias razones, algunos se deben a errores de código, otros se deben a una entrada incorrecta y otras cosas imprevisibles. Cuando ocurre un error, el código se detiene y genera un mensaje de error que normalmente se ve en la consola.

## try... catch

En lugar de detener la ejecución del código, podemos usar la construcción `try...catch` que permite detectar errores sin que el script muera. La construcción `try...catch` tiene dos bloques principales; `try` y luego `catch`.

```javascript
try {
  // código...
} catch (err) {
  // manejo del error
}
```

Al principio, se ejecuta el código del bloque `try`. Si no se encuentran errores, se omite el bloque `catch`. Si ocurre un error, entonces se detiene la ejecución de `try`, moviendo la secuencia de control al bloque `catch`. La causa del error se captura en la variable `err`.

```javascript
try {
  // código...
  alert('Bienvenido a Aprender JavaScript');  
  asdk; // error la variable asdk no está definida
} catch (err) {
  console.log("Un error ha ocurrido");
}
```

{% hint style="warning" %}
`try...catch` Funciona para errores de tiempo de ejecución, lo que significa que el código debe ser ejecutable y sincrónico.
{% endhint %}

Para generar un error personalizado, se puede utilizar una declaración `throw`. El objeto de error generado por errores tiene dos propiedades principales.

* **name**:  nombre del error
* **message**: detalles sobre el error

{% hint style="info" %}
Si no necesitamos un mensaje de `error`, se puede omitir la captura.
{% endhint %}
