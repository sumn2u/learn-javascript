---
capítulo: 16
número de página: 84
descripción: Las cookies son fragmentos de información que se almacenan en una computadora y se pueden acceder a través del navegador.
---

# Cookies 🍪

Las cookies son fragmentos de información que se almacenan en una computadora y se pueden acceder a través del navegador.

La comunicación entre un navegador web y el servidor es sin estado, lo que significa que trata cada solicitud de manera independiente. Hay casos en los que necesitamos almacenar información del usuario y poner esa información a disposición del navegador. Con las cookies, la información se puede recuperar de la computadora cuando sea necesario.

Las cookies se guardan en pares de nombre y valor

```javascript
libro = Aprende JavaScript
```

La propiedad `document.cookie` se utiliza para crear, leer y eliminar cookies. Crear una cookie es bastante fácil, solo necesitas proporcionar el nombre y el valor

```javascript
document.cookie = "libro=Aprende JavaScript";
```

De manera predeterminada, una cookie se elimina cuando se cierra el navegador. Para que sea persistente, debemos especificar la fecha de vencimiento (en tiempo UTC).

```javascript
document.cookie = "libro=Aprende JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

Podemos agregar un parámetro para especificar a qué ruta pertenece la cookie. De manera predeterminada, la cookie pertenece a la página actual.

```javascript
document.cookie = "libro=Aprende JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Aquí tienes un ejemplo sencillo de una cookie.

```javascript
let cookies = document.cookie;
// una forma sencilla de recuperar todas las cookies.

document.cookie = "libro=Aprende JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// configurando una cookie
```
