---
capítulo: 16
número de página: 80
descripción: La ventana es un objeto global que representa la ventana del navegador o la pestaña en la que se carga la página web actual. El objeto ventana actúa como el objeto global para JavaScript en el lado del cliente, lo que significa que las variables y funciones declaradas sin las palabras clave var, let o const se convierten en propiedades y métodos del objeto ventana.
---

# Ventana

El objeto `window` representa la ventana del navegador y es compatible con los navegadores. Las variables globales, los objetos y las funciones también forman parte del objeto ventana.

Las **variables** globales son **propiedades** y las **funciones** son **métodos** del objeto ventana.

Veamos un ejemplo de las propiedades de la ventana. Se utilizan para determinar el tamaño de la ventana del navegador y se miden en píxeles.

* `window.innerHeight` - la altura interna de la ventana del navegador.
* `window.innerWidth` - el ancho interno de la ventana del navegador.

> _**Nota**_: `window.document` es lo mismo que `document.location`, ya que el modelo de objetos del documento (DOM) es parte del objeto ventana.

Algunos ejemplos de los métodos de la ventana:

* `window.open()` - abre una nueva ventana.
* `window.close()` - cierra la ventana actual.
* `window.moveTo()` - mueve la ventana actual.
* `window.resizeTo()` - cambia el tamaño de la ventana actual.
