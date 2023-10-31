---
capítulo: 16
número de página: 86
descripción: El objeto de Ubicación es un objeto incorporado que representa la URL actual de la página web que se muestra en el navegador. Proporciona la ubicación actual de la página web y permite realizar diversas operaciones relacionadas con las URL.
---

# Ubicación

El objeto `location` se utiliza para obtener la ubicación actual (URL) del documento y proporciona diferentes métodos para manipular la ubicación del documento. Puede acceder a la ubicación actual mediante

```javascript
window.location
//o
document.location
//o
location
```

> _**Note**_: `window.location` y `document.location` hacen referencia al mismo objeto de ubicación.

Tomemos un ejemplo de la siguiente URL y exploremos las diferentes propiedades de `location`

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

```javascript
location.href //imprime la URL actual del documento
location.protocol //imprime el protocolo, como http: o https:
location.host //imprime el nombre de host con el puerto, como localhost o localhost:3000
location.hostname //imprime el nombre de host, como localhost o www.example.com
location.port //imprime el número de puerto, como 3000
location.pathname //imprime la ruta, como /js/index.html
location.search //imprime la cadena de consulta, como ?type=listing&page=2
location.hash //imprime el identificador de fragmento, como #title
```
