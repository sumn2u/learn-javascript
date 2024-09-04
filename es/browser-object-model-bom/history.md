---
chapter: 16
pageNumber: 104
description: La propiedad history es un objeto que gestiona la pila del historial del navegador. A medida que navegamos por las páginas, las nuevas entradas se introducen en la pila.
---

# History

Cuando abrimos un navegador web y navegamos por una página web, se crea una nueva entrada en la pila del historial. A medida que seguimos navegando por diferentes páginas, se introducen nuevas entradas en la pila.

Para acceder al objeto de historial podemos usar

```javascript
window.history
// o
history
```

Para navegar entre las diferentes pilas de historial podemos usar los métodos `go()`, `forward()` y `back()` del objeto **history**.  

1. **go\(\)**: Se utiliza para navegar por la URL específica de la pila del historial.

   ```javascript
   history.go(-1); // mueve la página hacia atrás
   history.go(0);  // actualiza la página actual
   history.go(); // actualiza la página actual
   history.go(1) // mueve la página hacia adelante
   ```

   > _**Nota:**_ la posición actual de la página en la pila del historial es **0**.

2. **back\(\)**: Para navegar por la página hacia atrás utilizamos el método `back()`.

   ```javascript
   history.back();
   ```

3. **forward\(\)**: Carga la siguiente lista en el historial del navegador. Es similar a hacer clic en el botón de avance en el navegador.

   ```javascript
   history.forward();
   ```
