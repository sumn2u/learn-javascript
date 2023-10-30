---
layout: editorial
capítulo: 16
número de página: 79
descripción: El modelo de objetos del navegador nos permite interactuar con la ventana del navegador. A través de él, se pueden controlar o manipular varios aspectos del navegador, como la ventana, los marcos, el historial, la ubicación y más.
---

# Capítulo 16
# Modelo de objetos del navegador (BOM)

El modelo de objetos del navegador nos permite interactuar con la ventana del navegador. El objeto `window` representa la ventana del navegador y es compatible con todos los navegadores.

El objeto `window` es el objeto predeterminado para un navegador, por lo que podemos especificar `window` o llamar directamente a todas las funciones.

```javascript
window.alert("Bienvenido a Aprende JavaScript");  

alert("Bienvenido a Aprende JavaScript")
```

De manera similar, podemos llamar a otras propiedades que se encuentran bajo el objeto window, como history, screen, navigator, location y otras.