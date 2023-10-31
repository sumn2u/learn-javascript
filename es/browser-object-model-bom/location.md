---
chapter: 16
pageNumber: 86
description: La propiedad location es un objeto integrado que representa la URL actual de la página web que se muestra en el navegador. Proporciona la ubicación de la página web actual y permite realizar diversas operaciones relacionadas con las URL.
---
# Location

El objeto `location` se utiliza para recuperar la ubicación actual (URL) del documento y proporciona diferentes métodos para manipular la ubicación del documento. Se puede acceder a la ubicación actual mediante

```javascript
window.location
//o
document.location
//o
location
```

> _**Nota**_: `window.location` y `document.location` hacen referencia al mismo objeto `location`.

Tomemos un ejemplo de la siguiente URL y exploremos las diferentes propiedades de `location`

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

```javascript
location.href //imprime la URL del documento actual
location.protocol //imprime protocolo como http: o https:
location.host //imprime el nombre de host con un puerto como localhost o localhost:3000
location.hostname //imprime el nombre de host como localhost o www.example.com
location.port //imprime el número de puerto como 3000
location.pathname //imprime el nombre de la ruta como /js/index.html
location.search //imprime una cadena de consulta como ?type=listing&page=2
location.hash //imprime el identificador del fragmento como #title
```
