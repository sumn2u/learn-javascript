---
layout: editorial
chapter: 16
pageNumber: 79
description: El modelo de objetos del navegador nos permite interactuar con la ventana del navegador. A través de él se pueden controlar o manipular varios aspectos del navegador, como la ventana, marcos, historial, ubicación y más.
---

# Capítulo 16

## Modelo de Objetos del Navegador (BOM en inglés)

El modelo de objetos del navegador nos permite interactuar con la ventana del navegador. El objeto `window` representa la ventana del navegador y es compatible con todos los navegadores.

El objeto `window` es el objeto predeterminado para un navegador, por lo que podemos especificar `window` o llamar directamente a todas las funciones.

```javascript
window.alert("Bienvenido a Aprender JavaScript");  

alert("Bienvenido a Aprender JavaScript")
```

De manera similar, podemos llamar a otras propiedades debajo del objeto `window`(ventana), como `history` (historial), `screen` (pantalla), `navigator`(navegador), `location`(ubicación), etc.
