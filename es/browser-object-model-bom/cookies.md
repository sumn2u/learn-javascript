---
chapter: 16
pageNumber: 133
description: Las cookies son piezas de información que se almacenan en una computadora y a las que puede acceder el navegador.
---
# Cookies 🍪

Las cookies son piezas de información que se almacenan en una computadora y a las que puede acceder el navegador.

La comunicación entre un navegador web y el servidor no tiene estado, lo que significa que trata cada solicitud de forma independiente. Hay casos en los que necesitamos almacenar información del usuario y ponerla a disposición del navegador. Con las cookies, se puede recuperar información del ordenador cuando sea necesario.

Las cookies se guardan en un par nombre-valor.

```javascript
book = Learn Javascript
```

La propiedad `document.cookie` se utiliza para crear, leer y eliminar cookies. Crear una cookie es bastante fácil; debe proporcionar el nombre y el valor.

```javascript
document.cookie = "book=Learn Javacript";
```

De forma predeterminada, una cookie se elimina cuando se cierra el navegador. Para que sea persistente, debemos especificar la fecha de vencimiento (en hora UTC).

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

Podemos agregar un parámetro para saber a qué ruta pertenece la cookie. Por defecto, la cookie pertenece a la página actual.

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

A continuación se muestra un ejemplo sencillo de una cookie.

```javascript
let cookies = document.cookie;
// una forma sencilla de recuperar todas las cookies.

document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// configura una cookie
```
