---
chapter: 16
pageNumber: 101
description: El objeto screen contiene la información sobre la pantalla en la que se está representando la ventana actual. Permite a los desarrolladores acceder a propiedades relacionadas con el tamaño de la pantalla del usuario, la resolución, la profundidad del color y otra información relacionada con la visualización.
---
# Screen

El objeto `screen` contiene la información sobre la pantalla en la que se está representando la ventana actual. Para acceder al objeto `screen` podemos usar la propiedad `screen` del objeto `window`.

```javascript
window.screen
//o
screen
```

El objeto `window.screen` tiene diferentes propiedades, algunas de ellas se enumeran aquí:

| Propiedad     | Descripción                                                                                                                           |
| --------------| ------------------------------------------------------------------------------------------------------------------------------------- |
| `height`      | Representa la altura de píxeles de la pantalla.                                                                                       |
| `left`        | Representa la distancia en píxeles del lado izquierdo de la pantalla actual.                                                          |
| `pixelDepth`  | Una propiedad de solo lectura que devuelve la profundidad de bits de la pantalla.                                                     |
| `top`         | Representa la distancia en píxeles de la parte superior de la pantalla actual.                                                        |
| `width`       | Representa el ancho de píxeles de la pantalla.                                                                                        |
| `orientation` | Devuelve la orientación de la pantalla como se especifica en la IPA de Orientación de Pantalla.                                       |
| `availTop`    | Una propiedad de solo lectura que devuelve el primer píxel desde la parte superior que no está ocupado por los elementos del sistema. |
| `availWidth`  | Una propiedad de solo lectura que devuelve el ancho de píxeles de la pantalla excluyendo los elementos del sistema.                   |
| `colorDepth`  | Una propiedad de solo lectura que devuelve el número de bits utilizados para representar los colores.                                 |
