---
capítulo: 16
número de página: 85
descripción: El objeto Historia administra la pila de historial del navegador. A medida que navegamos a las páginas, se crean nuevas entradas en la pila.
---

# Historia

Cuando abrimos un navegador web y visitamos una página web, se crea una nueva entrada en la pila de historial. A medida que seguimos navegando por diferentes páginas, se añaden nuevas entradas a la pila.

Para acceder al objeto Historia, podemos utilizar

```javascript
window.history
// o
history
```

Para navegar entre las diferentes entradas de la pila de historial, podemos utilizar los métodos go(), forward() y back() del objeto history.

1. **go\(\)**: Se utiliza para navegar a una URL específica en la pila de historial.

   ```javascript
    history.go(-1); // retrocede una página
    history.go(0);  // actualiza la página actual
    history.go();   // actualiza la página actual
    history.go(1)  // avanza una página

   ```

   > _**Note:**_ la posición actual de la página en la pila de historial es **0**.

2. **back\(\)** : Para retroceder una página, utilizamos el método `back()`.

   ```javascript
   history.back();
   ```

3. **forward\(\)**: Carga la siguiente entrada en el historial del navegador. Es similar a hacer clic en el botón de avance en el navegador.

   ```javascript
   history.forward();
   ```

