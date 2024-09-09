---
chapter: 16
pageNumber: 129
description: window es un objeto global que representa la ventana o pestaña del navegador en la que está cargada la página web actual. El objeto window actúa como objeto global para JavaScript del lado del cliente, lo que significa que las variables y funciones declaradas sin las palabras clave var, let o const se convierten en propiedades y métodos del objeto window.
---

# Window

El objeto `window` representa la ventana del navegador y es compatible con los navegadores. Las variables, objetos y funciones globales también forman parte del objeto `window`.  

Las **variables** globales son **propiedades** y las **funciones** son **métodos** del objeto window.

Tomemos un ejemplo de las propiedades de la pantalla. Se utiliza para determinar el tamaño de la ventana del navegador y se mide en píxeles.

* `window.innerHeight` - la altura interior de la ventana del navegador
* `window.innerWidth` - el ancho interior de la ventana del navegador

> _**Nota**_: `window.document` es lo mismo que `document.location` ya que el Modelo de Objetos del documento\(DOM\) es parte del objeto de ventana.

Algunos ejemplos de los métodos de ventana.

* `window.open()` - abre una nueva ventana
* `window.close()` - cierra la ventana actual
* `window.moveTo()` - mueve la ventana actual
* `window.resizeTo()` - cambia el tamaño de la ventana actual
