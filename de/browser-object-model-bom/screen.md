---
capítulo: 16
número de página: 82
descripción: El objeto screen contiene información sobre la pantalla en la que se está representando la ventana actual. Permite a los desarrolladores acceder a propiedades relacionadas con el tamaño de pantalla, la resolución, la profundidad de color y otra información relacionada con la visualización del usuario.
---

# Pantalla

El objeto `screen` contiene información sobre la pantalla en la que se está representando la ventana actual. Para acceder al objeto `screen`, podemos utilizar la propiedad `screen` del objeto `window`.

```javascript
window.screen
//o
screen
```

El objeto `window.screen` tiene diferentes propiedades, algunas de las cuales se enumeran aquí:

| Propiedad| Descripción |
| :--- | :--- |
| `height` | Representa la altura en píxeles de la pantalla. |
| `left` | Representa la distancia en píxeles desde el lado izquierdo de la pantalla actual. |
| `pixelDepth` | Una propiedad de solo lectura que devuelve la profundidad de bits de la pantalla. |
| `top` | Representa la distancia en píxeles desde la parte superior de la pantalla actual. |
| `width` | Representa el ancho en píxeles de la pantalla. |
| `orientation` |  Devuelve la orientación de la pantalla según lo especificado en la API de Orientación de Pantalla. |
| `availTop` | Una propiedad de solo lectura que devuelve el primer píxel desde la parte superior que no está ocupado por elementos del sistema. |
| `availWidth` | Una propiedad de solo lectura que devuelve el ancho en píxeles de la pantalla excluyendo elementos del sistema. |
| `colorDepth` | Una propiedad de solo lectura que devuelve el número de bits utilizados para representar los colores. |



